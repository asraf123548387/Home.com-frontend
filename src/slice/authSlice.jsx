// src/features/auth/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    authenticated: false,
    error: null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      state.authenticated = true;
    },
    clearToken: (state) => {
      state.token = null;
      state.authenticated = false;
    },
    login: (state, action) => {
      state.token = action.payload;
      state.authenticated = true;
    },
    logout: (state) => {
      state.token = null;
      state.authenticated = false;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setToken, clearToken, login, logout, setError } = authSlice.actions;
export default authSlice.reducer;
