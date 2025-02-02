import { API } from "@/lib/api";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

// Fetch notifications
export const fetchNotifications = createAsyncThunk(
    "notifications/fetchNotifications",
    async (_, { rejectWithValue }) => {
        try {
            const res = await API.USER.getNotifications();
            return res.data;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

interface NotificationState{
    title: string;
    description?: string;
    ctaLabel?: string;
    ctaUrl: string
}

const initialState = {
    loading: false,
    data: [] as NotificationState[],
    error: false,
}

const notificationSlice = createSlice({
    name: "notifications",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchNotifications.pending, (state) => {
            state.loading = true;
            state.data = [];
            state.error = false;
        });
        builder.addCase(fetchNotifications.fulfilled, (state, action: PayloadAction<NotificationState[]>) => {
            state.loading = false;
            state.data = action.payload;
            state.error = false;
        });
        builder.addCase(fetchNotifications.rejected, (state) => {
            state.loading = false;
            state.data = [];
            state.error = true;
        });
    }
});

export default notificationSlice.reducer;
