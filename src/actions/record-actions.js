import * as recordApi from '../api/recordApi';

export const QUERY_BNFWT = 'QUERY_BNFWT';
export const QUERY_EVENTS = 'QUERY_EVENTS';

export function queryDJBATemplate(data) {
  return function(dispatch) {
    return recordApi.queryDJBATemplate(data).then((res) => {
      dispatch({
        type: QUERY_BNFWT,
        payload: res,
      });
    });
  }
}

export function queryEvents(data) {
  return function(dispatch) {
    return recordApi.queryEvents(data).then((res) => {
      dispatch({
        type: QUERY_EVENTS,
        payload: res,
      });
    });
  }
}