import { takeEvery } from 'redux-saga/effects';

function* rootSagaWatcher() {
  yield takeEvery('HELLO', rootSagaWorker);
}

function* rootSagaWorker({ payload }) {
  yield;
  console.log(payload);
}

export { rootSagaWatcher };
