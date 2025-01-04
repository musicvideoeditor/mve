import { processRequest } from "..";

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
