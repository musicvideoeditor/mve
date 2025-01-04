import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  user: {
    id?: number;
    name?: string;
    username?: string;
    email?: string;
    createdAt?: string;
  } | null;
  isAuthenticated: null | boolean;
}

const initialState: UserState = {
  user: null,
  isAuthenticated: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState["user"]>) => {
      const data = state.user;
      state.user = { ...data, ...action.payload };
      state.isAuthenticated = true;
    },
    removeUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
