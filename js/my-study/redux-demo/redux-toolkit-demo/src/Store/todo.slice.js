import {createSlice, createAsyncThunk, createEntityAdapter, createSelector} from '@reduxjs/toolkit';
import axios from 'axios';

const todosAdapter = createEntityAdapter({
    selectId: item => item.cid
});

export const TODOS_FEATURE_KEY = "todos";

export const loadTodos = createAsyncThunk(`${TODOS_FEATURE_KEY}/loadTodos`, (payload, thunkApi) => {
    return axios.get(payload).then(response => response.data);
})

const {reducer: ToDoReducer, actions} = createSlice({
    name: TODOS_FEATURE_KEY,
    initialState: todosAdapter.getInitialState(),
    reducers: {
        addTodo: {
            reducer: todosAdapter.addOne,
            prepare: todo => {
                return {payload: {
                    cid: Math.random(),
                    ...todo
                }}
            }
        },
        setTodos: todosAdapter.addMany
    },
    extraReducers: {
        [loadTodos.pending]: (state, action) => state,
        [loadTodos.fulfilled]: todosAdapter.addMany
    }
});

const {selectAll} = todosAdapter.getSelectors();

export const selectTodos = createSelector(state => state[TODOS_FEATURE_KEY], selectAll);

// 结构出actionCreator 创建reducer的时候生成名称为addTodo的actionCreator
export const {addTodo, setTodos} = actions;
export default ToDoReducer;