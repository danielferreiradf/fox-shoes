import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import api from "../../services/api";

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
