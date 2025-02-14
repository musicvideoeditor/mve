import { API } from "@/lib/api";
import { ProjectMemberType } from "@/lib/types/project";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { date } from "zod";

// Async thunk to fetch project members
export const fetchProjectMembers = createAsyncThunk(
  "projectMembers/fetchProjectMembers",
  async (projectId: string, { rejectWithValue }) => {
    try {
      const res = await API.PROJECT.getProjectMembers({ id: projectId });
      return res.data;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.error?.message ?? error.message
      );
    }
  }
);

// Async thunk to add project member
export const addProjectMember = createAsyncThunk(
  "projectMembers/addProjectMember",
  async (
    { projectId, email }: { projectId: string; email: string },
    { rejectWithValue }
  ) => {
    try {
      const res = await API.PROJECT.addProjectMember({ projectId, email });
      return res.data;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.error?.message ?? error.message
      );
    }
  }
);

// Async thunk to remove project member
export const removeProjectMember = createAsyncThunk(
  "projectMembers/removeProjectMember",
  async ({ inviteId }: { inviteId: string }, { rejectWithValue }) => {
    try {
      const res = await API.PROJECT.removeProjectMember({ id: inviteId });
      return res.data;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.error?.message ?? error.message
      );
    }
  }
);

interface InitialStateType {
  loading: boolean;
  data: ProjectMemberType[];
  error: any;
}

const initialState: InitialStateType = {
  loading: false,
  data: [],
  error: null,
};

const projectMemberSlice = createSlice({
  name: "projectMembers",
  initialState: initialState,
  reducers: {
    addInvite: (state, action: PayloadAction<ProjectMemberType>) => {
      state.data.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjectMembers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProjectMembers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchProjectMembers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder
      .addCase(addProjectMember.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addProjectMember.fulfilled, (state, action) => {
        state.loading = false;
        state.data.push(action.payload);
      })
      .addCase(addProjectMember.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder
      .addCase(removeProjectMember.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeProjectMember.fulfilled, (state, action) => {
        state.loading = false;
        state.data = state.data.filter(
          (member: ProjectMemberType) => member.documentId !== action.payload.id
        );
      })
      .addCase(removeProjectMember.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { addInvite } = projectMemberSlice.actions;
export default projectMemberSlice.reducer;