import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      email: null,
    },
    loading: false,
    error: null,

    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  reducers: {},
});

export const authReduser = authSlice.reducer;
