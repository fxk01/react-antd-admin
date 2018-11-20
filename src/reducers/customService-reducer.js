import {
  QUERY_TEMPLATE,
  CREATE_TEMPLATE,
} from '../actions/customService-actions';

const initialState = {
  customServiceData: {},
  createTemData: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case QUERY_TEMPLATE: {
      return {
        ...state,
        customServiceData: action.payload,
      }
    }
    case CREATE_TEMPLATE: {
      return {
        ...state,
        createTemData: action.payload,
      }
    }
    default:
      return state;
  }
}