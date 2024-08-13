import { useState } from "react";
import { useEffect } from "react";  
import axios from "axios";  
import CartCard from "./CartCard";
import { useSelector } from "react-redux";



const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
 const token=useSelector((state)=>state.cart.token)

  useEffect(() => {
    const fetchCartItems = async () => {
      if(token){
        try {
        
          const response = await axios.get("http://localhost:3000/cart/get",{
            
              headers:{
                Authorization:`Bearer ${token}`
              }
            
          });
          console.log("API Response:", response);
          setCartItems(response.data.products || []);
        } catch (err) {
          console.error("Error fetching products:", err);
        }
      }
    
    };

    fetchCartItems();
  }, []);

  return (
    <div className="cart">
      {cartItems.length > 0 ? (
        cartItems.map((product, index) => (
          <CartCard key={index} item={product} />
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

export default Cart;
