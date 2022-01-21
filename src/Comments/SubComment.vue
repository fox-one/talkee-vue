<template>
  <v-layout :class="classes('comment-sub')" column align-end>
    <template v-if="isLogin">
      <v-textarea
        v-model="content"
        filled
        flat
        height="60"
        :placeholder="meta.label"
        :counter="maxLength"
        :class="classes('comment-sub-textarea')"
        @focus="$emit('keyboard', 'rise')"
        @blur="$emit('keyboard', 'fold')"
      />
      <v-btn
        text
        small
        plain
        :ripple="false"
        color="primary"
        :class="classes('comment-sub-btn', 'align-self-start')"
        :loading="loading"
        @click="handleSubmit"
      >
        {{ meta.submit }}
      </v-btn>
    </template>
    <login-btn v-else :prefix-cls="prefixCls" class="align-self-start" />
    <section v-if="subcomments.length" :class="classes('comment-sub-wrapper', 'd-flex flex-column align-self-start mt-2')">
      <sub-comment-item
        v-for="(sub, ind) in subcomments"
        :key="`subcomment-${sub.id || ind}`"
        :subcomment="sub"
      />
      <v-btn
        v-if="hasNext"
        text 
        small
        plain
        :ripple="false"
        color="accent"
        class="pa-0 align-self-end mt-2 mr-6"
        @click="loadData"
      >
        {{ meta.loadMore }}
      </v-btn>
    </section>
  </v-layout>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  ref
} from '@vue/composition-api';
import { VLayout, VBtn, VTextarea } from 'vuetify/lib';
import DOMPurify from 'dompurify';
import classnames from '@utils/classnames';
import helper from '@utils/helper';
import apis from '@apis/index';
import { $t } from '@/i18n';
import LoginBtn from '../LoginBtn';
import SubCommentItem from './SubCommentItem.vue';

import type { IComment } from '@/types/api';

export default defineComponent({
  name: 'SubComment',
  components: { LoginBtn, SubCommentItem, VLayout, VBtn, VTextarea },
  props: {
    prefixCls: {
      type: String,
      default: 'talkee'
    },
    comment: {
      type: Object as PropType<IComment>,
      default: () => ({})
    },
    order: {
      type: String as PropType<'favor_count' | 'id' | 'id-asc' | 'id-desc'>,
      default: 'favor_count'
    },
    favor: {
      type: Boolean,
      default: false,
    },
    show: {
      type: Boolean,
      default: false,
    },
    maxLength: {
      type: [Number, String],
      default: 512
    },
    isLogin: {
      type: Boolean,
      default: !!(helper.getToken() && helper.getProfile())
    }
  },
  setup(props) {
    const { prefixCls } = props;
    const classes = classnames(prefixCls);
    const content = ref('');
    const loading = ref(false);
    const page = ref(1);
    const hasNext = ref(true);
    const subcomments = ref([] as any[]);
    const meta = {
      label: $t('sub_comment_placeholder'),
      submit: $t('submit'),
      loadMore: $t('load_more')
    };

    return { classes, content, loading, meta, subcomments, page, hasNext };
  },
  watch: {
    show() {
      if (this.show && !this.subcomments.length && this.hasNext) {
        this.loadData();
      }
    }
  },
  methods: {
    async handleSubmit() {
      const clean = DOMPurify.sanitize(this.content.trim());
      if (!this.content || (this.maxLength != 0 && clean.length > this.maxLength)) return;
      if (!this.isLogin) {
        const url = helper.buildLoginURL();
        url && location.assign(url);
      } else {
        this.loading = true;
        try {
          const res = await apis.postSubComment(
            this.comment.id,
            clean,
          );
          this.$emit('subcomment', clean);
          res.creator = helper.getProfile();
          this.subcomments.push(res);
          this.content = '';
        } catch (err) {
          const e = err as any;
          if (e?.response?.status === 401) {
            helper.removeAuth();
            const { login_url } = helper.getDefaultParams();
            const url = helper.buildLoginURL(login_url);
            url && location.assign(url);
          }
          this.$emit('error', e);
        }
        this.loading = false;
      }
    },
    async loadData() {
      if (!this.hasNext) return;

      try {
        const res = await apis.getSubComments(this.comment.id, this.order, this.page++, 15);
        this.hasNext = res.replies.length >= res.ipp;
        this.subcomments.push(...res.replies);
      } catch (err) {
        this.$emit('error', err);
      }
    },
    formatTime(time: string) {
      return helper.formatTime(time);
    }
  }
});
</script>