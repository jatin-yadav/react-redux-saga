import { createStore } from "redux";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer);

export { store };
