import {
  QUERY_TEM_EXAMPLE,
} from '../actions/useTemplate-actions';

const initialState = {
  queryTemInstanceData: {
    nodes: [],
    isFetching: false
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case QUERY_TEM_EXAMPLE: {
      return {
        ...state,
        queryTemInstanceData: Object.assign({}, state.queryTemInstanceData, action.payload, {
          isFetching: !state.queryTemInstanceData.isFetching
        })
      }
    }
    default:
      return state;
  }
}