import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';
import { shallowMount, mount } from '@vue/test-utils';
import Expansion from '../';

Vue.use(VueCompositionAPI);

describe('Expansion', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(Expansion);
    expect(wrapper).toMatchSnapshot();
  });
});
