import Expansion from './Expansion.vue';
import type { defineComponent } from '@vue/composition-api';
import type { VueConstructor } from 'vue';

export type Expansion = ReturnType<typeof defineComponent> & {
  install(app: VueConstructor<Vue>): void
}

(Expansion as Expansion).install = (app: VueConstructor<Vue>): void => {
  app.component(Expansion.name, Expansion);
};

export default Expansion;
