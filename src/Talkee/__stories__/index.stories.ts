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
  .add('China Dev', () => ({
    components: {
      Talkee
    },
    template: `<talkee
      :siteId="6"
      :slug="1234"
      apiBase="https://talkee-test-api.firesbox.com/api"
      loginBase="https://mixin-oauth.firesbox.com"
      clientId="65fdd5af-5d3f-496a-9d62-b5cdb4d8396f"
    />`
  }))
  .add('Japan Dev', () => ({
    components: {
      Talkee
    },
    template: `<talkee
      :siteId="4"
      :slug="234455"
      apiBase="https://links-login.chrove.com/api"
      loginBase="https://oauth.chrove.com"
      clientId="bf07d6d6-4d15-46ab-b5e4-6e66fac1151e"
    />`
  }));
