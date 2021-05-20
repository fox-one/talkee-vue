import { storiesOf } from '@storybook/vue';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { themes } from '@storybook/theming';
import { Talkee } from '../';
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
  .add('China Dev', () => {
    const redirect_url = encodeURIComponent(window.location.href);
    return {
      components: {
        Talkee
      },
      template: `<talkee
      :siteId="6"
      :slug="1234"
      apiBase="https://talkee-test-api.firesbox.com/api"
      loginUrl="https://mixin-oauth.firesbox.com/?client_id=65fdd5af-5d3f-496a-9d62-b5cdb4d8396f&scope=PROFILE:READ+PHONE:READ&response_type=code&redirect_url=${redirect_url}"
    />`
    }
  })
  .add('Japan Dev', () => ({
    components: {
      Talkee
    },
    template: `<talkee
      :siteId="4"
      :slug="234455"
      apiBase="https://links-login.chrove.com/api"
      loginUrl="https://oauth.chrove.com/?client_id=bf07d6d6-4d15-46ab-b5e4-6e66fac1151ef&scope=PROFILE:READ+PHONE:READ"
    />`
  }));
