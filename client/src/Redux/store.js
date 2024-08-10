import { configureStore } from "@reduxjs/toolkit";
import cartSlice from '../Redux/cartSlice';

const store=configureStore({
    reducer:{
        cart:cartSlice,
    },
});

export default store;