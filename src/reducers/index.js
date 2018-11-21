import { combineReducers } from 'redux';
import aboutReducer from './about-reducer';
import loginReducer from './login-reducer';
import customServiceReducer from './customService-reducer';
import customDetailReducer from './customDetail-reducer';
const allReducers = {
  aboutReducerData: aboutReducer,
  loginReducerData: loginReducer,
  customServiceReducerData: customServiceReducer,
  customDetailReducerData: customDetailReducer,
};

const appReducer = combineReducers(allReducers);

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined
  }

  return appReducer(state, action)
};

export default rootReducer;