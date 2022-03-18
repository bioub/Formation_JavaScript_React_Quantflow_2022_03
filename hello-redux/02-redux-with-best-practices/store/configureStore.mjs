import { createStore } from "redux";
import { reducer } from "./reducers.mjs";

export function configureStore(production = false) {
  const store = createStore(reducer);

  // ...plugins

  return store;
}
