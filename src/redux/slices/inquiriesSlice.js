import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api, { endpoints } from '../../utils/api';

const initialState = {
  items: [],
  status: 'idle',
  error: null,
};

export const createInquiry = createAsyncThunk(
  'inquiries/createInquiry',
  async (inquiryData, { rejectWithValue }) => {
    try {
      const response = await endpoints.inquiries.create(inquiryData);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const inquiriesSlice = createSlice({
  name: 'inquiries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder      
      .addCase(createInquiry.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })      
  },
});

export default inquiriesSlice.reducer; 