import Talkee from './Talkee';
import type { defineComponent } from '@vue/composition-api';
import type { VueConstructor } from 'vue';

export type Talkee = ReturnType<typeof defineComponent> & {
  install(app: VueConstructor<Vue>): void
}

(Talkee as Talkee).install = (app: VueConstructor<Vue>): void => {
  app.component(Talkee.name, Talkee);
};

export default Talkee;
