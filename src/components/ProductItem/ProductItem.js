import React, { useMemo } from "react";
import { useDispatch } from "react-redux";

import { formatPrice } from "../../utils/format";

import { MdAddShoppingCart } from "react-icons/md";
import { ProductCard } from "./styles";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  // Memoizing item price
  const price = useMemo(() => formatPrice(product.price));

  const handleAddProduct = product => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <ProductCard>
      <img src={product.image} alt={product.title} />
      <strong>{product.title}</strong>
      <span>{price}</span>

      <button type="button" onClick={() => handleAddProduct(product)}>
        <div>
          <MdAddShoppingCart size={16} color="#fff" />
        </div>
        <span>adicionar ao carrinho</span>
      </button>
    </ProductCard>
  );
};

export default ProductItem;
