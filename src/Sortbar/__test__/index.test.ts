import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';
import { shallowMount, mount } from '@vue/test-utils';
import SortBar from '../';

Vue.use(VueCompositionAPI);

describe('SortBar', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(SortBar);
    expect(wrapper).toMatchSnapshot();
  });
});
