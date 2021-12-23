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
        siteId='1'
        slug='7000103413-course-728'
        apiBase='https://talkee-test-api.firesbox.com/api'
        loginUrl='https://mixin-oauth.firesbox.com/?client_id=2827d81f-6ae0-4842-b92f-6576afe36863&scope=PROFILE:READ+PHONE:READ&response_type=code'
        :reply="true"
        :favor="true"
        commentHeight="60vh"
      />`
    }
  });
