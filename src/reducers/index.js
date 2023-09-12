import { data } from "../data";
const INITIAL_STATE = {
  booklist: data,
  cart: []
};
export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "addtobasket":
      return { ...state, cart: [...state.cart, action.payload] };
    default:
      return state;
  }
};
