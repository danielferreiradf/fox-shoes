import React from "react";
import { useSelector } from "react-redux";

import CartProductItem from "../../components/CartProductItem/CartProductItem";
import { Container, ProductTable, Total } from "./styles";

const Cart = () => {
  const cartItems = useSelector(state => state.cart);

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {cartItems.map(product => (
            <CartProductItem key={product.id} product={product} />
          ))}
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>R$ 1920,20</strong>
        </Total>
      </footer>
    </Container>
  );
};

export default Cart;
