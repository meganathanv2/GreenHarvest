import './App.css'
import Header from './Components/Header'
import Product from './Components/Product'
import { useState } from 'react'
import { Provider } from "react-redux";
import store from "./Redux/store";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Profile from './Components/Profile';
import Checkout from './Components/Checkout';
import NotFound from './Components/NotFound';
import Order from './Components/Order';


function App() {
  const [cart, setCart] = useState([])

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header  />
        <Routes>
          <Route path='/' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='*' element={<NotFound/>}/>
          <Route path='/order' element={<Order/>}/>

        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
