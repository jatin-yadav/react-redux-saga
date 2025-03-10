import { ADD_TO_CART, ADD_TO_WISHLIST } from "./constant";

export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...data, action.data];
    case ADD_TO_WISHLIST:
      return [...data, action.data];
    default:
      return data;
  }
};
