import TalkeeNext from './Talkee';
import type { defineComponent } from '@vue/composition-api';
import type { VueConstructor } from 'vue';

export type TalkeeNext = ReturnType<typeof defineComponent> & {
  install(app: VueConstructor<Vue>): void
}

(TalkeeNext as TalkeeNext).install = (app: VueConstructor<Vue>): void => {
  app.component(TalkeeNext.name, TalkeeNext);
};

export default TalkeeNext;
