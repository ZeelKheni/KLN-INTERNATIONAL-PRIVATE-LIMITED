import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api, { endpoints } from '../../utils/api';

const initialState = {
  items: [],
  status: 'idle',
  error: null,
};

export const fetchBrochures = createAsyncThunk(
  'brochures/fetchBrochures',
  async (_, { rejectWithValue }) => {
    try {
      const response = await endpoints.brochures.getAll();
      const brochures = Array.isArray(response) ? response : response.data;
      return Array.isArray(brochures) ? brochures : [];
    } catch (error) {
      return rejectWithValue(error.message || 'Failed to fetch brochures');
    }
  }
);

const brochuresSlice = createSlice({
  name: 'brochures',
  initialState,
  reducers: {
    resetStatus: (state) => {
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBrochures.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchBrochures.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = Array.isArray(action.payload) ? action.payload : [];
        state.error = null;
      })
      .addCase(fetchBrochures.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
        state.items = [];
      });
  },
});

export const { resetStatus } = brochuresSlice.actions;
export default brochuresSlice.reducer; 