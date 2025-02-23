import getConfig from "next/config";
import { uploadAsset } from "./services/misc-api";
import { getProjectInfo } from "./services/project-api";

export const ENDPOINTS = {
  AUTH: {
    login: "",
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
    removeProjectMember: "/invites",
  },
  INVITE:{
    sendInvite: "/invites",
    getInvite: "/invites",
    getAllInvites: "/invites",
    getProjectInvites: "/invites",
    acceptInvite: "/invites",
    rejectInvite: "/invites",
  },
  VIDEO:{
    getVideoInfo: "/videos",
    getVideoComments: "/comments",
    addVideoComment: "/comments",
  },
  APPOINTMENT:{
    getAppointmentSlots: "/appointment-slots",
    getUnavailableDates: "/unavailable-dates",
    getUnavailableSlots: "/unavailable-slots",
    bookAppointment: "/appointments",
    getAppointments: "/appointments",
  },
  MISC: {
    getHomeConfig: "/home-config",
    uploadAsset: "/upload",
    deleteAsset: "/upload/files",
  }
};
