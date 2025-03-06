import { ADD_TO_CART } from "./constant";

export const Add_To_Cart = (product) => {
  console.log("Add_To_Cart Action called: ", product);
  return {
    type: ADD_TO_CART,
    data: product,
  };
};
