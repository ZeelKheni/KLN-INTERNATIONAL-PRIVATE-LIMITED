import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api, { endpoints } from '../../utils/api';

const initialState = {
  items: [],
  currentItem: null,
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

// Fetch all team members
export const fetchTeamMembers = createAsyncThunk(
  'team/fetchTeamMembers',
  async (params, { rejectWithValue }) => {
    try {
      const response = await endpoints.team.getAll(params);
      // Handle both direct array response and response.data containing array
      const teamMembers = Array.isArray(response) ? response : (response.data || []);
      return Array.isArray(teamMembers) ? teamMembers : [];
    } catch (error) {
      return rejectWithValue(error.message || 'Failed to fetch team members');
    }
  }
);

// Fetch a single team member by ID
export const fetchTeamMemberById = createAsyncThunk(
  'team/fetchTeamMemberById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await endpoints.team.getById(id);
      return response.data || null;
    } catch (error) {
      return rejectWithValue(error.message || 'Failed to fetch team member');
    }
  }
);

// Create a new team member
export const createTeamMember = createAsyncThunk(
  'team/createTeamMember',
  async (teamData, { rejectWithValue }) => {
    try {
      const response = await endpoints.team.create(teamData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message || 'Failed to create team member');
    }
  }
);

// Update a team member
export const updateTeamMember = createAsyncThunk(
  'team/updateTeamMember',
  async ({ id, teamData }, { rejectWithValue }) => {
    try {
      const response = await endpoints.team.update(id, teamData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message || 'Failed to update team member');
    }
  }
);

// Delete a team member
export const deleteTeamMember = createAsyncThunk(
  'team/deleteTeamMember',
  async (id, { rejectWithValue }) => {
    try {
      await endpoints.team.delete(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message || 'Failed to delete team member');
    }
  }
);

const teamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {
    resetStatus: (state) => {
      state.status = 'idle';
      state.error = null;
    },
    clearCurrentItem: (state) => {
      state.currentItem = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch all team members
      .addCase(fetchTeamMembers.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchTeamMembers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
        state.error = null;
      })
      .addCase(fetchTeamMembers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      
      // Fetch team member by ID
      .addCase(fetchTeamMemberById.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchTeamMemberById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.currentItem = action.payload;
        state.error = null;
      })
      .addCase(fetchTeamMemberById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      
      // Create team member
      .addCase(createTeamMember.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(createTeamMember.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items.push(action.payload);
        state.error = null;
      })
      .addCase(createTeamMember.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      
      // Update team member
      .addCase(updateTeamMember.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(updateTeamMember.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = state.items.map(item => 
          item._id === action.payload._id ? action.payload : item
        );
        state.currentItem = action.payload;
        state.error = null;
      })
      .addCase(updateTeamMember.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      
      // Delete team member
      .addCase(deleteTeamMember.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(deleteTeamMember.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = state.items.filter(item => item._id !== action.payload);
        state.error = null;
      })
      .addCase(deleteTeamMember.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { resetStatus, clearCurrentItem } = teamSlice.actions;
export default teamSlice.reducer; 