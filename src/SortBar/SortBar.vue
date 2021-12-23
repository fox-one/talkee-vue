<template>
  <v-layout :class="classes('sortbar')" align-center justify-space-between>
    <div :class="classes('sortbar-left', 'f-body-2')">{{ total }}</div>
    <div :class="classes('sortbar-right')">
      <v-btn
        text
        small
        plain
        :ripple="false"
        :class="`${classes('sortbar-btn')} ${state === 'score' ? classes('sortbar-btn-active') : ''}`"
        @click="handleClick('score')"
      >
        {{ meta.favor }}
      </v-btn>
      <v-btn 
        text
        small
        plain
        :ripple="false"
        :class="`${classes('sortbar-btn')} ${state === 'desc' ? classes('sortbar-btn-active') : ''}`"
        @click="handleClick('desc')">
        {{ meta.newest }}
      </v-btn>
      <v-btn 
        text
        small
        plain
        :ripple="false"
        :class="`${classes('sortbar-btn')} ${state === 'asc' ? classes('sortbar-btn-active') : ''}`"
        @click="handleClick('asc')">
        {{ meta.oldest }}
      </v-btn>
    </div>
  </v-layout>
</template>

<script lang="ts">
import {
  defineComponent,
  ref
} from '@vue/composition-api';
import classnames from '@utils/classnames';
import { VLayout, VBtn } from 'vuetify/lib';
import { $t } from '@/i18n';

export default defineComponent({
  name: 'SortBar',
  components: {
    VLayout,
    VBtn
  },
  props: {
    prefixCls: {
      type: String,
      default: 'talkee'
    },
    total: {
      type: Number,
      default: 0
    }
  },
  setup(props) {
    const classes = classnames(props.prefixCls);
    const state = ref('score');
    const meta = {
      favor: $t('sort_by_fav_button'),
      oldest: $t('sort_by_id_asc_button'),
      newest: $t('sort_by_id_desc_button'),
    };

    return { classes, meta, state };
  },
  methods: {
    handleClick(type: string) {
      this.$emit('sort', type);
      this.state = type;
    }
  }
});
</script>