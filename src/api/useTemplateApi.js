import http from './fetch';

//查询实例及其相关节点事件
export const queryTemplateRefInfo = (params) => {
  return http.fetchPost('template/queryTemplateRefInfo', params)
};