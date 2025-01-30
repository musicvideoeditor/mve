import { processRequest } from "..";
import { ENDPOINTS } from "../endpoints";

export const getAppointmentSlots = async () => {
  try {
    const res = await processRequest({
      method: "get",
      url: ENDPOINTS.APPOINTMENT.getAppointmentSlots,
    });
    return res;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

export const getUnavailableDates = async () => {
  try {
    const res = await processRequest({
      method: "get",
      url: ENDPOINTS.APPOINTMENT.getUnavailableDates,
    });
    return res;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

export const getUnavailableSlots = async ({ date }: { date: string }) => {
  try {
    const res = await processRequest({
      method: "get",
      url: ENDPOINTS.APPOINTMENT.getUnavailableSlots,
      query: date ? { date } : {},
    });
    return res;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

export const bookAppointment = async ({ data }: { data: Object }) => {
  try {
    const res = await processRequest({
      method: "post",
      url: ENDPOINTS.APPOINTMENT.bookAppointment,
      body: data,
    });
    return res;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
