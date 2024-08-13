import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
  },
    name:'Token',
    initialState:{
      token:null,
    },
    reducers:{
      addtoToken:(state,action)=>{
        state.token=(action.payload);
      }
    }
});

export const { addToCart, removeItem,addtoToken } = cartSlice.actions;
export default cartSlice.reducer;