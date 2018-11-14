import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk'

const log = createLogger({
  collapsed: true,
  diff: true,
  duration: true
});
const middleWares = [];

if (process.env.NODE_ENV === `development`) {
  middleWares.push(log);
}
const store = compose(applyMiddleware(
  thunk,
  ...middleWares,
))(createStore)(rootReducer);

export default store;