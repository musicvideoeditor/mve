import { getProjectInfo } from "./services/project-api";

export const ENDPOINTS = {
  AUTH: {
    login: "",
  },
  USER: {

  },
  PLAN: {
    getPlans: "/plans",
  },
  PROJECT: {
    createProject: "/projects",
    getProjectInfo: `/projects`,
    getProjects: "/projects",
  },
  APPOINTMENT:{
    getAppointmentSlots: "/appointment-slots",
    getUnavailableDates: "/unavailable-dates",
    getUnavailableSlots: "/unavailable-slots",
    bookAppointment: "/appointments",
    getAppointments: "/appointments",
  }
};
