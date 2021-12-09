import {
  defineComponent,
  onMounted
} from '@vue/composition-api';
import classnames from '@utils/classnames';
/* import types */
import type { CreateElement, VNode } from 'vue';

export default defineComponent({
  name: 'Sortbar',
  props: {
    prefixCls: {
      type: String,
      default: 'sortbar'
    }
  },
  setup(props) {
    const classes = classnames(props.prefixCls);
    onMounted(() => {
      console.info('Sortbar mounted!');
    });

    return { classes };
  },
  render(h: CreateElement): VNode {
    const content = this.$slots.default;
    return (
      <div class={this.classes()}>
        { content }
      </div>
    );
  }
});