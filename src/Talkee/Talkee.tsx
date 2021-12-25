import {
  ref,
  defineComponent,
  onBeforeMount,
  onMounted
} from '@vue/composition-api';
import classnames from '@utils/classnames';
import helper from '@utils/helper';
import { logger } from '@utils/logger';
import Comments from '../Comments';
import Editor from '../Editor';
import SortBar from '../SortBar';
import LoginBtn from '../LoginBtn';
/* import types */
import type { CreateElement, VNode } from 'vue';
import type { IComment } from '@/types/api';

export default defineComponent({
  name: 'Talkee',
  components: {
    Comments,
    Editor,
    SortBar,
    LoginBtn
  },
  props: {
    prefixCls: {
      type: String,
      default: 'talkee'
    },
    siteId: {
      type: [Number, String],
      default: null
    },
    slug: {
      type: String,
      default: null
    },
    apiBase: {
      type: String,
      default: null
    },
    loginUrl: {
      type: String,
      default: null
    },
    commentHeight: {
      type: String,
      default: '50vh'
    },
    commentLength: {
      type: [Number, String],
      default: 512
    },
    nestedId: {
      type: [Number, String],
      default: ''
    }
  },
  setup(props, context) {
    const {
      prefixCls,
      siteId,
      slug,
      apiBase,
      loginUrl
    } = props;
    const classes = classnames(prefixCls);
    const total = ref(0);
    const order = ref('favor_count');
    const isLogin = helper.getToken() && helper.getProfile();

    onBeforeMount(() => {
      if (siteId == null || slug == null || apiBase == null || loginUrl == null) {
        context.emit('error', 'missing params!');
        logger.error('missing params!');
        return;
      }
      helper.setDefaultParams({
        site_id: siteId,
        slug,
        api_base: apiBase,
        login_url: loginUrl
      });
    });

    onMounted(() => {
      context.emit('init', { ...props, isLogin })
    });

    return {
      classes,
      total,
      order,
      isLogin
    };
  },
  methods: {
    handleError(e) {
      logger.error(e);
      this.$emit('error', e);
    },
    handleComment(comment: IComment) {
      (this.$refs.comments as any)?.comments?.unshift?.(comment);
      this.total++;
    },
    handleOrderChange(type: string) {
      switch(type) {
        case 'asc':
          this.order = 'id-asc';
          break;
        case 'desc':
          this.order = 'id';
          break;
        default:
          this.order = 'favor_count';
          break;
      }
    }
  },
  render(h: CreateElement): VNode {
    const { prefixCls } = this.$props;
    const LoginBtnSlot = this.$slots.loginBtn?.[0];

    return (
      <div class={this.classes('', 'd-flex flex-column')}>
        <SortBar
          vOn:error={this.handleError}
          vOn:sort={this.handleOrderChange}
          prefixCls={prefixCls}
          total={this.total}
          {...{ attrs: this.$attrs }}
        />
        <div class={this.classes('middle', 'mt-6 text-center')}>
          { this.isLogin ? <Editor
            vOn:error={this.handleError}
            vOn:comment={this.handleComment}
            prefixCls={prefixCls}
            maxLength={this.commentLength}
            {...{ attrs: this.$attrs }}
          /> : <LoginBtn
            vOn:error={this.handleError}
            prefixCls={prefixCls}
            {...{ attrs: this.$attrs }}
          >
              {
                LoginBtnSlot
                  ? <div slot="button">
                    { LoginBtnSlot }
                  </div>
                  : ""
              }
            </LoginBtn>
          }
        </div>
        <Comments
          vOn:error={this.handleError}
          vOn:loaded={() => {
            this.total = (this.$refs.comments as any)?.total;
          }}
          order={this.order}
          height={this.commentHeight}
          maxLength={this.commentLength}
          nestedId={this.nestedId}
          class="pt-4"
          prefixCls={prefixCls}
          ref="comments"
          {...{ attrs: this.$attrs }}
        />
      </div>
    );
  }
});