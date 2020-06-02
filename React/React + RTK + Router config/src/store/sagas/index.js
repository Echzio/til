import { all } from 'redux-saga/effects';
import { rootSagaWatcher } from './rootSaga';

function* rootSaga() {
  yield all([rootSagaWatcher()]);
}

export { rootSaga };
