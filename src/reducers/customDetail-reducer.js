import {
  CREATE_NODES,
  QUERY_NODES
} from '../actions/customDetail-actions';

const initialState = {
  nodeData: {},
  queryNodeData: {
    nodes: []
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CREATE_NODES: {
      return {
        ...state,
        nodeData: action.payload,
      }
    }
    case QUERY_NODES: {
      return {
        ...state,
        queryNodeData: action.payload,
      }
    }
    default:
      return state;
  }
}