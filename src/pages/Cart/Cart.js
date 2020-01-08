import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { formatPrice } from "../../utils/format";
import CartProductItem from "../../components/CartProductItem/CartProductItem";
import { Container, ProductTable, Total } from "./styles";

const Cart = () => {
  const cartItems = useSelector(state => state.cart);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    // Calculate total of items in cart
    const amount = cartItems.reduce((total, item) => {
      return (total += item.price * item.amount);
    }, 0);
    setCartTotal(amount);
  }, [cartItems]);

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
          <strong>{formatPrice(cartTotal)}</strong>
        </Total>
      </footer>
    </Container>
  );
};

export default Cart;
