import {
  Component,
  Vue,
  Prop,
  Watch
} from 'vue-property-decorator';
import TalkeeSDK from '@links-japan/talkee';
import classnames from '@utils/classnames';
/* import types */
import type { CreateElement, VNode } from 'vue';

export type TALKEE_INSTANCE = TalkeeSDK;

@Component
export class Talkee extends Vue {
  @Prop({ type: String, default: '' }) private apiBase!: string;
  @Prop({ type: String, default: '' }) private loginUrl!: string;
  @Prop({ type: String, default: 'talkee' }) private prefixCls!: string;
  @Prop({ type: Number, default: 1 }) private siteId!: number;
  @Prop({ type: [String, Number], default: void 0 }) private slug!: number | string;
  @Prop({ type: Boolean, default: true }) private expandable!: string;
  @Prop({ type: Array, default: () => [] }) private tweetTags!: string[];
  @Prop({ type: Object, default: () => { } }) private renderOpts!: {
    metabar?: boolean;
    subcomment?: boolean;
    tweet?: boolean;
    reply?: boolean;
  };

  private talkee: undefined | TALKEE_INSTANCE;

  private size = {
    width: -Infinity,
    height: -Infinity
  };

  private timer: undefined | ReturnType<typeof setTimeout>;

  public get classes() {
    return classnames(this.prefixCls);
  }

  private handleError(e: any) {
    this.$emit('error', e);
  }

  private resizeListener() {
    this.$nextTick(() => {
      const talkee = this.$refs.talkee as HTMLElement;
      const {
        width,
        height
      } = talkee.getBoundingClientRect();
      const w = talkee.offsetWidth ?? width;
      const h = talkee.offsetHeight ?? height;

      if (this.size.width !== w || this.size.height !== h) {
        this.size.width = w;
        this.size.height = h;
        this.$emit('resize', this.talkee);
      }

      this.timer = setTimeout(() => {
        this.resizeListener();
      }, 1500);
    });
  }

  private initTalkee() {
    if (this.talkee) return;
    if (!this.siteId || !this.slug || !this.apiBase || !this.loginUrl) {
      console.error(`
        siteId: ${this.siteId},
        slug: ${this.slug},
        apiBase: ${this.apiBase},
        loginUrl: ${this.loginUrl}
      `);
      console.error('The [siteId], [slug], [apiBase] and [loginUrl] is required!');
      return;
    }

    this.talkee = new TalkeeSDK({
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
      loginUrl: this.loginUrl,                   // alternative login url.
      render: this.renderOpts,
      onError: this.handleError,
      redirectHash: false,
      hidePaginationWhenSinglePage: true
    });

    this.$emit('init', this.talkee);
  }

  public mounted() {
    this.initTalkee();
    this.resizeListener();
  }

  public beforeDestroy() {
    if (this.timer !== void 0) {
      clearTimeout(this.timer);
      this.timer = void 0;
    }
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

  @Watch('siteId')
  @Watch('slug')
  @Watch('apiBase')
  @Watch('loginUrl')
  protected updateTalkee() {
    if (this.talkee) {
      this.talkee.setOptions({
        siteId: this.siteId,
        slug: this.slug,
        apiBase: this.apiBase,
        loginUrl: this.loginUrl
      });
      this.$emit('update', this.talkee);
    } else {
      this.initTalkee();
    }
  }
}

export default Talkee;