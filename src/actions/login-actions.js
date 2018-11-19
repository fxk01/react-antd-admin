import * as about from '../api/login';

export const USER_LOGIN = 'USER_LOGIN';
export const REMOVE_LOGIN = 'REMOVE_LOGIN';

export function userLogin(data) {
  return function(dispatch) {
    return about.userLogin(data).then((res) => {
      dispatch({
        type: USER_LOGIN,
        payload: res,
      });
    });
  }
}

export function removeLogin() {
  return function(dispatch) {
    dispatch({
      type: REMOVE_LOGIN,
      payload: {},
    });
  }
}