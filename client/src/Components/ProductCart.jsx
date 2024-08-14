import React from 'react';
import './ProductCart.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../Redux/cartSlice'; 
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductCart = (props) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.cart.token);

  const handleAddToCart = async (id) => {
    if (token) {
      console.log('Added to Cart');
      dispatch(addToCart(props.item));
      try {
        const response = await axios.post('http://localhost:3000/cart/add', {
          "productId": `${id}`,
          "quantity": 1
        }, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        console.log(response);
        toast.success('Product added to cart successfully!', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } catch (error) {
        console.error('Error adding product to cart:', error);
        toast.error('Failed to add product to cart. Please try again.', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  }

  return (
    <div className='product-container'>
      <img src={props.item.image} alt={props.item.name} className='product-image' />
      <p className='product-name'>Name: {props.item.name}</p>
      <p className='product-price'>Price: ${props.item.price.toFixed(2)}</p>
      <p className='product-rating'>Rating: {props.item.rating[0]?.rate || 'No rating'} ⭐</p>
      <button className='product-button' onClick={() => handleAddToCart(props.item.id)}>Add to Cart</button>
      <ToastContainer />
    </div>
  );
}

export default ProductCart;
