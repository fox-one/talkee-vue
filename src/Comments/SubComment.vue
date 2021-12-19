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
  onMounted,
  PropType
} from '@vue/composition-api';
import classnames from '@utils/classnames';
import apis from '@apis/index';
import { $t } from '@/i18n';

import type { IComment } from '@/types/api';

export default defineComponent({
  name: 'SubComment',
  props: {
    prefixCls: {
      type: String,
      default: 'talkee'
    },
    comment: {
      type: Object as PropType<IComment>,
      default: () => ({})
    }
  },
  setup(props) {
    const { prefixCls, comment } = props;
    const classes = classnames(prefixCls);
    onMounted(async () => {
      
    });

    return { classes };
  }
});
</script>