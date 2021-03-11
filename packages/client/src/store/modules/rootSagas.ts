import { all } from "redux-saga/effects";
import cart from "./cart/sagas";

export const rootSaga = function* root() {
  yield all([cart]);
};
