import Editor from './Editor.vue';
import type { defineComponent } from '@vue/composition-api';
import type { VueConstructor } from 'vue';

export type Editor = ReturnType<typeof defineComponent> & {
  install(app: VueConstructor<Vue>): void
}

(Editor as Editor).install = (app: VueConstructor<Vue>): void => {
  app.component(Editor.name, Editor);
};

export default Editor;
