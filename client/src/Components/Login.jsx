import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addtoToken } from '../Redux/cartSlice';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/user/login', { email, password });
      console.log(response.data.token);
      localStorage.setItem("token", response.data.token);
      dispatch(addtoToken(response.data.token));
      toast.success("Login successful!");
      navigate('/');
    } catch (error) {
      toast.error("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="container">
      <img
        className='logo'
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn0rGjJ48UbmCn2i8a7Y-XQCdVqJA3OVFnbQ&s'
        alt='logo'
      />
      <p>Login</p>
      <form className='form' onSubmit={handleSubmit}>
        <div className='login-form'>
          <label className='email'>Email</label>
          <input
            type='email'
            name='email'
            placeholder='Enter Email'
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className='login-form'>
          <label className='password'>Password</label>
          <input
            type='password'
            name='password'
            placeholder='Enter Password'
            value={password}
            onChange={handleChange}
          />
        </div>
        <button className='login-btn' type='submit'>Login</button>
        <p className='account'>
          Don't have an account? <a href='/signup'>Sign Up</a>
        </p>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
