import LoginBtn from './LoginBtn.vue';
import type { defineComponent } from '@vue/composition-api';
import type { VueConstructor } from 'vue';

export type LoginBtn = ReturnType<typeof defineComponent> & {
  install(app: VueConstructor<Vue>): void
}

(LoginBtn as LoginBtn).install = (app: VueConstructor<Vue>): void => {
  app.component(LoginBtn.name, LoginBtn);
};

export default LoginBtn;
