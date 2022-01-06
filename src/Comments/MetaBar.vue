<template>
  <v-layout :class="classes('meta', 'f-caption')" column align-end>
    <div v-if="reply" :class="classes('meta-reply', isActive ? classes('meta-reply-active') : '')" @click="handleReply">
      {{ reply_text }}
    </div>
    <div v-if="favor" :class="classes('meta-favor', isFavor ? classes('meta-favor-liked') : '')" @click="handleFavor">
      {{ favor_text || '' }}
    </div>
  </v-layout>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  ref,
  watch
} from '@vue/composition-api';
import { VLayout } from 'vuetify/lib';
import classnames from '@utils/classnames';
import apis from '@apis/index';
import helper from '@utils/helper';

import type { IComment } from '@/types/api';

export default defineComponent({
  name: 'MetaBar',
  components: { VLayout },
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
    },
    isLogin: {
      type: Boolean,
      default: !!(helper.getToken() && helper.getProfile())
    }
  },
  setup(props) {
    const { prefixCls, comment } = props;
    const classes = classnames(prefixCls);
    const isActive = ref(false);
    const reply_text = ref(comment?.reply_count || '');
    const favor_text = ref(comment?.favor_count);
    const isFavor = ref(!!comment?.favor_id);

    watch(comment, () => {
      reply_text.value = comment?.reply_count || '';
      favor_text.value = comment?.favor_count;
      isFavor.value = !!comment?.favor_id;
    });

    return {
      classes,
      reply_text,
      favor_text,
      isFavor,
      isActive
    };
  },
  methods: {
    handleReply() {
      this.isActive = !this.isActive;
      this.$emit('click:reply');
    },
    handleFavor() {
      if (!this.isLogin) {
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