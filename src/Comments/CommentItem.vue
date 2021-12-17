<template>
  <li :class="classes('comment-item')">
    <v-layout justify-space-between align-start>
      <v-avatar
        size="32"
        :class="classes('comment-item-left')"
      >
        <v-img :src="avatar_url" />
      </v-avatar>
      <v-layout :class="classes('comment-item-right')" column>
        <div>
          <span>{{ full_name }}</span>
          <span>{{ created_at }}</span>
        </div>
        <p>
          {{ content }}
        </p>
        <div>
          <span>
            {{ reply_count }}
          </span>
          <span>
            {{ favor_count }}
          </span>
        </div>
      </v-layout>
    </v-layout>
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

export default defineComponent({
  name: 'CommentItem',
  props: {
    prefixCls: {
      type: String,
      default: 'talkee'
    },
    comment: {
      type: Object as PropType<{
        content: string;
        created_at: string;
        creator: {
          avatar_url: string;
          full_name: string;
          id: number;
          lang: string;
          user_id: string;
        };
        favor_count: number;
        favor_id: number;
        id: number;
        reward: number | null;
        site_id: number;
        slug: string;
        user_id: string;
      }>,
      default: () => ({})
    }
  },
  setup(props) {
    const { prefixCls, comment } = props;
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
      reply_count: comment?.content,
      favor_count: comment?.favor_count
    };
  }
});
</script>