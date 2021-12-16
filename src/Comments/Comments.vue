<template>
  <ul :class="classes('comments')">
    <slot name="default" />
  </ul>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  PropType
} from '@vue/composition-api';
import apis from '@apis/index';
import classnames from '@utils/classnames';

export default defineComponent({
  name: 'Comments',
  props: {
    prefixCls: {
      type: String,
      default: 'talkee'
    },
    apiBase: {
      type: String,
      default: ''
    },
    order: {
      type: String as PropType<'favor_count' | 'id' | 'id-asc' | 'id-desc'>,
      default: 'favor_count'
    },
    page: {
      type: Number,
      default: 1
    },
  },
  setup(props) {
    const classes = classnames(props.prefixCls);
    onMounted(async () => {
      const { order, page, apiBase } = props;
      await apis.getComments(order, page, apiBase);
    });

    return { classes };
  }
});
</script>