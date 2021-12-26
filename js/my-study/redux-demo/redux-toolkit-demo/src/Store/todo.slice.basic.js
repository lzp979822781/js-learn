import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const TODOS_FEATURE_KEY = "todos";

export const loadTodos = createAsyncThunk(`${TODOS_FEATURE_KEY}/loadTodos`, (payload, thunkApi) => {
    axios.get(payload).then(response => {
        thunkApi.dispatch(setTodos(response.data))
    })
})

const {reducer: ToDoReducer, actions} = createSlice({
    name: TODOS_FEATURE_KEY,
    initialState: [],
    reducers: {
        addTodo: {
            reducer: (state, action) => {
                state.push(action.payload);
            },
            prepare: todo => {
                return {payload: {
                    id: Math.random(),
                    ...todo
                }}
            }
        },
        setTodos: (state, action) => {
            action.payload.forEach(item => state.push(item))
        }
    }
});

// 结构出actionCreator 创建reducer的时候生成名称为addTodo的actionCreator
export const {addTodo, setTodos} = actions;
export default ToDoReducer;