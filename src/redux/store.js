import { createStore } from "redux";

const testReducer = (state = { test: "test" }, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
const store = createStore(testReducer);

export { store };
