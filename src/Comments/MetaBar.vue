<template>
  <v-layout :class="classes('meta', 'f-caption')" column align-end>
    <div :class="classes('meta-reply')" @click="$emit('click:reply')">
      {{ reply }}
    </div>
    <div :class="classes('meta-favor', isFavor ? classes('meta-favor-liked') : '')" @click="$emit('click:favor')">
      {{ favor_count }}
    </div>
  </v-layout>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  PropType
} from '@vue/composition-api';
import classnames from '@utils/classnames';
import { $t } from '@/i18n';

import type { IComment } from '@/types/api';

export default defineComponent({
  name: 'MetaBar',
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
    onMounted(() => {
      console.info('Comments mounted!');
    });

    return {
      classes,
      reply: comment?.reply_count ? `${comment.reply_count} ${$t('reply')}` : $t('click_to_reply'),
      favor_count: comment?.favor_count,
      isFavor: !!comment?.favor_id
    };
  }
});
</script>