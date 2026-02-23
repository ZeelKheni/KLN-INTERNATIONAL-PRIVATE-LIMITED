import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api, { endpoints } from '../../utils/api';

const initialState = {
  items: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const fetchSuppliers = createAsyncThunk(
  'suppliers/fetchSuppliers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await endpoints.suppliers.getAll();
      // Handle both direct array response and response.data containing array
      const suppliers = Array.isArray(response) ? response : response.data;
      // Ensure we always return an array, even if empty
      return Array.isArray(suppliers) ? suppliers : [];
    } catch (error) {
      return rejectWithValue(error.message || 'Failed to fetch suppliers');
    }
  }
);

const suppliersSlice = createSlice({
  name: 'suppliers',
  initialState,
  reducers: {
    resetStatus: (state) => {
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSuppliers.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchSuppliers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = Array.isArray(action.payload) ? action.payload : [];
        state.error = null;
      })
      .addCase(fetchSuppliers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
        state.items = [];
      });
  },
});

export const { resetStatus } = suppliersSlice.actions;
export default suppliersSlice.reducer; 