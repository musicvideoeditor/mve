import { API } from "@/lib/api";
import { ProjectInfoType } from "@/lib/types/project";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export const fetchProjectInfo = createAsyncThunk(
  "projectInfo/fetchProjectInfo",
  async (documentId: string, { rejectWithValue }) => {
    try {
      const res = await API.PROJECT.getProjectInfo({ id: documentId });
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
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
  error: null,
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
  },
});

export default projectInfoSlice.reducer;
