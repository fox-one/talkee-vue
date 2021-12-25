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
        solo
        height="60"
        :label="meta.label"
        :counter="maxLength"
        :class="classes('editor-textarea')"
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
      if (!this.content || (this.maxLength != 0 && this.content.length > this.maxLength)) return;
      const isLogin = helper.getToken() && helper.getProfile();
      if (!isLogin) {
        const url = helper.buildLoginURL();
        url && location.assign(url);
      } else {
        this.loading = true;
        try {
          const res = await apis.postComment(this.content);
          res.creator = helper.getProfile();
          this.$emit('comment', res);
          this.content = '';
        } catch (err) {
          this.$emit('error', err);
        }
        this.loading = false;
      }
    }
  }
});
</script>