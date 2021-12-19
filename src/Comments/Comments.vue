<template>
  <ul class="pa-0" :class="classes('comments')">
    <comment-item
      v-for="(comment, ind) in comments"
      :key="comment.id || ind"
      :comment="comment"
      :order="order"
      :sub-comment="subComment"
      :prefix-cls="prefixCls"
    />
  </ul>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  PropType,
  ref
} from '@vue/composition-api';
import apis from '@apis/index';
import classnames from '@utils/classnames';
import CommentItem from './CommentItem.vue';
import { IComment } from '@/types/api';

export default defineComponent({
  name: 'Comments',
  components: {
    CommentItem
  },
  props: {
    prefixCls: {
      type: String,
      default: 'talkee'
    },
    order: {
      type: String as PropType<'favor_count' | 'id' | 'id-asc' | 'id-desc'>,
      default: 'favor_count'
    },
    page: {
      type: Number,
      default: 1
    },
    subComment: {
      type: Boolean,
      default: false,
    }
  },
  setup(props) {
    const comments = ref([] as IComment[]);
    const classes = classnames(props.prefixCls);
    onMounted(async () => {
      const { order, page } = props;
      const res = await apis.getComments(order, page);
      comments.value = res.comments;
    });

    return { comments, classes };
  }
});
</script>