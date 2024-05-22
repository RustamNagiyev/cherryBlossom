// authSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: localStorage.getItem("isLoggedIn") === "true",
  userId: localStorage.getItem("uid"),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.userId = action.payload; // Gelen eylem verisi doğrudan userId olarak atanmalı
      state.isLoggedIn = true; // Oturum açıldığında isLoggedIn durumunu true olarak güncelle
      localStorage.setItem("uid", action.payload); // Kullanıcı oturum açtığında kullanıcı kimliğini localStorage'a kaydet
      localStorage.setItem("isLoggedIn", true);
    },
    logout: state => {
      state.isLoggedIn = false; // Oturum kapatıldığında isLoggedIn durumunu false olarak güncelle
      state.userId = null; // Kullanıcı kimliğini temizle
      localStorage.removeItem("isLoggedIn"); // localStorage'tan oturum durumunu temizle
      localStorage.removeItem("uid"); // localStorage'tan kullanıcı kimliğini temizle
    }, 
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;