import { SignupSchema } from "@/lib/schema/auth-schema";
import { processRequest } from "..";
import * as z from "zod";

export const createAccount = async ({
  data,
}: {
  data: z.infer<typeof SignupSchema>;
}) => {
  try {
    const res = await processRequest({
      method: "post",
      url: "/auth/local/register",
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
      url: "/auth/local",
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
      url: "/join-waitlist",
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
      url: "/join-waitlist",
      body: data,
    });
    return res;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
