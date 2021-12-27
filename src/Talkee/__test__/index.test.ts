import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';
import { shallowMount, mount } from '@vue/test-utils';
import Talkee from '../';

Vue.use(VueCompositionAPI);

describe('Talkee', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(Talkee);
    expect(wrapper).toMatchSnapshot();
  });
});
