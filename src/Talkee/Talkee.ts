import {
  Component,
  Vue,
  Prop
} from 'vue-property-decorator';
import classnames from '@utils/classnames';
import TalkeeSDK from '@links-japan/talkee';
/* import types */
import type { CreateElement, VNode } from 'vue';

@Component
export class Talkee extends Vue {
  @Prop({ type: String, default: '' }) private className!: string;

  public mounted() {
    new TalkeeSDK({
      // required
      siteId: 4, // site id. 1 is debug env
      // slug: slug, // post slug. the unique id to identify posts
      commentSelector: '#talkee', // selector for comments. should be a string or a dom object

      // optional
      expandable: true, //
      tweetTags: ['#LINKS', '#リンケス'] // tweet tags
      // identitySelector: '#links-login',     // selector for identity.
      // apiBase: apiBase,                     // alternative apiBase.
      // loginUrl: loginUrl,                   // alternative login url.
    });
  }

  public render(h: CreateElement): VNode {
    const content = this.$slots.default;
    const classes = classnames({ prefix: 'prefix' });
    return h(
      'div',
      {
        staticClass: classes('talkee'),
        class: this.className,
        domProps: {
          id: 'talkee'
        }
      },
      content
    );
  }
}

export default Talkee;