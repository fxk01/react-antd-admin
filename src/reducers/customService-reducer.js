import {
  QUERY_TEMPLATE,
  CREATE_TEMPLATE,
  QUERY_ALL_TEMPLATE,
  QUERY_ADMIN,
  QUERY_CUSTLIST,
  DELETE_TEMPLATE,
  SAVE_INSTANCE,
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
  },
  deleteTemData: {
    isFetching: false
  },
  saveInstanceData: {
    isFetching: false,
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
    case DELETE_TEMPLATE: {
      return {
        ...state,
        deleteTemData: Object.assign({}, state.deleteTemData, action.payload, {
          isFetching: !state.deleteTemData.isFetching,
        })
      }
    }
    case SAVE_INSTANCE: {
      return {
        ...state,
        saveInstanceData: Object.assign({}, state.saveInstanceData, action.payload, {
          isFetching: !state.saveInstanceData.isFetching,
        })
      }
    }
    default:
      return state;
  }
}