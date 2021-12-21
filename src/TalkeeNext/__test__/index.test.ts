import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';
import { shallowMount, mount } from '@vue/test-utils';
import TalkeeNext from '../';

Vue.use(VueCompositionAPI);

describe('TalkeeNext', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(TalkeeNext);
    expect(wrapper).toMatchSnapshot();
  });
});
