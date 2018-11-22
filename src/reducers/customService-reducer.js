import {
  QUERY_TEMPLATE,
  CREATE_TEMPLATE,
  QUERY_ALL_TEM,
} from '../actions/customService-actions';

const initialState = {
  customServiceData: {},
  createTemData: {},
  queryAllTemData: {},
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
    case QUERY_ALL_TEM: {
      return {
        
      }
    }
    default:
      return state;
  }
}