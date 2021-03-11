import { put, all, takeLatest } from "redux-saga/effects";

function* testSaga() {
  yield put({
    type: "@TEST_SUCCESS",
  });
}

export default all([takeLatest("@TEST_REQUEST", testSaga)]);
