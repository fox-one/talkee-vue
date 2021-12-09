import Sortbar from './Sortbar';
import type { defineComponent } from '@vue/composition-api';
import type { VueConstructor } from 'vue';

export type Sortbar = ReturnType<typeof defineComponent> & {
  install(app: VueConstructor<Vue>): void
}

(Sortbar as Sortbar).install = (app: VueConstructor<Vue>): void => {
  app.component(Sortbar.name, Sortbar);
};

export default Sortbar;
