import {createStore} from 'redux';
import {applyMiddleware} from 'redux';
import RootReducer from './reducers/root.reducer';

import createSagaMiddleware from 'redux-saga';

import logger from './middlewares/logger';
import testMiddleware from './middlewares/test';

import counterSage from './sagas/counter.saga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(RootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(counterSage);