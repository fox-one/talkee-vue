<template>
  <li :class="classes('comment-item')">
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
        <p :class="classes('comment-item-right-content', 'mt-4 f-body-2')">
          {{ content }}
        </p>
      </v-layout>
      <meta-bar :comment="comment" :class="classes('comment-item-right-meta', 'flex-grow-0 ml-auto')" />
    </v-layout>
    <components :is="SubCp" />
  </li>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  PropType
} from '@vue/composition-api';
import classnames from '@utils/classnames';
import helper from '@utils/helper';
import MetaBar from './MetaBar.vue';
import SubComment from './SubComment.vue';

import type { IComment } from '@/types/api';

export default defineComponent({
  name: 'CommentItem',
  components: { MetaBar, SubComment },
  props: {
    prefixCls: {
      type: String,
      default: 'talkee'
    },
    comment: {
      type: Object as PropType<IComment>,
      default: () => ({})
    },
    subComment: {
      type: Boolean,
      default: false,
    }
  },
  setup(props) {
    const { prefixCls, comment, subComment } = props;
    const classes = classnames(prefixCls);
    onMounted(() => {
      console.info('Comments mounted!');
    });

    return {
      classes,
      avatar_url: comment?.creator?.avatar_url,
      full_name: comment?.creator?.full_name,
      created_at: helper.formatTime(comment.created_at),
      content: comment?.content,
      SubCp: subComment ? SubComment : null
    };
  }
});
</script>