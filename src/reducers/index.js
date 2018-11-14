import { combineReducers } from 'redux';
import aboutReducer from './about-reducer';

const allReducers = {
  aboutReducerData: aboutReducer
};

const appReducer = combineReducers(allReducers);

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined
  }

  return appReducer(state, action)
};

export default rootReducer;