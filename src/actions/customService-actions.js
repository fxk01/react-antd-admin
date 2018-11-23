import * as customService from '../api/customService';

export const QUERY_TEMPLATE = 'QUERY_TEMPLATE';
export const CREATE_TEMPLATE = 'CREATE_TEMPLATE';
export const QUERY_ALL_TEMPLATE = 'QUERY_ALL_TEMPLATE';
export const QUERY_ADMIN = 'QUERY_ADMIN';
export const QUERY_CUSTLIST = 'QUERY_CUSTLIST';
export const DELETE_TEMPLATE = 'DELETE_TEMPLATE';

export function queryTemplateByName(data) {
  return function(dispatch) {
    return customService.queryTemplateByName(data).then((res) => {
      dispatch({
        type: QUERY_TEMPLATE,
        payload: res,
      });
    });
  }
}

export function createTemplate(data) {
  return function(dispatch) {
    return customService.createTemplate(data).then((res) => {
      dispatch({
        type: CREATE_TEMPLATE,
        payload: res,
      });
    });
  }
}

export function queryAlltemplate(data) {
  return function(dispatch) {
    return customService.queryAlltemplate(data).then((res) => {
      dispatch({
        type: QUERY_ALL_TEMPLATE,
        payload: res,
      });
    });
  }
}

export function queryAdminList(data) {
  return function(dispatch) {
    return customService.queryAdminList(data).then((res) => {
      dispatch({
        type: QUERY_ADMIN,
        payload: res,
      });
    });
  }
}

export function queryCustList(data) {
  return function(dispatch) {
    return customService.queryCustList(data).then((res) => {
      dispatch({
        type: QUERY_CUSTLIST,
        payload: res,
      });
    });
  }
}