import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';
import { shallowMount, mount } from '@vue/test-utils';
import Editor from '../';

Vue.use(VueCompositionAPI);

describe('Editor', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(Editor);
    expect(wrapper).toMatchSnapshot();
  });
});
