import { API } from "@/lib/api";
import { FaqType, HomeConfigType, PlanType, PortfolioType } from "@/lib/types/other";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

// Async thunk to fetch home config
export const fetchHomeConfig = createAsyncThunk(
  "config/fetchHomeConfig",
  async (_, { rejectWithValue }) => {
    try {
      const res = await API.MISC.getHomeConfig();
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

interface ConfigType {
  loading: boolean;
  data?: {
    config: HomeConfigType;
    faqs: FaqType[];
    portfolio: PortfolioType[];
    plans: PlanType[];
  };
  error: any;
}

const initialState: ConfigType = {
  loading: true,
  error: null,
};

const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomeConfig.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHomeConfig.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchHomeConfig.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default configSlice.reducer;
