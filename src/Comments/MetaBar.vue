<template>
  <v-layout :class="classes('meta', 'f-caption')" column align-end>
    <div v-if="reply" :class="classes('meta-reply')" @click="$emit('click:reply')">
      {{ reply_text }}
    </div>
    <div v-if="favor" :class="classes('meta-favor', isFavor ? classes('meta-favor-liked') : '')" @click="handleFavor">
      {{ favor_text }}
    </div>
  </v-layout>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType
} from '@vue/composition-api';
import classnames from '@utils/classnames';
import apis from '@apis/index';
import helper from '@utils/helper';
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
    },
    reply: {
      type: Boolean,
      default: false,
    },
    favor: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'comment'
    }
  },
  setup(props) {
    const { prefixCls, comment } = props;
    const classes = classnames(prefixCls);

    return {
      classes,
      reply_text: comment?.reply_count ? `${comment.reply_count} ${$t('reply')}` : $t('click_to_reply'),
      favor_text: comment?.favor_count,
      isFavor: !!comment?.favor_id
    };
  },
  methods: {
    handleFavor() {
      const isLogin = helper.getToken() && helper.getProfile();
      if (!isLogin) {
        const url = helper.buildLoginURL();
        url && location.assign(url);
      } else {
        (this.isFavor ? apis.putUnfavor(this.comment.favor_id) :  apis.putFavor({
          type: this.type,
          id: this.comment.id,
        })).catch(e => this.$emit('error', e));
        this.isFavor = !this.isFavor;
        this.isFavor ? this.favor_text++ : this.favor_text--;
      }
      this.$emit('click:favor');
    }
  }
});
</script>