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
  .add('with text', () => {
    utils.setDefaultParams({ site_id: 6, slug: 1234, apiBase: "https://talkee-test-api.firesbox.com/api" });
    return {
      components: {
        Comments
      },
      template: `<Comments sub-comment>{{'Hello Comments'}}</Comments>`
    }
  });
