import { shallowMount, mount } from '@vue/test-utils';
import Talkee from '../';

describe('Talkee', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(Talkee, {
      propsData: {
        siteId: 6,
        slug: "1234",
        apiBase: "https://talkee-test-api.firesbox.com/api",
        loginUrl: "https://mixin-oauth.firesbox.com/?client_id=65fdd5af-5d3f-496a-9d62-b5cdb4d8396f&scope=PROFILE:READ+PHONE:READ&response_type=code&redirect_url="
      }
    });
    expect(wrapper.props().siteId).toBe(6);
    expect(wrapper.props().slug).toBe('1234');
    expect(wrapper.props().apiBase).toBe('https://talkee-test-api.firesbox.com/api');
    expect(wrapper.props().loginUrl).toBe('https://mixin-oauth.firesbox.com/?client_id=65fdd5af-5d3f-496a-9d62-b5cdb4d8396f&scope=PROFILE:READ+PHONE:READ&response_type=code&redirect_url=');
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a div', () => {
    const wrapper = mount(Talkee, {
      propsData: {
        siteId: 6,
        slug: "1234",
        apiBase: "https://talkee-test-api.firesbox.com/api",
        loginUrl: "https://mixin-oauth.firesbox.com/?client_id=65fdd5af-5d3f-496a-9d62-b5cdb4d8396f&scope=PROFILE:READ+PHONE:READ&response_type=code&redirect_url="
      }
    });
    expect(wrapper.contains('div')).toBe(true);
    expect(wrapper.props().siteId).toBe(6);
    expect(wrapper.props().slug).toBe('1234');
    expect(wrapper.props().apiBase).toBe('https://talkee-test-api.firesbox.com/api');
    expect(wrapper.props().loginUrl).toBe('https://mixin-oauth.firesbox.com/?client_id=65fdd5af-5d3f-496a-9d62-b5cdb4d8396f&scope=PROFILE:READ+PHONE:READ&response_type=code&redirect_url=');
    expect(wrapper).toMatchSnapshot();
    wrapper.destroy();
  });
});
