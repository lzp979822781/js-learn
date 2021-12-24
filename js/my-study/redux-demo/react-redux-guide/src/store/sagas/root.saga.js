import {all} from 'redux-saga/effects';

import counterSage from './counter.saga';
import modalSaga from './modal.saga';

export default function* rootSaga() {
    yield all([
        counterSage(),
        modalSaga()
    ]);
}