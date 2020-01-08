import React from "react";
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete
} from "react-icons/md";
import { ProductCart } from "./styles";

const CartProductItem = ({ product }) => {
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
          <button type="button">
            <MdRemoveCircleOutline size={20} color="#7159c1" />
          </button>
          <input type="number" readOnly value={product.amount} />
          <button type="button">
            <MdAddCircleOutline size={20} color="#7159c1" />
          </button>
        </div>
      </td>
      <td>
        <strong>R$ 258,80</strong>
      </td>
      <td>
        <button type="button">
          <MdDelete size={20} color="#7159c1" />
        </button>
      </td>
    </ProductCart>
  );
};

export default CartProductItem;
