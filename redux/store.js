import { legacy_createStore as createstore } from "redux";

import reducer from "./reducer/index";

export default function configureStore(initialState) {
  const store = createstore(reducer, initialState);
  return store;
}
