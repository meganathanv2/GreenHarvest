import React from 'react';
import './ProductCart.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/cartSlice';

const ProductCard = (props) => {
  const dispatch = useDispatch();
  const handleChange = () => {
   
    console.log('Added to Cart');
    dispatch(addToCart(props.item));

  }
  return (
    <div className='product-card'>
      <img src={props.item.image} alt={props.item.name} className='product-image' />
      <p className='product-name'>Name: {props.item.name}</p>
      <p className='product-price'>Price: ${props.item.price.toFixed(2)}</p>
      <p className='product-rating'>Rating: {props.item.rating} ⭐</p>
      <button className='product-button' onClick={handleChange}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
