<template>
  <v-layout :class="classes('editor')" >
    <div :class="classes('editor-left')">
      <v-avatar
        size="32"
        :class="classes('editor-avatar')"
      >
        <v-img :src="profile.avatar_url" />
      </v-avatar>
    </div>
    <v-layout column align-end :class="classes('editor-right')">
      <v-textarea
        v-model="content"
        outlined
        flat
        height="60"
        :placeholder="meta.label"
        :counter="maxLength"
        :class="classes('editor-textarea')"
        @focus="$emit('keyboard', 'rise')"
        @blur="$emit('keyboard', 'fold')"
      />
      <v-btn
        text
        small
        plain
        :ripple="false"
        color="primary"
        :class="classes('editor-btn')"
        :loading="loading"
        @click="handleSubmit"
      >
        {{ meta.submit }}
      </v-btn>
    </v-layout>
  </v-layout>
</template>

<script lang="ts">
import {
  defineComponent,
  ref
} from '@vue/composition-api';
import { VLayout, VBtn, VTextarea, VAvatar, VImg } from 'vuetify/lib';
import DOMPurify from 'dompurify';
import classnames from '@utils/classnames';
import helper from '@utils/helper';
import apis from '@apis/index';
import { $t } from '@/i18n';

export default defineComponent({
  name: 'Editor',
  components: {
    VLayout,
    VBtn,
    VTextarea,
    VAvatar,
    VImg
  },
  props: {
    prefixCls: {
      type: String,
      default: 'talkee'
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
    const classes = classnames(props.prefixCls);
    const content = ref('');
    const loading = ref(false);
    const meta = {
      label: $t('comment_placeholder'),
      submit: $t('submit'),
    };
    const profile = helper.getProfile() || {};

    return { classes, content, loading, meta, profile };
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
          const res = await apis.postComment(clean);
          res.creator = helper.getProfile();
          this.$emit('comment', res);
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
    }
  }
});
</script>