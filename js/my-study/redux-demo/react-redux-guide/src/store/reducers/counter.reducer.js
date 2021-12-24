import {handleActions as createReducer} from 'redux-actions';

import {INCREMENT, DECREMENT} from '../const/counter.const';

const initialState = {
    count: 0
};

const handleIncrement = (state, action) => ({...state, count: state.count + action.payload});
const handleDecrement = (state, action) => ({...state, count: state.count - action.payload});

export default createReducer({
    [INCREMENT]: handleIncrement,
    [DECREMENT]: handleDecrement
}, initialState);

/* export default (state = initialState, action) => {
    switch(action.type) {
        case INCREMENT:
            return  {
                ...state,
                count: state.count + action.payload
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - action.payload
            }
        default:
            return state;
    }
}; */