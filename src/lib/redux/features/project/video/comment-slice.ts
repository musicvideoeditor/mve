import { API } from "@/lib/api";
import { VideoCommentType } from "@/lib/types/project";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

// Async thunk to fetch comments of a video
export const fetchVideoComments = createAsyncThunk(
  "videoComments/fetchVideoComments",
  async (videoId: string, { rejectWithValue }) => {
    try {
      const res = await API.VIDEO.getVideoComments({ videoId: videoId });
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk to add video comment
export const addVideoComment = createAsyncThunk(
  "videoComments/addVideoComment",
  async (
    { videoId, data }: { videoId: string; data: Object },
    { rejectWithValue }
  ) => {
    try {
      const res = await API.VIDEO.addVideoComment({ videoId, data });
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

interface InitialStateType {
  loading: boolean;
  data: VideoCommentType[];
  error: any;
}

const initialState: InitialStateType = {
  loading: false,
  data: [],
  error: null,
};

const videoCommentsSlice = createSlice({
  name: "videoComments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideoComments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchVideoComments.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchVideoComments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder
      .addCase(addVideoComment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addVideoComment.fulfilled, (state, action) => {
        state.loading = false;
        state.data.push(action.payload);
      })
      .addCase(addVideoComment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default videoCommentsSlice.reducer;