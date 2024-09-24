// src/store.js

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import favoritesReducer from './favoritesSlice'; // Import the favorites reducer
import authSlice from './authSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorites: favoritesReducer, // Add the favorites reducer
    authSlice
  },
});

export default store;
