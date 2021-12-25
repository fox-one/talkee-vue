import { storiesOf } from '@storybook/vue';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { themes } from '@storybook/theming';
import LoginBtn from '../';
import '../style';

storiesOf('LoginBtn', module)
  .addParameters({
    readme: {
      sidebar: require('../README.md').default,
      highlightSidebar: true,
      codeTheme: 'github'
    },
    options: { theme: themes.light },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphone6'
    }
  })
  .add('basic usage', () => ({
    components: {
      LoginBtn
    },
    template: `<login-btn />`
  }))
  .add('custom slot', () => ({
    components: {
      LoginBtn
    },
    template: `<login-btn>
      <template v-slot:button><button :style="{ background: 'green' }"> 自定义按钮 </button></template>
    </login-btn>`
  }));