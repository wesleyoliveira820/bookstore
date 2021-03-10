import { createStore } from "redux";
import { createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./modules/rootReducer";

const newStore = () => {
  const store = createStore(reducers, composeWithDevTools());

  return store;
};

export const storeWrapper = createWrapper(newStore, { debug: false });
