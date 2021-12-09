import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';
import { shallowMount, mount } from '@vue/test-utils';
import Comments from '../';

Vue.use(VueCompositionAPI);

describe('Comments', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(Comments);
    expect(wrapper).toMatchSnapshot();
  });
});
