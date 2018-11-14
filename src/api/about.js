import http from './fetch';

//修改名称
export const getRgUserChanPin = (params) => {
  return http.fetchPost('data', params)
};