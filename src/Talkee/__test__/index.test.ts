import { shallowMount, mount } from '@vue/test-utils';
import Talkee from '../';

describe('Talkee', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(Talkee);
    expect(wrapper).toMatchSnapshot();
  });
});
