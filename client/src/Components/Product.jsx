import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Product.css';
import ProductCart from './ProductCart';
import { useSelector } from 'react-redux';

const Product = () => {
  const [products, setProducts] = useState([]);
  const token=useSelector((state)=>state.Token.token)
  

  useEffect(() => {
    ShowProducts();
  }, []);``

  const ShowProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/product/getproduct");
      console.log("API Response:", response);
      console.log(token)
      setProducts(response.data.product);
      console.log("Products state:", response.data);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  return (
    <div className="product">
     
      {products.length > 0 ? (
        products.map((product, index) => (
          <ProductCart key={index} item={product} />
        ))
      ) : (
        <p>No products available</p>
      )}
      
    </div>
  );
};

export default Product;
