import React, { useState, useEffect } from "react";

import api from "../../services/api";
import { formatPrice } from "../../utils/format";

import ProductItem from "../../components/ProductItem/ProductItem";

import { ProductList } from "./styles";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await api.get("/products");
      setProducts(response.data);
    };

    // Calling func
    getProducts();
  }, []);

  return (
    <ProductList>
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ProductList>
  );
};

export default Home;
