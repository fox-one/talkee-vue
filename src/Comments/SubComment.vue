<template>
  <div :class="classes()">
    <v-textarea
      solo
      name="input-7-4"
      label="Solo textarea"
    />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted
} from '@vue/composition-api';
import classnames from '@utils/classnames';
import { $t } from '@/i18n';

export default defineComponent({
  name: 'SubComment',
  props: {
    prefixCls: {
      type: String,
      default: 'talkee'
    }
  },
  setup(props) {
    const classes = classnames(props.prefixCls);
    onMounted(() => {
      console.info('Comments mounted!');
    });

    return { classes };
  }
});
</script>