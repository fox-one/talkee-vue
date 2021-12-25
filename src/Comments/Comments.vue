<template>
  <section :class="classes('comments')">
    <f-scroll
      :data="comments"
      :pulldown="true"
      :pullup="true"
      :height="height"
      :nested-id="nestedId"
      @pulldown="loadData(true)"
      @pullup="loadData"
    >
      <f-loading
        v-if="pullDownLoading"
        class="my-4"
        :loading="pullDownLoading"
      />
      <ul class="pa-0">
        <comment-item
          v-for="(comment, ind) in comments"
          v-bind="$attrs"
          :key="`comment-${comment.id || ind}`"
          :comment="comment"
          :order="order"
          @error="(e) => $emit('error', e)"
        />
        <f-loading
          v-if="pullUpLoading"
          :loading="pullUpLoading"
          class="mt-4 mb-6"
        />
      </ul>
    </f-scroll>
  </section>

</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  ref
} from '@vue/composition-api';
import FLoading from '@foxone/uikit/src/components/FLoading';
import apis from '@apis/index';
import { scrollWrapperHeight } from '@foxone/vue-scroll';
import FScroll from '@foxone/vue-scroll/es/Scroll';
import classnames from '@utils/classnames';
import CommentItem from './CommentItem.vue';
import { IComment } from '@/types/api';

export default defineComponent({
  name: 'Comments',
  components: {
    CommentItem,
    FScroll,
    FLoading
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
    height: {
      type: String,
      default: scrollWrapperHeight('50vh')
    },
    nestedId: {
      type: [Number, String],
      default: ''
    }
  },
  setup(props) {
    const comments = ref([] as IComment[]);
    const classes = classnames(props.prefixCls);
    const total = ref(0);
    const page = ref(1);
    const hasNext = ref(true);
    const pullDownLoading = ref(false);
    const pullUpLoading = ref(false);

    return { comments, classes, total, page, hasNext, pullDownLoading, pullUpLoading };
  },
  watch: {
    order: {
      immediate: false,
      handler: function () {
        this.loadData(true);
      }
    }
  },
  async mounted() {
    await this.loadData(true);
    this.$emit('loaded');
  },
  methods: {
    async loadData(reload = false) {
      if (!reload && !this.hasNext) return;

      try {
        if (reload) {
          this.pullDownLoading = true;
          this.page = 1;
        } else {
          this.pullUpLoading = true;
        }
        const res = await apis.getComments(this.order, this.page++);
        this.hasNext = res.comments.length >= res.ipp;
        this.total = res.total;
        if (reload) {
          this.comments = res.comments;
        } else {
          this.comments.push(...res.comments);
        }
      } catch (err) {
        this.$emit('error', err);
      } finally {
        if (reload) {
          this.pullDownLoading = false;
        } else {
          this.pullUpLoading = false;
        }
      }
    }
  }
});
</script>