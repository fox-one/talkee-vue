import { addDecorator, configure } from '@storybook/vue';
import { withOptions } from '@storybook/addon-options';
import { setConsoleOptions } from '@storybook/addon-console';
import { addReadme } from 'storybook-readme/vue';

addDecorator(addReadme);
setConsoleOptions({
  panelExclude: []
});
withOptions({
  name: 'talkee-vue'
});

const req = require.context('../src/', true, /.stories.(ts|js)$/);
function loadStories() {
  const keys = req.keys();
  keys.forEach(filename => req(filename));
};
configure(loadStories, module);
