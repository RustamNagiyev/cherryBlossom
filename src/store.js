// store.js
import { configureStore } from "@reduxjs/toolkit";
import { loadState, saveState } from "./helpers"; // Import the helper functions
import authReducer from "./authSlice";
import cartReducer from "./cardSlice";

const persistedState = loadState(); // Load state from local storage

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
  },
  preloadedState: persistedState, // Set preloaded state
});

store.subscribe(() => {
  saveState({
    cart: store.getState().cart, // Save only the cart state
  });
});

export default store;
