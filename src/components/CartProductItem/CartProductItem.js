import React from "react";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  updateAmountRequest
} from "../../redux/cart/cartActions";

import { formatPrice } from "../../utils/format";

import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete
} from "react-icons/md";
import { ProductCart } from "./styles";

const CartProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const productSubtotal = formatPrice(product.amount * product.price);

  const changeProductAmount = (product, option) => {
    if (option === "increment") {
      dispatch(updateAmountRequest(product.id, product.amount + 1));
    } else if (option === "decrement") {
      dispatch(updateAmountRequest(product.id, product.amount - 1));
    }
  };

  return (
    <ProductCart>
      <td>
        <img src={product.image} alt={product.title} />
      </td>
      <td>
        <strong>{product.title}</strong>
        <span>{product.formattedPrice}</span>
      </td>
      <td>
        <div>
          <button
            type="button"
            onClick={() => changeProductAmount(product, "decrement")}
          >
            <MdRemoveCircleOutline size={20} color="#50211c" />
          </button>

          <input type="number" readOnly value={product.amount} />

          <button
            type="button"
            onClick={() => changeProductAmount(product, "increment")}
          >
            <MdAddCircleOutline size={20} color="#50211c" />
          </button>
        </div>
      </td>
      <td>
        <strong>{productSubtotal}</strong>
      </td>
      <td>
        <button
          type="button"
          onClick={() => dispatch(removeFromCart(product.id))}
        >
          <MdDelete size={20} color="#50211c" />
        </button>
      </td>
    </ProductCart>
  );
};

export default CartProductItem;
