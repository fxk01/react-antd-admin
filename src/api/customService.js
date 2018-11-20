import http from './fetch';

//判断当前模版是否存在
export const queryTemplateByName = (params) => {
  return http.fetchPost('template/queryTemplateByName', params)
};

//创建模版
export const createTemplate = (params) => {
  return http.fetchPost('template/createTemplate', params)
};