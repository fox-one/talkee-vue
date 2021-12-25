<template>
  <v-btn
    :class="classes('login-btn')"
    color="primary"
    @click="handleLogin"
  >
    <span :class="classes('login-btn-inner')">{{ btnTxt }}</span>
  </v-btn>
</template>

<script lang="ts">
import {
  defineComponent
} from '@vue/composition-api';
import { VBtn } from 'vuetify/lib';
import classnames from '@utils/classnames';
import helper from '@utils/helper';
import { $t } from '@/i18n';

export default defineComponent({
  name: 'LoginBtn',
  components: { VBtn },
  props: {
    prefixCls: {
      type: String,
      default: 'talkee'
    },
    loginUrl: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const classes = classnames(props.prefixCls);
    const btnTxt = $t('expand_button');

    return { classes, btnTxt };
  },
  methods: {
    handleLogin() {
      const url = helper.buildLoginURL(this.loginUrl);
      url && location.assign(url);
    }
  }
});
</script>