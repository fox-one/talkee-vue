import axios from 'axios';
import utils from '@utils/helper';
import { API_BASE } from '@/constants';

import type { IComment } from '@/types/api';

const request = async function (opts): Promise<any> {
  // eslint-disable-next-line prefer-const
  let { api_base, login_url, ...params } = utils.getDefaultParams() || {};
  if (opts.params) {
    params = Object.assign(params, opts.params);
  }

  let headers = {
    Authorization: `Bearer ${utils.getToken()}`,
    'X-LINKS-SITE-ID': params.site_id,
    'X-LINKS-SLUG': params.slug,
  };
  if (opts.headers) {
    headers = Object.assign(headers, opts.headers);
  }

  let resp: any = null;
  try {
    resp = await axios({
      method: opts.method || 'get',
      baseURL: opts.baseURL || api_base || API_BASE || '',
      url: opts.url || '',
      data: opts.data || {},
      params,
      headers,
    });
  } catch (e) {
    return new Promise(function (resolve, reject) {
      reject(e);
    });
  }
  if (resp?.data?.token) {
    utils.setAuth(resp.data);
  }
  return new Promise(function (resolve, reject) {
    if (resp.data) {
      return resolve(resp.data);
    }
    // @TODO handle errors
    return reject(resp);
  });
};

const getMe = async function () {
  return await request({
    method: 'get',
    url: '/me',
  });
};

const auth = async function (code) {
  return await request({
    method: 'post',
    url: '/auth',
    data: { code },
  });
};

const getComment = (id: string): Promise<IComment> => {
  return request({
    method: 'get',
    url: '/comment/' + id,
  });
};

const getComments = (
  order,
  page,
): Promise<{
  comments: Array<IComment>;
  ipp: number;
  page: number;
  total: number;
}> => {
  return request({
    method: 'get',
    url: '/comments',
    params: { order_key: order, page: page },
  });
};

const postComment = (content): Promise<IComment> => {
  return request({
    method: 'POST',
    url: '/comments',
    data: { slug: utils.getDefaultParams().slug, content },
  });
};

const putFavor = (data: { type: string, id: number }) => {
  return request({
    method: 'POST',
    url: '/favor/',
    data,
  });
};

const putUnfavor = (favId) => {
  return request({
    method: 'DELETE',
    url: `/favor/${favId}`
  });
};

const postSubComment = (
  commentId,
  content
): Promise<IComment> => {
  return request({
    method: 'POST',
    url: '/replies',
    data: { comment_id: commentId, content },
  });
};

const getSubComments = (
  comment_id,
  order,
  page,
  ipp
): Promise<{
  ipp: number;
  page: number;
  total: number;
  replies: Array<IComment>;
}> => {
  return request({
    method: 'GET',
    url: '/replies',
    params: { comment_id, order_key: order, page, ipp },
  });
};

export default {
  request,
  getMe,
  auth,
  getComment,
  getComments,
  postComment,
  putFavor,
  putUnfavor,
  postSubComment,
  getSubComments,
};
