import React from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { ProductList } from "./styles";

const Home = () => {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-downshifter-9-masculino/26/HZM-1276-026/HZM-1276-026_zoom1.jpg"
          alt="Tenis"
        />
        <strong>Tenis 1</strong>
        <span>R$ 129.90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>
          <span>adicionar ao carrinho</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-downshifter-9-masculino/26/HZM-1276-026/HZM-1276-026_zoom1.jpg"
          alt="Tenis"
        />
        <strong>Tenis 1</strong>
        <span>R$ 129.90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>
          <span>adicionar ao carrinho</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-downshifter-9-masculino/26/HZM-1276-026/HZM-1276-026_zoom1.jpg"
          alt="Tenis"
        />
        <strong>Tenis 1</strong>
        <span>R$ 129.90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>
          <span>adicionar ao carrinho</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-downshifter-9-masculino/26/HZM-1276-026/HZM-1276-026_zoom1.jpg"
          alt="Tenis"
        />
        <strong>Tenis 1</strong>
        <span>R$ 129.90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>
          <span>adicionar ao carrinho</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-downshifter-9-masculino/26/HZM-1276-026/HZM-1276-026_zoom1.jpg"
          alt="Tenis"
        />
        <strong>Tenis 1</strong>
        <span>R$ 129.90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>
          <span>adicionar ao carrinho</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-downshifter-9-masculino/26/HZM-1276-026/HZM-1276-026_zoom1.jpg"
          alt="Tenis"
        />
        <strong>Tenis 1</strong>
        <span>R$ 129.90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>
          <span>adicionar ao carrinho</span>
        </button>
      </li>
    </ProductList>
  );
};

export default Home;
