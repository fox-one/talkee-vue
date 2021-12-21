import SortBar from './SortBar.vue';
import type { defineComponent } from '@vue/composition-api';
import type { VueConstructor } from 'vue';

export type SortBar = ReturnType<typeof defineComponent> & {
  install(app: VueConstructor<Vue>): void
}

(SortBar as SortBar).install = (app: VueConstructor<Vue>): void => {
  app.component(SortBar.name, SortBar);
};

export default SortBar;
