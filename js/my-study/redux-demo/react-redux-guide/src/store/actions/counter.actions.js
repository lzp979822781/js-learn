import {createAction} from 'redux-actions';
import {INCREMENT, DECREMENT, INCREMENT_ASYNC} from '../const/counter.const';

/**
 * 生成action 
 */
export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

export const increment_async = createAction(INCREMENT_ASYNC);