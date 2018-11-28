import {
  QUERY_EVENTS,
  QUERY_BNFWT,
} from '../actions/record-actions';

const initialState = {
  queryBnFwTemData: {
    isFetching: false,
    nodes: []
  },
  queryEventData: {
    isFetching: false,
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case QUERY_BNFWT: {
      return {
        ...state,
        queryBnFwTemData: Object.assign({}, state.queryBnFwTemData, action.payload, {
          isFetching: !state.queryEventData.isFetching,
        })
      }
    }
    case QUERY_EVENTS: {
      return {
        ...state,
        queryEventData: Object.assign({}, state.queryEventData, action.payload, {
          isFetching: !state.queryEventData.isFetching,
        })
      }
    }
    default:
      return state;
  }
}