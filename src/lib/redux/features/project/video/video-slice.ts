import { API } from "@/lib/api";
import { ProjectVideoType } from "@/lib/types/project";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

// async thunk to fetch video info
export const fetchVideoInfo = createAsyncThunk(
    "video/fetchVideoInfo",
    async (videoId: string, { rejectWithValue }) => {
        try {
            const res = await API.VIDEO.getVideoInfo({ videoId });
            return res.data;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

interface InitialStateType {
    loading: boolean;
    data: ProjectVideoType | null;
    error: any;
}

const initialState: InitialStateType = {
    loading: false,
    data: null,
    error: null,
};

const videoSlice = createSlice({
    name: "video",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchVideoInfo.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchVideoInfo.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchVideoInfo.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default videoSlice.reducer;