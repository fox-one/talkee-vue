import { storiesOf } from '@storybook/vue';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { themes } from '@storybook/theming';
import TalkeeNext from '../';
import '../style';

storiesOf('TalkeeNext', module)
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
  .add('basic usage', () => {
    return {
      components: {
        TalkeeNext
      },
      template: `<talkee-next
        site_id='1'
        slug='7000103413-course-728'
        api_base='https://talkee-test-api.firesbox.com/api'
      />`
    }
  });
