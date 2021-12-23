import { storiesOf } from '@storybook/vue';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { themes } from '@storybook/theming';
import Comments from '../';
import '../style';
import utils from '../../utils/helper'

storiesOf('Comments', module)
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
    utils.setDefaultParams({ site_id: 1, slug: '7000103413-course-728', api_base: "https://talkee-test-api.firesbox.com/api" });
    return {
      components: {
        Comments
      },
      template: `<Comments reply favor height='80vh' class="mt-10 px-4">{{'Hello Comments'}}</Comments>`
    }
  });
