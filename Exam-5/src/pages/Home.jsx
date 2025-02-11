
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";

const Home = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="home-container">
      {products.map(({ id, title, image }) => (
        <div key={id} className="product-card">
          <img src={image} alt={title} />
          <Link to={`/product/${id}`} className="product-title">{title}</Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
