import {createSlice} from '@reduxjs/toolkit';

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        cartItems:[],
        total:0
    },
    reducers:{
        addToCart:(state,action)=>{
            console.log("=> action",action)
            state.cartItems.push(action.payload);
        }
    }
});

export const {addToCart}=cartSlice.actions;
export default cartSlice.reducer;