import {takeEvery, put, delay} from 'redux-saga/effects';
import {SHOWMODAL_ASYNC} from '../const/modal.const';
import {show} from '../actions/modal.actions';

function* handleShow(action) {
    // 参数为action
    yield delay(2000);
    yield put(show());
}

export default function* counterSage() {
    // 第一个参数为action type
    yield takeEvery(SHOWMODAL_ASYNC, handleShow);
}