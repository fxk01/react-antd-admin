import http from './fetch';

//查询模版是否存在节点事件
export const queryTemplateRefInfo = (params) => {
  return http.fetchPost('template/queryTemplateRefInfo', params)
};

//创建节点
export const createNodes = (params) => {
  return http.fetchPost('template/createNodes', params)
};

//创建当前节点所属的事件
export const createEvents = (params) => {
  return http.fetchPost('template/createEvents', params)
};