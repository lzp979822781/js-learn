import {INCREMENT, DECREMENT} from '../const/counter.const';

/**
 * 生成action 
 */
export const increment = payload => ({type: INCREMENT, payload});
export const decrement = payload => ({type: DECREMENT, payload});