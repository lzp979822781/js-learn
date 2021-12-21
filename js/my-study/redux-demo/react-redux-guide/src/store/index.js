import {createStore} from 'redux';
import {applyMiddleware} from 'redux';
import RootReducer from './reducers/root.reducer';

import logger from './middlewares/logger';
import testMiddleware from './middlewares/test';

export const store = createStore(RootReducer, applyMiddleware(logger, testMiddleware));