import http from './fetch';

//查询登记备案模板信息
export const queryDJBATemplate =(params) => {
  return http.fetchPost('template/queryDJBATemplate', params)
};

//登记备案事件信息查询
export const queryEvents = (params) => {
  return http.fetchPost('DJ/BN/queryEvents', params)
};