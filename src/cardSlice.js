// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartItems: (state, action) => {
      state.cartItems = action.payload;
    },
    setTotalPrice: (state) => {
      state.totalPrice = 0;
      state.cartItems.length >= 1
        ? state.cartItems.forEach((item) => {
            state.totalPrice += item.price * item.quantity;
          })
        : (state.totalPrice = 0);
    },
    incrementCounter: (state, action) => {
      state.cartItems = state.cartItems.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      state.totalPrice = 0;
      state.cartItems.forEach((item) => {
        state.totalPrice += item.price * item.quantity;
      });
    },
    decrementCounter: (state, action) => {
      state.cartItems = state.cartItems.map((item) =>
        item.id === action.payload && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      state.totalPrice = 0;
      state.cartItems.forEach((item) => {
        state.totalPrice += item.price * item.quantity;
      });
    },
  },
});

export const {
  setCartItems,
  setTotalPrice,
  incrementCounter,
  decrementCounter,
} = cartSlice.actions;
export default cartSlice.reducer;
