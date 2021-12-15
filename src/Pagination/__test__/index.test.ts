import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';
import { shallowMount, mount } from '@vue/test-utils';
import Pagination from '../';

Vue.use(VueCompositionAPI);

describe('Pagination', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(Pagination);
    expect(wrapper).toMatchSnapshot();
  });
});
