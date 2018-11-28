import http from './fetch';

//判断当前模版是否存在
export const queryTemplateByName = (params) => {
  return http.fetchPost('template/queryTemplateByName', params)
};

//创建模版
export const createTemplate = (params) => {
  return http.fetchPost('template/createTemplate', params)
};

//查询所有模版
export const queryAlltemplate = (params) => {
  return http.fetchPost('template/queryAlltemplate', params)
};

//查询所有管理员(负责人)
export const queryAdminList = (params) => {
  return http.fetchPost('admin/queryAdminList', params)
};

//查询公司信息(关联公司)
export const queryCustList = (params) => {
  return http.fetchPost('cust/queryCustList', params)
};

//删除模版
export const deleteTemplate = (params) => {
  return http.fetchPost('template/deleteTemplate', params)
};

//生成实例
export const saveInstance = (params) => {
  return http.fetchPost('instance/saveInstance', params)
};