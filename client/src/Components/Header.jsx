import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { useSelector } from 'react-redux';

const Header = (props) => {
  const cartItem = useSelector(state => state.cart.items.length);
  const token=useSelector((state)=>state.cart.token)

  return (
    <>
      <header className='main-head'>
        <nav className='main-nav'>
          <span className='logo'>GREENHARVEST</span>
          <div className='menu'>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/'>MENU</Link></li>
              <li><Link to='/'>ABOUT</Link></li>
              <li><Link to='/cart' className='cart-link' data-count={cartItem}>CART</Link></li>
              {!token?<li><Link to='/login'>LOGIN</Link></li>:<li onClick={
                ()=>localStorage.removeItem('token')
              } className='logout'>Logout</li>}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
