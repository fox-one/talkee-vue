import {
  ref,
  defineComponent,
  onBeforeMount,
  onMounted
} from '@vue/composition-api';
import classnames from '@utils/classnames';
import helper from '@utils/helper';
import { logger } from '@utils/logger';
import apis from '@apis/index';
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
    const isLogin = ref(!!(helper.getToken() && helper.getProfile()));

    onBeforeMount(async () => {
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
      if (!isLogin.value) {
        const query: any = helper.getUrlQuery();
        if (query.code) {
          try {
            const auth = await apis.auth(query.code);
            helper.setAuth(auth);
            const me = await apis.getMe();
            helper.setProfile(me);
            isLogin.value = true;
            context.emit('login:success');
          } catch (err) {
            context.emit('login:fail', err);
            context.emit('error', err);
          }
        } else {
          helper.setRedirect();
        }
      }
    });

    onMounted(() => {
      context.emit('init', { ...props, isLogin: isLogin.value });
    });

    return {
      classes,
      total,
      order,
      isLogin
    };
  },
  methods: {
    handleKeyboard(state: 'rise' | 'fold') {
      this.$emit('keyboard', state);
    },
    handleError(e) {
      logger.error(e);
      this.$emit('error', e);
    },
    handleComment(comment: string) {
      this.total++;
      (this.$refs.comments as any)?.comments?.unshift?.(comment);
      (this.$refs.comments as any)?.scrollToTop?.();
      this.$emit('comment', comment);
    },
    handleSubComment(comment: string) {
      this.$emit('subcomment', comment);
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
            vOn:keyboard={this.handleKeyboard}
            vOn:error={this.handleError}
            vOn:comment={this.handleComment}
            prefixCls={prefixCls}
            isLogin={this.isLogin}
            maxLength={this.commentLength}
            {...{ attrs: this.$attrs }}
          /> : <LoginBtn
            vOn:error={this.handleError}
            prefixCls={prefixCls}
            {...{ attrs: this.$attrs }}
          />}
        </div>
        <Comments
          vOn:keyboard={this.handleKeyboard}
          vOn:error={this.handleError}
          vOn:loaded={() => {
            this.total = (this.$refs.comments as any)?.total;
          }}
          vOn:subcomment={this.handleSubComment}
          order={this.order}
          height={this.commentHeight}
          maxLength={this.commentLength}
          nestedId={this.nestedId}
          isLogin={this.isLogin}
          class="pt-4"
          prefixCls={prefixCls}
          ref="comments"
          {...{ attrs: this.$attrs }}
        />
      </div>
    );
  }
});