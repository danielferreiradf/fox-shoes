const initialState = [];

export default function cart(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, { ...action.payload, amount: 1 }];
    default:
      return state;
  }
}
