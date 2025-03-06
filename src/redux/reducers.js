import { ADD_TO_CART } from "./constant";

export const cartData = (data = [], action) => {
  switch (action.type === ADD_TO_CART) {
    case "ADD_TO_CART":
      return [...data, action.data];
    default:
      return data;
  }
};
