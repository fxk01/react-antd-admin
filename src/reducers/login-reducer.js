import { USER_LOGIN } from '../actions/login-actions';

const initialState = {
  userLoginData: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN: {
      return {
        ...state,
        userLoginData: action.payload,
      }
    }

    default:
      return state;
  }
}