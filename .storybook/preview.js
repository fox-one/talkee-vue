import Vue from "vue";
import Vuetify from "vuetify";
import UIKit, { preset } from "@foxone/uikit";
import Talkee from "../src/index"
import VueCompositionAPI from '@vue/composition-api';

import "@foxone/uikit/build/index.min.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

Vue.use(VueCompositionAPI);
Vue.use(Vuetify);
Vue.use(Talkee)

const vuetify = new Vuetify(preset);

Vue.use(UIKit, {
  vuetify,
  dialog: { flat: true },
  toast: { top: false, centered: true },
  auth: {
    wallets: ["mixin"]
  }
});

export const decorators = [
  (story, context) => {
    // wrap the passed component within the passed context

    const wrapped = story(context);
    // extend Vue to use Vuetify around the wrapped component
    return Vue.extend({
      vuetify,
      components: { wrapped },
      props: {
        dark: {
          type: Boolean,
          default: context.args.dark
        }
      },
      watch: {
        dark: {
          immediate: true,
          handler(val) {
            this.$vuetify.theme.dark = val;
          }
        }
      },
      template: `
        <v-app>
          <v-container fluid>
            <wrapped />
          </v-container>
        </v-app>
      `
    });
  }
];