import axios from "axios";
import { apiBaseURL } from "../constants";
import { joinWaitlist, login } from "./services/auth-api";
import { getSession } from "next-auth/react";
import {
  createProject,
  createProjectAsset,
  deleteProjectAsset,
  getProjectAssets,
  getProjectInfo,
  getProjects,
  updateProject,
} from "./services/project-api";
import {
  bookAppointment,
  getAppointments,
  getAppointmentSlots,
  getUnavailableDates,
  getUnavailableSlots,
} from "./services/appointment-api";
import { getNotifications, uploadAsset } from "./services/misc-api";
import { addVideoComment, getVideoComments, getVideoInfo } from "./services/video-api";

interface RequestProps {
  method?: "get" | "put" | "post" | "delete" | "patch";
  url: string;
  query?: { [key: string]: any };
  body?: { [key: string]: any };
  hasFiles?: boolean;
}

const httpClient = axios.create({
  baseURL: apiBaseURL,
  withCredentials: true,
});

export const processRequest = async ({
  method = "get",
  url,
  query = {},
  body = {},
  hasFiles = false,
}: RequestProps) => {
  try {
    const session = await getSession();

    // @ts-ignore
    const token = session?.accessToken || null;

    const headers = token
      ? {
          Authorization: `Bearer ${token}`,
          "Content-Type": hasFiles ? "multipart/form-data" : "application/json",
        }
      : {};

    const res = await httpClient.request({
      method: method,
      url: `/api${url}${
        Object.keys(query)?.length >= 1
          ? "?" +
            Object.keys(query)
              .map(
                (key) =>
                  encodeURIComponent(key) + "=" + encodeURIComponent(query[key])
              )
              .join("&")
          : ""
      }`,
      data: body,
      headers,
    });
    return res;
  } catch (error: any) {
    console.log(error?.response?.data);
    throw new Error(error?.response?.data?.error?.message || error?.message);
  }
};

export const API = {
  // Auth APIs
  AUTH: {
    login,
  },

  // User APIs
  USER: {
    getNotifications,
  },

  // Project APIs
  PROJECT: {
    getProjects,
    getProjectInfo,
    createProject,
    updateProject,

    createProjectAsset,
    getProjectAssets,
    deleteProjectAsset,
  },
  VIDEO: {
    getVideoInfo,
    getVideoComments,
    addVideoComment,
  },
  APPOINTMENT: {
    getAppointmentSlots,
    getUnavailableDates,
    getUnavailableSlots,
    getAppointments,
    bookAppointment,
  },
  MISC: {
    uploadAsset,
  },
};
