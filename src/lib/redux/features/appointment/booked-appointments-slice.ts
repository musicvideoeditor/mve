import { API } from "@/lib/api";
import { BookedAppointmentState } from "@/lib/api/types/appointment-types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchBookedAppointments = createAsyncThunk(
  "bookedAppointments/fetchBookedAppointments",
  async (_, { rejectWithValue }) => {
    try {
      const res = await API.APPOINTMENT.getAppointments();
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

interface AppointmentsState {
  loading: boolean;
  appointments: Array<BookedAppointmentState>;
}

const initialState: AppointmentsState = {
  loading: false,
  appointments: [],
};

const appointmentsSlice = createSlice({
  name: "bookedAppointments",
  initialState: initialState,
  reducers: {
    addAppointment: (state, action) => {
      state.appointments.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBookedAppointments.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBookedAppointments.fulfilled, (state, action) => {
        state.loading = false;
        state.appointments = action.payload;
      })
      .addCase(fetchBookedAppointments.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { addAppointment } = appointmentsSlice.actions;
export default appointmentsSlice.reducer;
