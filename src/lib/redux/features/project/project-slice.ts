import { API } from "@/lib/api";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProjectsState, SingleProjectState } from "@/lib/types/project";

export const fetchProjects = createAsyncThunk(
  "projects/fetchProjects",
  async (_, { rejectWithValue }) => {
    try {
      const res = await API.PROJECT.getProjects();
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);


const initialState: ProjectsState = {
  loading: false,
  projects: [],
};

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    addProject: (state, action: PayloadAction<SingleProjectState>) => {
      state.projects.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.loading = false;
        state.projects = action.payload;
      })
      .addCase(fetchProjects.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { addProject } = projectSlice.actions;
export default projectSlice.reducer;
