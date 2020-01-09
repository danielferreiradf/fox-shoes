import { call, select, put, all, takeLatest } from "redux-saga/effects";

import api from "../../services/api";
import { formatPrice } from "../../utils/format";

import { addToCartSuccess, updateAmount } from "./cartActions";

// Sagas receives the action object.
function* addToCart({ payload }) {
  const productInCart = yield select(state =>
    state.cart.find(product => product.id === payload)
  );

  if (productInCart) {
    const amount = productInCart.amount + 1;
    yield put(updateAmount(payload, amount));
  } else {
    const response = yield call(api.get, `/products/${payload}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price)
    };
    yield put(addToCartSuccess(data));
  }
}

export default all([takeLatest("@cart/ADD_REQUEST", addToCart)]);
