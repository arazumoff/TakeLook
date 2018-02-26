import { call, put, takeLatest, select } from 'redux-saga/effects';
import * as types from '../constants/ActionTypes';
import {apiFetchList} from '../Api';

import {getMinPrice, getMaxPrice} from "../selectors";

function* fetchList(action) {
    try {
        const {studios} = yield call(apiFetchList);
        yield put({type: types.LIST_FETCH_SUCCEEDED, list: studios});

        const min = yield select(getMinPrice);
        const max = yield select(getMaxPrice);
        yield put({type: types.CHANGE_PRICE, price: [min, max]});
    } catch (e) {
        yield put({type: types.LIST_FETCH_FAILED, message: e.message});
    }
}

function* rootSaga() {
    yield takeLatest(types.LIST_FETCH_REQUESTED, fetchList);
}

export default rootSaga;