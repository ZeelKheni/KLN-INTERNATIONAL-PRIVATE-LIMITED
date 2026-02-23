import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api, { endpoints } from '../../utils/api';

const initialState = {
  items: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

// Fetch all social links
export const fetchSocialLinks = createAsyncThunk(
  'socialLinks/fetchSocialLinks',
  async (_, { rejectWithValue }) => {
    try {
      const response = await endpoints.socialLinks.getAll();
      
      // Handle response structure according to API documentation
      if (response.success && Array.isArray(response.data)) {
        return response.data;
      } else if (Array.isArray(response)) {
        return response;
      } else {
        // If response doesn't match expected structure
        return [];
      }
    } catch (error) {
      return rejectWithValue(error.message || 'Failed to fetch social links');
    }
  }
);

const socialLinksSlice = createSlice({
  name: 'socialLinks',
  initialState,
  reducers: {
    resetStatus: (state) => {
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch all social links
      .addCase(fetchSocialLinks.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchSocialLinks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
        state.error = null;
      })
      .addCase(fetchSocialLinks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { resetStatus } = socialLinksSlice.actions;
export default socialLinksSlice.reducer; 