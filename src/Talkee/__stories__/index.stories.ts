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
    template: `<Talkee
      :siteId="1"
      :slug="1234"
      apiBase="https://talkee-test-api.firesbox.com/api"
      loginBase="https://mixin-oauth.firesbox.com"
      clientId="2827d81f-6ae0-4842-b92f-6576afe36863"
    />`
  }))
  .add('Japan Dev', () => ({
    components: {
      Talkee
    },
    template: `<Talkee
      :siteId="4"
      :slug="234455"
      apiBase="https://links-login.chrove.com/api"
      loginBase="https://oauth.chrove.com"
      clientId="bf07d6d6-4d15-46ab-b5e4-6e66fac1151e"
    />`
  }));
