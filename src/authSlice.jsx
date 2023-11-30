// src/features/auth/authSlice.js
import { createSlice } from '@reduxjs/toolkit';
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    error: null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
   
  },
});

export const { setToken, setError } = authSlice.actions;
export default authSlice.reducer;