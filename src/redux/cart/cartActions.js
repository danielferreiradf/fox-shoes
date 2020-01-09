export function addToCartRequest(productId) {
  return { type: "@cart/ADD_REQUEST", payload: productId };
}

export function addToCartSuccess(product) {
  return { type: "@cart/ADD_SUCCESS", payload: product };
}

export function removeFromCart(productId) {
  return { type: "@cart/REMOVE", payload: productId };
}

export function updateAmount(id, amount) {
  return { type: "@cart/UPDATE_AMOUNT", payload: { id, amount } };
}
