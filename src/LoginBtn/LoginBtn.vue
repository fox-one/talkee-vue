<template>
  <f-auth-method-modal
    :wallets="['mixin']"
    :client-id="clientId"
    scope="PROFILE:READ PHONE:READ"
    @auth="handleAuth"
    @error="handleError"
  >
    <template #activator="{ on }">
      <div :class="classes('login-btn')">
        <v-btn
          :class="classes('login-btn-inner')"
          :loading="loading"
          color="primary"
          depressed
          v-on="on"
        >
          {{ btnTxt }}
        </v-btn>
      </div>
    </template>
  </f-auth-method-modal>
  
</template>

<script lang="ts">
import {
  ref,
  defineComponent
} from '@vue/composition-api';
import { VBtn } from 'vuetify/lib';
import classnames from '@utils/classnames';
import helper from '@utils/helper';
import { $t } from '@/i18n';
import apis from '@apis/index';

export default defineComponent({
  name: 'LoginBtn',
  components: { VBtn },
  props: {
    prefixCls: {
      type: String,
      default: 'talkee'
    },
    clientId: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const classes = classnames(props.prefixCls);
    const btnTxt = $t('tap_to_login');
    const loading = ref(false);

    return { classes, btnTxt };
  },
  methods: {
    handleError(error) {
      this.$emit('error', error);
    },
    async handleAuth({ code }) {
      this.loading = true;
      
      try {
        const auth = await apis.auth(code);
        helper.setAuth(auth);

        const me = await apis.getMe();
        helper.setProfile(me);
        
        this.$emit('login:success');
      } catch (error) {
        this.$emit('login:fail', error);
        this.$emit('error', error);
      }

      this.$emit('update');
      this.loading = false;
    }
  }
});
</script>