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




function App() {
  const [cart, setCart] = useState([])
  const token=useSelector((state)=>state.cart.token)


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

export default App
