import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import ToDoReducer, {TODOS_FEATURE_KEY} from './todo.slice';
import logger from 'redux-logger';

export default configureStore({
    middleware: [...getDefaultMiddleware(), logger],
    reducer: {
        [TODOS_FEATURE_KEY]: ToDoReducer
    },
    devTools: process.env.NODE_ENV !== 'production'
})