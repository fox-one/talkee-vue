<template>
  <li :class="classes('comment-item', 'py-5')">
    <v-layout justify-space-between align-start>
      <div :class="classes('comment-item-left')">
        <v-avatar
          size="32"
          :class="classes('comment-item-left-avatar')"
        >
          <v-img :src="avatar_url" />
        </v-avatar>
      </div>
      <v-layout :class="classes('comment-item-right')" column>
        <div :class="classes('comment-item-right-top')">
          <span :class="classes('comment-item-right-top-name', 'f-body-2 text--primary mr-2')">{{ full_name }}</span>
          <span :class="classes('comment-item-right-top-time', 'f-caption f-greyscale-3')">{{ created_at }}</span>
        </div>
        <div class="d-flex">
          <div :class="`${classes('comment-item-right-content', 'mt-6 f-body-2')} ${isMore ? classes('comment-item-right-content-more') : ''}`">
            <v-btn
              :class="classes('comment-item-right-more', 'pa-0')"
              text
              small
              color="primary"
              @click="isMore = !isMore"
            >
              {{ isMore ? meta.less : meta.more }}
            </v-btn>
            {{ content }}
          </div>
        </div>
      </v-layout>
      <meta-bar
        v-bind="$attrs"
        :comment="comment"
        :reply="reply"
        :class="classes('comment-item-right-meta', 'flex-grow-0 ml-auto')"
        @click:reply="handleReply"
        @error="(e) => $emit('error', e)"
      />
    </v-layout>
    <components
      :is="subComment"
      v-bind="$attrs"
      v-show="showSubComment"
      class="mt-4"
      :show="showSubComment"
      :comment="comment"
      :order="order"
      @error="(e) => $emit('error', e)"
    />
  </li>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  reactive,
  ref
} from '@vue/composition-api';
import { VLayout, VBtn, VAvatar, VImg } from 'vuetify/lib';
import classnames from '@utils/classnames';
import helper from '@utils/helper';
import MetaBar from './MetaBar.vue';
import SubComment from './SubComment.vue';
import { $t } from '@/i18n';

import type { IComment } from '@/types/api';

export default defineComponent({
  name: 'CommentItem',
  components: { MetaBar, SubComment, VLayout, VBtn, VAvatar, VImg },
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
    reply: {
      type: Boolean,
      default: false,
    }
  },
  setup(props) {
    const { prefixCls, comment } = props;
    const classes = classnames(prefixCls);
    const proxy = reactive({ showSubComment: false });
    const isMore = ref(false);
    const meta = {
      more: $t('content_more'),
      less: $t('content_less')
    };

    return {
      classes,
      avatar_url: comment?.creator?.avatar_url,
      full_name: comment?.creator?.full_name,
      created_at: helper.formatTime(comment.created_at),
      content: comment?.content,
      isMore,
      meta,
      ...proxy
    };
  },
  computed: {
    subComment(): any {
      return this.reply ? SubComment : null;
    }
  },
  methods: {
    handleReply() {
      this.showSubComment = !this.showSubComment;
    }
  }
});
</script>