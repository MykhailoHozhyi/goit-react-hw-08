import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.goit.global';

export function setToken(token) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export function clearToken() {
  axios.defaults.headers.common.Authorization = '';
}

export const register = createAsyncThunk(
  'auth/register',
  async (formData, thunkAPI) => {
    try {
      console.log('formData: ', formData);
      const response = await axios.post('/users/signup', formData);

      setToken(response.data.token);
      console.log('response: ', response.data);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
