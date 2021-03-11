import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import { createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";

import reducers from "./modules/rootReducer";
import { rootSaga } from "./modules/rootSagas";

const sagaMiddleware = createSagaMiddleware();

const newStore = () => {
  const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export const storeWrapper = createWrapper(newStore, { debug: false });
