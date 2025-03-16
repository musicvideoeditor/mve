import { API } from "@/lib/api";
import { TransactionType } from "@/lib/types/account";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export const fetchTransactions = createAsyncThunk(
  "transactions/fetchTransactions",
  async (_, { rejectWithValue }) => {
    try {
      const res = await API.TRANSACTION.getTransactions();
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

interface InitialStateType {
  transactions: TransactionType[];
  loading?: boolean;
  error: any | undefined;
}

const initialState: InitialStateType = {
  transactions: [],
  loading: false,
  error: null,
};

export const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchTransactions.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.transactions = action.payload;
        }
      )
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.loading = false;
        // @ts-ignore
        state.error = action.payload;
      });
  },
});

export default transactionSlice.reducer;
