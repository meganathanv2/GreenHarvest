import React from 'react';
import { useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../Redux/cartSlice';

const CartCard = ({ item }) => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseQuantity(item.id));
  };

  const handleDecrease = () => {
    dispatch(decreaseQuantity(item.id));
  };

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <div className="cart-item-card">
      <img src={item.image} alt={item.title} width={50} />
      <div>
        <div>{item.title}</div>
        <div className="quantity-container">
          <button onClick={handleDecrease}>-</button>&nbsp;
          {item.quantity || 1}&nbsp;
          <button onClick={handleIncrease}>+</button>
        </div>
        <button onClick={handleRemove}>Remove</button>
      </div>
      ${item.price}
    </div>
  );
};

export default CartCard;
