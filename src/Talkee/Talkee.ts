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
  @Prop({ type: String, default: '' }) private clientId!: string;
  @Prop({ type: String, default: 'talkee' }) private prefixCls!: string;
  @Prop({ type: Number, default: 1 }) private siteId!: number;
  @Prop({ type: Number, default: void 0 }) private slug!: number;
  @Prop({ type: Boolean, default: true }) private expandable!: string;
  @Prop({ type: Array, default: () => [] }) private tweetTags!: string[];

  private size = {
    width: 0,
    height: 0
  };

  private observer: undefined | MutationObserver;

  public get classes() {
    return classnames(this.prefixCls);
  }

  private initObserver() {
    const talkee = this.$refs.talkee as HTMLElement,
      config = {
        attributes: true,
        childList: true,
        substree: true
      };

    const self = this;
    const observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        const w = talkee.offsetWidth;
        const h = talkee.offsetHeight;
        if (self.size.width !== w || self.size.height !== h) {
          self.size.width = w;
          self.size.height = h;
          self.$emit('resize');
        }
      });
    });

    // observe element's specified mutations
    observer.observe(talkee, config);
    // add the observer to data so we can disconnect it later
    this.observer = observer;
  }

  public mounted() {
    if (!this.siteId || !this.slug || !this.apiBase || !this.loginBase || !this.clientId) {
      console.error('The [siteId], [slug], [apiBase], [clientId] and [loginBase] is required!');
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
      loginBase: this.loginBase,                   // alternative login url.
      clientId: this.clientId
    });

    this.initObserver();
  }

  public beforeDestroy() {
    if (this.observer) this.observer.disconnect();
  }

  public render(h: CreateElement): VNode {
    return h(
      'div',
      {
        staticClass: this.classes('wrapper'),
        domProps: {
          id: 'talkee'
        },
        ref: 'talkee'
      }
    );
  }
}

export default Talkee;