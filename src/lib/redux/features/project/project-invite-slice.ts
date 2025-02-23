import { API } from "@/lib/api";
import { InviteType } from "@/lib/types/project";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

// Async thunk to fetch project invites
export const fetchProjectInvites = createAsyncThunk(
  "projectInvites/fetchProjectInvites",
  async (projectId: string, { rejectWithValue }) => {
    try {
      const res = await API.INVITE.getProjectInvites({ projectId: projectId });
      return res.data;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.error?.message ?? error.message
      );
    }
  }
);

// Async thunk to fetch all invites
export const fetchAllInvites = createAsyncThunk(
  "projectInvites/fetchAllInvites",
  async (_, { rejectWithValue }) => {
    try {
      const res = await API.INVITE.getAllInvites();
      return res.data;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.error?.message ?? error.message
      );
    }
  }
);

// Async thunk to send an invite
export const sendInvite = createAsyncThunk(
  "projectInvites/createInvite",
  async (
    { projectId, email }: { projectId: string; email: string },
    { rejectWithValue }
  ) => {
    try {
      const res = await API.INVITE.sendInvite({ projectId, email });
      return res.data;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.error?.message ?? error.message
      );
    }
  }
);

// Async thunk to accept an invite
export const acceptInvite = createAsyncThunk(
  "projectInvites/acceptInvite",
  async ({ id }: { id: string }, { rejectWithValue }) => {
    try {
      const res = await API.INVITE.acceptInvite({ id });
      return res.data;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.error?.message ?? error.message
      );
    }
  }
);

// Async thunk to reject an invite
export const rejectInvite = createAsyncThunk(
  "projectInvites/rejectInvite",
  async ({ id }: { id: string }, { rejectWithValue }) => {
    try {
      const res = await API.INVITE.rejectInvite({ id });
      return res.data;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.error?.message ?? error.message
      );
    }
  }
);

interface InitialStateType {
  loading: boolean;
  data: InviteType[];
  error: any;
}

const initialState: InitialStateType = {
  loading: false,
  data: [],
  error: null,
};

const projectInviteSlice = createSlice({
  name: "projectInvites",
  initialState,
  reducers: {
    addInvite: (state, action: PayloadAction<InviteType>) => {
      state.data.push(action.payload);
    },
    removeInvite: (state, action: PayloadAction<string>) => {
      state.data = state.data.filter(
        (invite) => invite.documentId !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjectInvites.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchProjectInvites.fulfilled,
        (state, action: PayloadAction<InviteType[]>) => {
          state.loading = false;
          state.data = action.payload;
          state.error = null;
        }
      )
      .addCase(fetchProjectInvites.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder
      .addCase(fetchAllInvites.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchAllInvites.fulfilled,
        (state, action: PayloadAction<InviteType[]>) => {
          state.loading = false;
          state.data = action.payload;
          state.error = null;
        }
      )
      .addCase(fetchAllInvites.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder
      .addCase(sendInvite.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        sendInvite.fulfilled,
        (state, action: PayloadAction<InviteType>) => {
          state.loading = false;
          state.data.push(action.payload);
          state.error = null;
        }
      )
      .addCase(sendInvite.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder
      .addCase(acceptInvite.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        acceptInvite.fulfilled,
        (state, action: PayloadAction<InviteType>) => {
          state.loading = false;
          state.data.push(action.payload);
          state.error = null;
        }
      )
      .addCase(acceptInvite.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder
      .addCase(rejectInvite.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        rejectInvite.fulfilled,
        (state, action: PayloadAction<InviteType>) => {
          state.loading = false;
          state.data.push(action.payload);
          state.error = null;
        }
      )
      .addCase(rejectInvite.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { addInvite, removeInvite } = projectInviteSlice.actions;
export default projectInviteSlice.reducer;
