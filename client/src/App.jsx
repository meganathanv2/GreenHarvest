import './App.css'
import Header from './Components/Header'
import Product from './Components/Product'
import { useState } from 'react'
import { Provider, useSelector } from "react-redux";
import store from "./Redux/store";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import { ToastContainer, toast } from 'react-toastify';
import Cart from './Components/Cart';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';





function App() {
  const [cart, setCart] = useState([])
  const token=useSelector((state)=>state.cart.token)
  const dispatch=useDispatch()
  useEffect(()=>{
    const token=localStorage.getItem("token")
    if(token){
      dispatch(addtoToken(token))
    }
},[])


  return (
    
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Product />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/cart' element={<Cart />} />

         
        </Routes>
      </BrowserRouter>
 
  )
}
import { addtoToken } from './Redux/cartSlice';

export default App
