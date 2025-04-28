import getConfig from "next/config";
import { uploadAsset } from "./services/misc-api";
import { getProjectInfo } from "./services/project-api";
import { BUNNY } from "../constants";

export const ENDPOINTS = {
  AUTH: {
    login: "/auth/local",
    sendOtp: "/auth-services/send-otp",
    verifyOtp: "/auth-services/verify-otp",
    joinWaitlist: "/join-waitlist",
    forgotPassword: "/auth/forgot-password",
    resetPassword: "/auth/reset-password",
  },
  USER: {
    getNotifications: "/notifications",
  },
  PLAN: {
    getPlans: "/plans",
  },
  PROJECT: {
    createProject: "/projects",
    getProjectInfo: `/projects`,
    getProjects: "/projects",
    updateProject: `/projects`,

    createProjectAsset: "/assets",
    getProjectAssets: "/assets",
    deleteProjectAsset: "/assets",

    getProjectMembers: "/invites",
    addProjectMember: "/invites",
    updateProjectMember: "/project-members",
    removeProjectMember: "/invites",
  },
  INVITE: {
    sendInvite: "/invites",
    getInvite: "/invites",
    getAllInvites: "/invites",
    getProjectInvites: "/invites",
    acceptInvite: "/invites",
    rejectInvite: "/invites",
  },
  VIDEO: {
    getVideoInfo: "/videos",
    getVideoComments: "/comments",
    addVideoComment: "/comments",
  },
  APPOINTMENT: {
    getAppointmentSlots: "/appointment-slots",
    getUnavailableDates: "/unavailable-dates",
    getUnavailableSlots: "/unavailable-slots",
    bookAppointment: "/appointments",
    getAppointments: "/appointments",
  },
  TRANSACTION: {
    getTransactions: "/transactions",
  },
  MISC: {
    getHomeConfig: "/home-config",
    uploadAsset: `https://${BUNNY.HOSTNAME}/${BUNNY.STORAGE_ZONE}`,
    deleteAsset: `https://storage.bunnycdn.com/${BUNNY.STORAGE_ZONE}`, // add trailing PATH and FILENAME (/PATH/FILENAME) in the URL while calling the API
  },
};
