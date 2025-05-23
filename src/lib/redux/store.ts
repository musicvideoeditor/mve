import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import userReducer from "./features/user-slice";
import configReducer from "./features/config-slice";
import projectReducer from "./features/project/project-slice";
import projectInfoReducer from "./features/project/project-info-slice";
import notificationReducer from "./features/notification-slice";
import projectAssetsReducer from "./features/project/project-assets";
import projectMemberReducer from "./features/project/project-members-slice";
import projectInviteReducer from "./features/project/project-invite-slice";
import commentsReducer from "./features/project/video/comment-slice";
import videoReducer from "./features/project/video/video-slice";
import transactionReducer from "./features/account/transaction-slice";
import appointmentSlotsReducer from "./features/appointment/appointment-slots-slice";
import bookedAppointmentsReducer from "./features/appointment/booked-appointments-slice";

const appReducer = combineReducers({
  userReducer: userReducer,
  appointmentSlotsReducer: appointmentSlotsReducer,
  bookedAppointmentsReducer: bookedAppointmentsReducer,
  projectReducer: projectReducer,
  projectInfoReducer: projectInfoReducer,
  notificationReducer: notificationReducer,
  projectAssetsReducer: projectAssetsReducer,
  projectMemberReducer:projectMemberReducer,
  projectInviteReducer: projectInviteReducer,
  commentsReducer: commentsReducer,
  videoReducer: videoReducer,
  transactionReducer: transactionReducer,
  configReducer: configReducer,
});

export const store = configureStore({
  reducer: appReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
