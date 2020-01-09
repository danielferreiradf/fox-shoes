import produce from "immer";

const initialState = [];

export default function cart(state = initialState, action) {
  switch (action.type) {
    case "@cart/ADD_SUCCESS":
      // return [...state, { ...action.payload, amount: 1 }];
      return produce(state, draft => {
        draft.push(action.payload);
      });
    case "@cart/REMOVE":
      return produce(state, draft => {
        const productIndex = draft.findIndex(
          product => product.id === action.payload
        );

        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });
    case "@cart/UPDATE_AMOUNT":
      if (action.payload.amount <= 0) {
        return state;
      }

      return produce(state, draft => {
        const productIndex = draft.findIndex(
          product => product.id === action.payload.id
        );
        if (productIndex >= 0) {
          draft[productIndex].amount = Number(action.payload.amount);
        }
      });
    default:
      return state;
  }
}
