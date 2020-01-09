import React, { useMemo } from "react";
import { useDispatch } from "react-redux";
import { addToCartRequest } from "../../redux/cart/cartActions";

import { formatPrice } from "../../utils/format";
import { MdAddShoppingCart } from "react-icons/md";
import { ProductCard } from "./styles";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  // Memoizing item price
  const price = useMemo(() => formatPrice(product.price), [product]);

  return (
    <ProductCard>
      <img src={product.image} alt={product.title} />
      <strong>{product.title}</strong>
      <span>{price}</span>

      <button
        type="button"
        onClick={() => dispatch(addToCartRequest(product.id))}
      >
        <div>
          <MdAddShoppingCart size={16} color="#fff" />
        </div>
        <span>adicionar ao carrinho</span>
      </button>
    </ProductCard>
  );
};

export default ProductItem;
