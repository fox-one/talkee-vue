import Comments from './Comments.vue';
import type { defineComponent } from '@vue/composition-api';
import type { VueConstructor } from 'vue';

export type Comments = ReturnType<typeof defineComponent> & {
  install(app: VueConstructor<Vue>): void
}

(Comments as Comments).install = (app: VueConstructor<Vue>): void => {
  app.component(Comments.name, Comments);
};

export default Comments;
