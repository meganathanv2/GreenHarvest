import React from 'react';
import './ProductCart.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/cartSlice'; 
import axios from "axios"
import { useSelector } from 'react-redux';

const ProductCart = (props) => {
  const dispatch = useDispatch();
const token=useSelector((state)=>state.cart.token)
  const handleAddToCart = async (id) => {
    if(token){
      console.log('Added to Cart');
    dispatch(addToCart(props.item));
    const payload={productId:props.item.id, quantity:1}
      const response=await axios.post('http://localhost:3000/cart/add',{
        "productId":`${id}`,
        "quantity":1
      },{
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      console.log(response)

    }
    
  }

  return (
    <div className='product-container'>
      <img src={props.item.image} alt={props.item.name} className='product-image' />
      <p className='product-name'>Name: {props.item.name}</p>
      <p className='product-price'>Price: ${props.item.price.toFixed(2)}</p>
      <p className='product-rating'>Rating: {props.item.rating[0]?.rate || 'No rating'} ⭐</p>
      <button className='product-button' onClick={()=>handleAddToCart(props.item._id)}>Add to Cart</button>
    </div>
  );
}

export default ProductCart;
