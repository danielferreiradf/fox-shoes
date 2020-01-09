import { call, put, all, takeLatest } from "redux-saga/effects";

import api from "../../services/api";

import { addToCartSuccess } from "./cartActions";

// Sagas receives the action object.
function* addToCart({ payload }) {
  const response = yield call(api.get, `/products/${payload}`);

  yield put(addToCartSuccess(response.data));
}

export default all([takeLatest("@cart/ADD_REQUEST", addToCart)]);
