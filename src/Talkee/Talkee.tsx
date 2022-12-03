import {
  ref,
  computed,
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
    clientId: {
      type: String,
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
      clientId,
      slug,
      apiBase,
    } = props;
    const classes = classnames(prefixCls);
    const total = ref(0);
    const order = ref('favor_count');
    const token = ref(helper.getToken())
    const profile = ref(helper.getProfile())
    const isLogin = computed(() => !!(token.value && profile.value))

    onBeforeMount(async () => {
      if (siteId == null || slug == null || apiBase == null || clientId == null) {
        context.emit('error', 'missing params!');
        logger.error('missing params!');
        return;
      }
      helper.setDefaultParams({
        site_id: siteId,
        client_id: clientId,
        slug,
        api_base: apiBase,
      });
    });

    onMounted(() => {
      context.emit('init', { ...props });
    });

    return {
      classes,
      total,
      order,
      isLogin,
      token,
      profile
    };
  },
  methods: {
    handleUpdate() {
      this.token = helper.getToken()
      this.profile = helper.getProfile()
    },
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
            clientId={this.clientId}
            {...{ attrs: this.$attrs }}
            vOn:update={this.handleUpdate}
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