import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';
import { shallowMount, mount } from '@vue/test-utils';
import Sortbar from '../';

Vue.use(VueCompositionAPI);

describe('Sortbar', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(Sortbar);
    expect(wrapper).toMatchSnapshot();
  });
});
