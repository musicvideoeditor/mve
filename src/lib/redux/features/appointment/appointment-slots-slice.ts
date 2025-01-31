import { API } from "@/lib/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AppointmentSlotState } from "@/lib/api/types/appointment-types";



interface AppointmentSlotsState {
  loading: boolean;
  slots: Array<AppointmentSlotState>;
}

// Create asyncThunk to fetch slots
export const fetchAppointmentSlots = createAsyncThunk(
  "appointmentSlots/fetchAppointmentSlots",
  async (_, { rejectWithValue }) => {
    try {
      const res = await API.APPOINTMENT.getAppointmentSlots();
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState: AppointmentSlotsState = {
  loading: false,
  slots: [],
};

const appointmentSlotsSlice = createSlice({
  name: "appointmentSlots",
  initialState: initialState,
  reducers: {
    setSlots: (state, action) => {
      state.slots = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAppointmentSlots.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAppointmentSlots.fulfilled, (state, action) => {
        state.loading = false;
        state.slots = action.payload;
      })
      .addCase(fetchAppointmentSlots.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default appointmentSlotsSlice.reducer;
