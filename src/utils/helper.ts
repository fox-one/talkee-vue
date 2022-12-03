import { APP_TOKEN, APP_ENV, STORAGE_KEY } from '../constants';
import { $t } from '../i18n';
import storage from './storage';
import Base64 from './base64';

function setStore(key: string, value: any) {
  try {
    const store = JSON.parse(storage.get(STORAGE_KEY) ?? '{}');
    store[key] = value;
    return storage.set(STORAGE_KEY, JSON.stringify(store));
  } catch (e) {
    return false;
  }
}

function getStore(key: string) {
  try {
    const store = JSON.parse(storage.get(STORAGE_KEY) ?? '{}');
    return store[key];
  } catch (e) {
    return null;
  }
}

function removeStore(key: string) {
  try {
    const store = JSON.parse(storage.get(STORAGE_KEY) ?? '{}');
    delete store[key];
    return storage.set(STORAGE_KEY, JSON.stringify(store));
  } catch (e) {
    return null;
  }
}

export const helper = {
  setDefaultParams: function (params) {
    (window as any).__TALKEE_PARAMS__ = params;
  },

  getDefaultParams: function () {
    return (window as any).__TALKEE_PARAMS__ || {};
  },

  getUrlQuery: function () {
    const url = new URL(window.location.href);
    const ret: Record<string, any> = {};
    const it = (url.searchParams as any).entries();
    for (const pair of it) {
      ret[pair[0]] = pair[1];
    }
    return ret;
  },

  buildLoginURL: function (url?: string) {
    const { site_id, slug, login_url } = this.getDefaultParams();
    let loginUrl: string = url || login_url;
    if (!loginUrl) return '';

    const state = Base64.encode(
      JSON.stringify({
        s: site_id,
        p: slug
      })
    );
    const stateInd = loginUrl.indexOf('state=');
    if (~stateInd) {
      loginUrl =
        loginUrl.slice(0, stateInd + 6) +
        state +
        loginUrl.slice(stateInd + 6);
    } else {
      loginUrl = loginUrl + `&state=${state}`;
    }
    return loginUrl;
  },


  getToken: function () {
    if (APP_TOKEN && APP_ENV === 'development') {
      return APP_TOKEN;
    }
    return getStore('jwt-token');
  },

  setProfile: function (me) {
    return setStore('profile', me);
  },

  getProfile: function () {
    return getStore('profile');
  },

  setAuth: function (token) {
    setStore('jwt-token', token);
  },

  removeAuth: function () {
    removeStore('jwt-token');
  },

  getRedirect: function () {
    return getStore('redirect-url');
  },

  setRedirect: function (hash?: boolean) {
    // trim the code & state params
    let url = window.location.href
      .replace(/code=[a-z0-9A-Z]+/, 'code=')
      .replace(/state=[a-z0-9A-Z]+/, 'state=');
    if (hash && !url.includes('#talkee-')) {
      url += '#talkee-anchor';
    }
    return setStore('redirect-url', url);
  },

  clearRedirect: function () {
    return removeStore('redirect-url');
  },

  formatTime: function (timeStr) {
    const pad = function (num) {
      if (parseInt(num) < 10) {
        return `0${num}`;
      }
      return num;
    };
    const ds = new Date(timeStr);
    const thisYear = new Date().getFullYear();
    let ret = `${pad(ds.getMonth() + 1)}/${pad(ds.getDate())} ${pad(
      ds.getHours()
    )}:${pad(ds.getMinutes())}`;
    if (ds.getFullYear() !== thisYear) {
      // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
      ret = ds.getFullYear() + '/' + ret;
    }
    return ret;
  },

  parseText: function (text) {
    // return text.replace(/\n/g, "<br>");
    return text;
  },

  inject: async function (link) {
    let tag = 'script';
    if (link.slice(link.length - 4) === '.css') {
      tag = 'link';
    }
    if (null === document.querySelector('script[src="' + link + '"]')) {
      const script = document.createElement(tag);
      if (tag === 'script') {
        script.setAttribute('src', link);
        script.setAttribute('type', 'text/javascript');
        document.body.appendChild(script);
      } else {
        script.setAttribute('href', link);
        script.setAttribute('rel', 'stylesheet');
        document.head.appendChild(script);
      }
      return new Promise(function (resolve, reject) {
        script.onload = function () {
          resolve(void 0);
        };
      });
    } else {
      return new Promise(function (resolve, reject) {
        resolve(void 0);
      });
    }
  },

  errmsg: (err) => {
    if (err.response && err.response.status === 429) {
      alert($t('error_comment_too_frequently'));
      return;
    } else if (err?.response?.data) {
      alert(`${err?.response?.data?.code}: ${err?.response?.data?.message}`);
      return;
    }
    alert($t('error_unknown'));
    return;
  },

  getAndroidVersion() {
    const ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('android') > 0) {
      const reg = /android [\d._]+/gi;
      const v_info = ua.match(reg);
      const version = (v_info + '')
        .replace(/[^0-9|_.]/gi, '')
        .replace(/_/gi, '.'); // 得到版本号4.2.2
      const majorVersion = parseInt(version.split('.')[0]); // 得到版本号第一位
      return majorVersion;
    }
    return 0;
  },

  isAndroid() {
    const ua = navigator.userAgent.toLowerCase();
    return ua.includes('android');
  },

  notSupportIntersect() {
    if (this.isAndroid() && this.getAndroidVersion() < 8) {
      return true;
    }
    return !window.IntersectionObserver;
  },

  urlify(text: string) {
    const breakRegex = /\n\r?/g;
    text = text?.replace(breakRegex, '<br/>');

    return text;
  }
};

export default helper;
