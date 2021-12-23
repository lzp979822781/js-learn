import {takeEvery, put, delay} from 'redux-saga/effects';
import {INCREMENT_ASYNC} from '../const/counter.const';
import {increment} from '../actions/counter.actions';

function* handleCounter(action) {
    console.log('action', action);
    // 参数为action
    yield delay(2000);
    yield put(increment(action.payload));
}

export default function* counterSage() {
    // 第一个参数为action type
    yield takeEvery(INCREMENT_ASYNC, handleCounter)
}