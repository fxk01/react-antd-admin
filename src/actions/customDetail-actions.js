import * as customDetailApi from '../api/customDetailApi';

export const CREATE_NODES = 'CREATE_NODES';
export const QUERY_NODES = 'QUERY_NODES';
export const CREATE_EVENT_NODES = 'CREATE_EVENT_NODES';

export function createNodes(data) {
  return function(dispatch) {
    return customDetailApi.createNodes(data).then((res) => {
      dispatch({
        type: CREATE_NODES,
        payload: res,
      });
    });
  }
}

export function queryNodes(data) {
  return function(dispatch) {
    return customDetailApi.queryTemplateRefInfo(data).then((res) => {
      dispatch({
        type: QUERY_NODES,
        payload: res,
      });
    });
  }
}

export function createEvents(data) {
  return function(dispatch) {
    return customDetailApi.createEvents(data).then((res) => {
      dispatch({
        type: CREATE_EVENT_NODES,
        payload: res,
      });
    });
  }
}