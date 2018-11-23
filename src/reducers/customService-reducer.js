import {
  QUERY_TEMPLATE,
  CREATE_TEMPLATE,
  QUERY_ALL_TEMPLATE,
  QUERY_ADMIN,
  QUERY_CUSTLIST,
} from '../actions/customService-actions';

const initialState = {
  customServiceData: {},
  createTemData: {},
  queryAllTemData: {
    isFetching: false,
    templates: []
  },
  queryAdminData: {
    admins: [],
  },
  queryCustListData: {
    custs: [],
  }
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
    case QUERY_ALL_TEMPLATE: {
      return {
        ...state,
        queryAllTemData: Object.assign({}, state.queryAllTemData, action.payload, {
          isFetching: !state.queryAllTemData.isFetching,
        })
      }
    }
    case QUERY_ADMIN: {
      return {
        ...state,
        queryAdminData: Object.assign({}, state.queryAdminData, action.payload)
      }
    }
    case QUERY_CUSTLIST: {
      return {
        ...state,
        queryCustListData: Object.assign({}, state.queryCustListData, action.payload)
      }
    }
    default:
      return state;
  }
}