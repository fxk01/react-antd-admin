import { ADD_TO_CART } from '../actions/about-actions';

const initialState = {
  chanPinList: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...state,
        chanPinList: action.payload['chanpin'],
      }
    }

    default:
      return state;
  }
}