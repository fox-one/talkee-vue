import {
  Component,
  Vue,
  Prop
} from 'vue-property-decorator';
import TalkeeSDK from '@links-japan/talkee';
import classnames from '@utils/classnames';
/* import types */
import type { CreateElement, VNode } from 'vue';

@Component
export class Talkee extends Vue {
  @Prop({ type: String, default: '' }) private apiBase!: string;
  @Prop({ type: String, default: '' }) private loginBase!: string;
  @Prop({ type: String, default: 'talkee' }) private prefixCls!: string;
  @Prop({ type: Number, default: 1 }) private siteId!: number;
  @Prop({ type: Number, default: void 0 }) private slug!: number;
  @Prop({ type: Boolean, default: true }) private expandable!: string;
  @Prop({ type: Array, default: () => [] }) private tweetTags!: string[];

  public get classes() {
    return classnames(this.prefixCls);
  }

  public mounted() {
    if (!this.siteId || !this.slug || !this.apiBase || !this.loginBase) {
      console.error('The [siteId], [slug], [apiBase] and [loginBase] is required!');
      return;
    }

    new TalkeeSDK({
      // required
      siteId: this.siteId, // site id. 1 is debug env
      slug: this.slug, // post slug. the unique id to identify posts
      commentSelector: '#talkee', // selector for comments. should be a string or a dom object

      // optional
      prefixCls: this.prefixCls,
      expandable: this.expandable,
      tweetTags: this.tweetTags, // tweet tags
      // identitySelector: '#links-login',     // selector for identity.
      apiBase: this.apiBase,                     // alternative apiBase.
      loginBase: this.loginBase                   // alternative login url.
    });
  }

  public render(h: CreateElement): VNode {
    return h(
      'div',
      {
        staticClass: this.classes('outer'),
        domProps: {
          id: 'talkee'
        }
      }
    );
  }
}

export default Talkee;