import { SignupSchema } from "@/lib/schema/auth-schema";
import { processRequest } from "..";
import * as z from "zod";
import { ENDPOINTS } from "../endpoints";

export const createAccount = async ({
  data,
}: {
  data: z.infer<typeof SignupSchema>;
}) => {
  try {
    const res = await processRequest({
      method: "post",
      url: ENDPOINTS.AUTH.sendOtp,
      body: {
        ...data,
        username: data?.email?.split("@")[0],
      },
    });
    return res;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

export const login = async ({ data }: { data: Object }) => {
  try {
    const res = await processRequest({
      method: "post",
      url: ENDPOINTS.AUTH.login,
      body: { ...data },
    });
    return res;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

export const verifyOtp = async ({ data }: { data: Object }) => {
  try {
    const res = await processRequest({
      method: "post",
      url: ENDPOINTS.AUTH.verifyOtp,
      body: { ...data },
    });
    return res;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

export const joinWaitlist = async ({ data }: { data: Object }) => {
  try {
    const res = await processRequest({
      method: "post",
      url: ENDPOINTS.AUTH.joinWaitlist,
      body: data,
    });
    return res;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

export const forgotPassword = async ({ data }: { data: Object }) => {
  try {
    const res = await processRequest({
      method: "post",
      url: ENDPOINTS.AUTH.forgotPassword,
      body: data,
    });
    return res;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

export const resetPassword = async ({ data }: { data: Object }) => {
  try {
    const res = await processRequest({
      method: "post",
      url: ENDPOINTS.AUTH.resetPassword,
      body: data,
    });
    return res;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
