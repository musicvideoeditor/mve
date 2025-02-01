import { API } from "@/lib/api";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

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

interface SingleProjectState {
  id?: number;
  documentId: string;
  name: string;
  description?: string;
  status?: "draft" | "published" | "archived";
  thumbnail?: { url: string };
  videosCount?: number;
  createdAt?: string;
}

interface ProjectsState {
  loading: boolean;
  projects: Array<SingleProjectState>;
}

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
