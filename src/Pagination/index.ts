import Pagination from './Pagination';
import type { defineComponent } from '@vue/composition-api';
import type { VueConstructor } from 'vue';

export type Pagination = ReturnType<typeof defineComponent> & {
  install(app: VueConstructor<Vue>): void
}

(Pagination as Pagination).install = (app: VueConstructor<Vue>): void => {
  app.component(Pagination.name, Pagination);
};

export default Pagination;
