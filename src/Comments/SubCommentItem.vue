<template>
  <v-layout
    justify-space-between
    align-start
    :class="classes('comment-sub-item')"
  >
    <div :class="classes('comment-sub-item-left')">
      <v-avatar
        size="24"
        :class="classes('comment-sub-item-left-avatar')"
      >
        <v-img :src="subcomment.creator.avatar_url" />
      </v-avatar>
    </div>
    <v-layout :class="classes('comment-sub-item-right', 'pt-2')" column>
      <div :class="classes('comment-sub-item-right-top')">
        <span :class="classes('comment-sub-item-right-top-name', 'f-caption text--primary mr-2')">
          {{ subcomment.creator.full_name }}
        </span>
        <span :class="classes('comment-sub-item-right-top-time', 'f-greyscale-4')">
          {{ formatTime(subcomment.created_at) }}
        </span>
      </div>
      <div :class="`${classes('comment-sub-item-right-content', 'my-4 f-body-2')} ${isMore ? classes('comment-sub-item-right-content-more') : ''}`">
        <p :class="classes('comment-sub-item-right-content-txt', 'ma-0')" v-html="content" />
        <p :class="classes('comment-sub-item-right-content-txt-copy', 'ma-0')" v-html="content" />
        <v-btn
          :class="classes('comment-sub-item-right-content-btn', 'pa-0')"
          text
          small
          color="primary"
          height="16"
          @click="isMore = !isMore"
        >
          {{ isMore ? meta.less : meta.more }}
        </v-btn>
      </div>
    </v-layout>
    <meta-bar
      :comment="subcomment"
      :reply="false"
      :favor="favor"
      type="reply"
      :class="classes('comment-sub-item-right-meta', 'flex-grow-0 ml-auto')"
    />
  </v-layout>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  ref
} from '@vue/composition-api';
import { VLayout, VBtn, VAvatar, VImg } from 'vuetify/lib';
import marked from 'marked';
import DOMPurify from 'dompurify';
import classnames from '@utils/classnames';
import helper from '@utils/helper';
import { $t } from '@/i18n';
import MetaBar from './MetaBar.vue';

import type { IComment } from '@/types/api';

export default defineComponent({
  name: 'SubCommentItem',
  components: { MetaBar, VLayout, VBtn, VAvatar, VImg },
  props: {
    prefixCls: {
      type: String,
      default: 'talkee'
    },
    subcomment: {
      type: Object as PropType<IComment>,
      default: () => ({})
    },
    favor: {
      type: Boolean,
      default: false,
    }
  },
  setup(props) {
    const { prefixCls } = props;
    const classes = classnames(prefixCls);
    const isMore = ref(false);
    const meta = {
      more: $t('content_more'),
      less: $t('content_less')
    };

    return { classes, isMore, meta };
  },
  computed: {
    content(): string {
      const md = marked(DOMPurify.sanitize(this.subcomment?.content ?? ''));
      return helper.urlify(md.substring(0, md.length - 2));
    }
  },
  methods: {
    formatTime(time: string) {
      return helper.formatTime(time);
    }
  }
});
</script>