import React, { useState } from 'react';
import './CartCard.css';
import axios from 'axios';

const CartCard = (props) => {
  const [loading, setLoading] = useState(false);

  const handleRemoveFromCart = async (id) => {
    setLoading(true);
    try {
      console.log(id)
      const response = await axios.post("http://localhost:3000/cart/delete",{productId:id},{
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      console.log('Removed from Cart', response);
     
      
      if (props.onRemove) {
        props.onRemove(id);
      }
    } catch (error) {
      console.error('Error removing from cart:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <div className='cart-card'>
      {console.log(props.item)}
      <img src={props.item.image} alt={props.item.name} className='cart-image' />
      <p className='cart-name'>Name: {props.item.name}</p>
      <p className='cart-price'>Price: ${props.item.price.toFixed(2)}</p>
      <p className='cart-quantity'>Quantity: {props.item.quantity}</p>
      <p className='cart-subtotal'>Subtotal: ${props.item.amount.toFixed(2)}</p>
      <button 
        className='cart-button' 
        onClick={() => handleRemoveFromCart(props.item.id)} 
        disabled={loading}
      >
        {loading ? 'Removing...' : 'Remove from Cart'}
      </button>
      
    </div>
    {/* <button className='check-out'><a href='/order'>CheckOut</a></button> */}
    </>
  );
};

export default CartCard;
