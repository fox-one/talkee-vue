import { storiesOf } from '@storybook/vue';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { themes } from '@storybook/theming';
import Editor from '../';
import '../style';
import utils from '../../utils/helper'

storiesOf('Editor', module)
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
    utils.setProfile({
      avatar_url: "https://mixin-images.zeromesh.net/X4FziFX0l0EwMhMroG_O34iyS8HUv_40laZpIf5FSOs3H-NTP0ltM_olvArzZ_Ap1P6WhWVg6x5EREr-RI5nT_bM_RcMUHjTl0-P7A=s256",
      full_name: "怀天@Fox.ONE",
      id: 2,
      lang: "en",
      user_id: "3c85aed0-bb23-4b0e-b352-488faeb9f69f"
    })
    utils.setAuth({
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiM2M4NWFlZDAtYmIyMy00YjBlLWIzNTItNDg4ZmFlYjlmNjlmIiwiZXhwIjoxNjc0MjczMjA1fQ.d4HnycRupwrAqJBrho5WVnhb3Oz4PIbFvwrDha_eN90',
      user_id: '3c85aed0-bb23-4b0e-b352-488faeb9f69f'
    })
    return {
      components: {
        Editor
      },
      template: `<Editor>{{'Hello Editor'}}</Editor>`
    }
  });
