import {
  CREATE_NODES,
  QUERY_NODES,
  CREATE_EVENT_NODES,
} from '../actions/customDetail-actions';

const initialState = {
  nodeData: {
    nodes: []
  },
  queryNodeData: {
    nodes: []
  },
  eventNodeData: {}
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
      const { nodeData } = state;
      [...nodeData.nodes] = action.payload.nodes || [];
      return {
        ...state,
        queryNodeData: Object.assign({}, state.queryNodeData, action.payload)
      }
    }
    case CREATE_EVENT_NODES: {
      return {
        ...state,
        eventNodeData: action.payload,
      }
    }
    default:
      return state;
  }
}