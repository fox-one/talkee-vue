<template>
  <ul class="pa-0" :class="classes('comments')">
    <comment-item
      v-for="(comment, ind) in comments"
      v-bind="$attrs"
      :key="comment.id || ind"
      :comment="comment"
      :order="order"
      @error="(e) => $emit('error', e)"
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
    }
  },
  setup(props, context) {
    const comments = ref([] as IComment[]);
    const classes = classnames(props.prefixCls);
    const page = ref(1);
    onMounted(async () => {
      const { order } = props;
      try {
        const res = await apis.getComments(order, page.value);
        comments.value = res.comments;
      } catch (err) {
        context.emit('error', err);
      }
    });

    return { comments, classes, page };
  },
  methods: {
    async loadData(reload = false) {
      if (reload) this.page = 0;
      try {
        const res = await apis.getComments(this.order, ++this.page);
        if (reload) {
          this.comments = res.comments;
        } else {
          this.comments.push(...res.comments);
        }
      } catch (err) {
        this.$emit('error', err);
      }
    }
  }
});
</script>