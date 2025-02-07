import { API } from "@/lib/api";
import { ProjectAssetType, ProjectVideoType } from "@/lib/types/project";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

// asyncThunk to create project asset
export const addProjectAsset = createAsyncThunk(
  "projectAssets/addProjectAsset",
  async ({ name }: Partial<ProjectAssetType>, { rejectWithValue }) => {
    try {
      const res = await API.PROJECT.createProjectAsset({ name });
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error?.message || error);
    }
  }
);

// Create asyncThunk to fetch assets
export const fetchProjectAssets = createAsyncThunk(
  "projectAssets/fetchProjectAssets",
  async ({ documentId }: { documentId: string }, { rejectWithValue }) => {
    try {
      const res = await API.PROJECT.getProjectAssets({ id: documentId });
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error?.message || error);
    }
  }
);

// Create asyncThunk to delete asset
export const deleteProjectAsset = createAsyncThunk(
  "projectAssets/deleteProjectAsset",
  async ({ id }: { id: string }, { rejectWithValue }) => {
    try {
      const res = await API.PROJECT.deleteProjectAsset({ id });
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error?.message || error);
    }
  }
);

interface ProjectAssetsState {
  loading: boolean;
  data: ProjectAssetType[];
  error?: any;
}

const initialState: ProjectAssetsState = {
  loading: false,
  data: [],
  error: null,
};

const projectAssetsSlice = createSlice({
  name: "projectAssets",
  initialState,
  reducers: {
    addAsset: (state, action: PayloadAction<ProjectAssetType>) => {
      state.data.push(action.payload);
    },
    deleteAsset: (state, action: PayloadAction<string>) => {
      state.data = state.data.filter(
        (asset) => asset.documentId !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjectAssets.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProjectAssets.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchProjectAssets.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder
      .addCase(addProjectAsset.pending, (state) => {
        state.loading = true;
      })
      .addCase(addProjectAsset.fulfilled, (state, action) => {
        state.loading = false;
        state.data.push(action.payload);
      })
      .addCase(addProjectAsset.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder
      .addCase(deleteProjectAsset.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteProjectAsset.fulfilled, (state, action) => {
        state.loading = false;
        state.data = state.data.filter(
          (asset) => asset.documentId !== action.payload
        );
      })
  },
});

export const { addAsset, deleteAsset } = projectAssetsSlice.actions;
export default projectAssetsSlice.reducer;
