import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api, { endpoints } from '../../utils/api';

const initialState = {
  items: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await endpoints.products.getAll();
      // Handle both direct array response and response.data containing array
      const products = Array.isArray(response) ? response : response.data;
      // Ensure we always return an array, even if empty
      return Array.isArray(products) ? products : [];
    } catch (error) {
      return rejectWithValue(error.message || 'Failed to fetch products');
    }
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    resetStatus: (state) => {
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = Array.isArray(action.payload) ? action.payload : [];
        state.error = null;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
        state.items = [];
      })
  },
});

export const { resetStatus } = productsSlice.actions;
export default productsSlice.reducer;