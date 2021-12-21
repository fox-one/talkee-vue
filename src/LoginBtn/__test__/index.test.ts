import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';
import { shallowMount, mount } from '@vue/test-utils';
import LoginBtn from '../';

Vue.use(VueCompositionAPI);

describe('LoginBtn', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(LoginBtn);
    expect(wrapper).toMatchSnapshot();
  });
});
