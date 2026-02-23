import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api, { endpoints } from '../../utils/api';

const initialState = {
  items: [],
  status: 'idle',
  error: null,
};

export const fetchCertificates = createAsyncThunk(
  'certificates/fetchCertificates',
  async (_, { rejectWithValue }) => {
    try {
      const response = await endpoints.certificates.getAll();
      const certificates = Array.isArray(response) ? response : response.data;
      return Array.isArray(certificates) ? certificates : [];
    } catch (error) {
      return rejectWithValue(error.message || 'Failed to fetch certificates');
    }
  }
);

const certificatesSlice = createSlice({
  name: 'certificates',
  initialState,
  reducers: {
    resetStatus: (state) => {
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCertificates.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchCertificates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = Array.isArray(action.payload) ? action.payload : [];
        state.error = null;
      })
      .addCase(fetchCertificates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
        state.items = [];
      });
  },
});

export const { resetStatus } = certificatesSlice.actions;
export default certificatesSlice.reducer; 