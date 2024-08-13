import React from 'react';
import CartCard from './CartCard';
import { useSelector } from 'react-redux';
import './Cart.css';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const deliveryFee = 1; 
  const total = subtotal + deliveryFee;

  return (
    <div className="cart-container">
      <div className="left-container">
        {cartItems.map((item) => (
          <CartCard key={item.id} item={item} />
        ))}
      </div>
      <div className="right-container">
        <div className="header">Price Details</div>
        <div className="sub-total">SubTotal: ${subtotal.toFixed(2)}</div>
        <div className="items-count">({cartItems.length} items)</div>
        <div className="delivery-fees">Delivery Fees: ${deliveryFee.toFixed(2)}</div>
        <div className="total">Total: ${total.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default Cart;
