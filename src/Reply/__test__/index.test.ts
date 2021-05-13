import { shallowMount, mount } from '@vue/test-utils';
import Reply from '../';

describe('Reply', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(Reply);
    expect(wrapper).toMatchSnapshot();
  });
});