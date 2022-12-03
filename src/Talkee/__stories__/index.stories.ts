import { storiesOf } from '@storybook/vue';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { themes } from '@storybook/theming';
import Talkee from '..';
import '../style';

storiesOf('Talkee', module)
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
        Talkee
      },
      methods: {
        handleLogged() {
          console.log('logged')
        },
        handleError(error) {
          console.log('error:', error)
        },
      },
      template: `
        <talkee
          siteId='2'
          clientId='61504be8-a9da-477d-9e18-448ac3780919'
          slug='7000103488-course-2367'
          apiBase='https://talkee-api.mixin.fan/api'
          :reply="true"
          :favor="true"
          commentHeight="60vh"
          commentLength="512"
          class="pa-4"
          @login:success="handleLogged"
          @login:error="handleError"
          @error="handleError"
        />
      `
    }
  });
