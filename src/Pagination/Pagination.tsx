import {
  defineComponent,
  onMounted
} from '@vue/composition-api';
import classnames from '@utils/classnames';
/* import types */
import type { CreateElement, VNode } from 'vue';

export default defineComponent({
  name: 'Pagination',
  props: {
    prefixCls: {
      type: String,
      default: 'pagination'
    }
  },
  setup(props) {
    const classes = classnames(props.prefixCls);
    onMounted(() => {
      console.info('Pagination mounted!');
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