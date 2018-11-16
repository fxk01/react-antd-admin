import http from './fetch';

//用户登录
export const userLogin = (params) => {
  return http.fetchPost('admin/login', params)
};