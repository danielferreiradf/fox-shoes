import React, { useMemo } from "react";

import { formatPrice } from "../../utils/format";

import { MdAddShoppingCart } from "react-icons/md";
import { ProductCard } from "./styles";

const ProductItem = ({ product }) => {
  const price = useMemo(() => formatPrice(product.price));

  return (
    <ProductCard>
      <img src={product.image} alt={product.title} />
      <strong>{product.title}</strong>
      <span>{price}</span>

      <button type="button">
        <div>
          <MdAddShoppingCart size={16} color="#fff" />
        </div>
        <span>adicionar ao carrinho</span>
      </button>
    </ProductCard>
  );
};

export default ProductItem;
