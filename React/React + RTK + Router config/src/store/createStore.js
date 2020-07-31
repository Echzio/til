import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '@/store/reducers/index';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from '@/store/sagas/';

function createStore(preloadedState) {
    const sagaMiddleware = createSagaMiddleware();

    const store = configureStore({
        reducer: rootReducer,
        devTools: process.env.NODE_ENV !== 'production',
        middleware: process.env.NODE_ENV !== 'production' ? [logger, sagaMiddleware] : [sagaMiddleware],
        preloadedState,
    });

    sagaMiddleware.run(rootSaga)

    return store
}

export {
    createStore
}