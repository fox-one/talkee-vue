import { storiesOf } from '@storybook/vue';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { themes } from '@storybook/theming';
import Reply from '../index';

storiesOf('Reply', module)
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
  .add('with text', () => ({
    render: h => h(Reply, { props: { msg: 'Hello Reply' } })
  }))
  .add('test1', () => ({
    components: { Reply },
    template: `<reply msg='Hello Reply' />`
  }));
