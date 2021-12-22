import {
  defineComponent,
  onBeforeMount
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

export default defineComponent({
  name: 'TalkeeNext',
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

    return { classes, isLogin: helper.getToken() && helper.getProfile() };
  },
  methods: {
    handleError(e) {
      logger.error(e);
      this.$emit('error', e);
    }
  },
  render(h: CreateElement): VNode {
    const { prefixCls } = this.$props;

    return (
      <div class={this.classes('', 'd-flex flex-column')}>
        <SortBar
          vOn:error={this.handleError}
          prefixCls={prefixCls}
          {...{ attrs: this.$attrs }}
        />
        <div class="my-6 text-center">
          { this.isLogin ? <Editor
            vOn:error={this.handleError}
            prefixCls={prefixCls}
            {...{ attrs: this.$attrs }}
          /> : <LoginBtn
            vOn:error={this.handleError}
            prefixCls={prefixCls}
            {...{ attrs: this.$attrs }}
          />}
        </div>
        <Comments
          vOn:error={this.handleError}
          prefixCls={prefixCls}
          {...{ attrs: this.$attrs }}
        />
      </div>
    );
  }
});