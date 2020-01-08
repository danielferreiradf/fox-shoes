export function addToCart(product) {
  return { type: "@cart/ADD", payload: product };
}

export function removeFromCart(productId) {
  return { type: "@cart/REMOVE", payload: productId };
}

export function updateAmount(id, amount) {
  return { type: "@cart/UPDATE_AMOUNT", payload: { id, amount } };
}
