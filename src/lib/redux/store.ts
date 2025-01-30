import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import userReducer from "./features/user-slice";
import appointmentSlotsReducer from "./features/appointment/appointment-slots-slice";

const appReducer = combineReducers({
  userReducer: userReducer,
  appointmentSlotsReducer: appointmentSlotsReducer
});

export const store = configureStore({
  reducer: appReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
