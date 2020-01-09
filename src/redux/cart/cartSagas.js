import { call, select, put, all, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";

import api from "../../services/api";
import history from "../../services/history";
import { formatPrice } from "../../utils/format";

import { addToCartSuccess, updateAmountSuccess } from "./cartActions";

// Sagas receives the action object
function* addToCart({ payload }) {
  const productInCart = yield select(state =>
    state.cart.find(product => product.id === payload)
  );

  const stock = yield call(api.get, `/stock/${payload}`);

  const stockAmount = stock.data.amount;
  const currentAmount = productInCart ? productInCart.amount : 0;

  const amount = currentAmount + 1;

  if (amount > stockAmount) {
    toast.error("Quantidade superior ao estoque.");
    return;
  }

  if (productInCart) {
    const amount = productInCart.amount + 1;
    yield put(updateAmountSuccess(payload, amount));
  } else {
    const response = yield call(api.get, `/products/${payload}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price)
    };
    yield put(addToCartSuccess(data));
    history.push("/cart");
  }
}

function* updateAmount({ payload: { productId, amount } }) {
  if (amount <= 0) return;

  const stock = yield call(api.get, `/stock/${productId}`);
  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    toast.error("Quantidade superior ao estoque.");
    return;
  }

  yield put(updateAmountSuccess(productId, amount));
}

export default all([
  takeLatest("@cart/ADD_REQUEST", addToCart),
  takeLatest("@cart/UPDATE_AMOUNT_REQUEST", updateAmount)
]);
