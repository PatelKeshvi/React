
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../index.css"; 

const Details = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const getProduct = async () => {
    try {
      let res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProduct(res.data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  return (  
    <div className="product-details">
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <img src={product.image} alt={product.title} />
    </div>
  );
};

export default Details;
