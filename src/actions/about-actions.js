import * as about from '../api/about';

export const ADD_TO_CART = 'ADD_TO_CART';
export const USER_LOGOUT = 'USER_LOGOUT';

export function addToCart(data) {
  return function(dispatch) {
    return about.getRgUserChanPin(data).then((res) => {
      dispatch({
        type: ADD_TO_CART,
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