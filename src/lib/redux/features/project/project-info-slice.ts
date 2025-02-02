import { API } from "@/lib/api";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProjectInfoType } from "@/lib/types/project";

export const fetchProjectInfo = createAsyncThunk(
  "projectInfo/fetchProjectInfo",
  async (documentId: string, { rejectWithValue }) => {
    try {
      const res = await API.PROJECT.getProjectInfo({ id: documentId });
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error?.message || error);
    }
  }
);

export const updateProjectDescription = createAsyncThunk(
  "projectInfo/updateProjectDescription",
  async (
    { id, description }: { id: string; description: string },
    { rejectWithValue }
  ) => {
    try {
      const res = await API.PROJECT.updateProject({
        id,
        data: { description },
      });
      return description;
    } catch (error: any) {
      return rejectWithValue(error?.message || error);
    }
  }
);

interface InitialStateType {
  loading: boolean;
  projectInfo: Partial<ProjectInfoType>;
  error?: any;
}

const initialState: InitialStateType = {
  loading: false,
  projectInfo: {},
  error: false,
};

const projectInfoSlice = createSlice({
  name: "projectInfo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjectInfo.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProjectInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.projectInfo = action.payload;
      })
      .addCase(fetchProjectInfo.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });

    builder
      .addCase(updateProjectDescription.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateProjectDescription.fulfilled, (state, action) => {
        state.loading = false;
        state.projectInfo.description = action.payload;
      })
      .addCase(updateProjectDescription.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default projectInfoSlice.reducer;
