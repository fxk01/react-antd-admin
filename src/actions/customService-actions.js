import * as customService from '../api/customService';

export const QUERY_TEMPLATE = 'QUERY_TEMPLATE';
export const CREATE_TEMPLATE = 'CREATE_TEMPLATE';

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