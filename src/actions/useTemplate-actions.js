import * as useTemplateApi from '../api/useTemplateApi';

export const QUERY_TEM_EXAMPLE = 'QUERY_TEM_EXAMPLE';

export function queryTemplateRefInfo(data) {
  return function(dispatch) {
    return useTemplateApi.queryTemplateRefInfo(data).then((res) => {
      dispatch({
        type: QUERY_TEM_EXAMPLE,
        payload: res,
      });
    });
  }
}