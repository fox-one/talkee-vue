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
    site_id: {
      type: [Number, String],
      default: null
    },
    slug: {
      type: String,
      default: null
    },
    api_base: {
      type: String,
      default: null
    },
  },
  setup(props, context) {
    const {
      prefixCls,
      site_id,
      slug,
      api_base
    } = props;
    const classes = classnames(prefixCls);
    onBeforeMount(() => {
      if (site_id == null || slug == null || api_base == null) {
        context.emit('error', 'missing params!');
        logger.error('missing params!');
        return;
      }
      helper.setDefaultParams({
        site_id,
        slug,
        api_base
      })
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
    return (
      <div class={this.classes('', 'd-flex flex-column')}>
        <SortBar vOn:error={this.handleError} />
        <div class="my-6 text-center">
          { this.isLogin ? <Editor /> : <LoginBtn />}
        </div>
        <Comments />
      </div>
    );
  }
});