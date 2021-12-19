<template>
  <div :class="classes('comment-sub')">
    <v-textarea
      v-model="content"
      solo
      name="input-7-4"
      :label="meta.label"
    />
    <v-btn
      @click="handleSubmit"
    >
      {{ meta.submit }}
    </v-btn>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  PropType,
  ref
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
    },
    order: {
      type: String as PropType<'favor_count' | 'id' | 'id-asc' | 'id-desc'>,
      default: 'favor_count'
    }
  },
  setup(props) {
    const { prefixCls, comment, order } = props;
    const classes = classnames(prefixCls);
    const content = ref('');
    const meta = {
      label: $t('sub_comment_placeholder'),
      submit: $t('submit')
    };
    onMounted(async () => {
      await apis.getSubComments(comment.id, order, 1, 15);
    });

    return { classes, content, meta };
  },
  methods: {
    handleSubmit() {
      console.info(this.content);
    }
  }
});
</script>