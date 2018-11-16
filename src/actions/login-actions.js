import * as about from '../api/login';

export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';

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


export function logOut(data) {
  return function(dispatch) {
    dispatch({
      type: USER_LOGOUT,
      payload: data,
    });
  }
}