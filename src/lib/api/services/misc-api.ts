import { FileUploadTypes } from "@/lib/types/other";
import { processRequest } from "..";
import { ENDPOINTS } from "../endpoints";

export const getHomeConfig = async () => {
  try {
    const res = await processRequest({
      method: "get",
      url: ENDPOINTS.MISC.getHomeConfig,
    });
    return res;
  } catch (error: any) {
    throw new Error(error?.message);
  }
}

export const getNotifications = async () => {
  try {
    const res = await processRequest({
      method: "get",
      url: ENDPOINTS.USER.getNotifications,
    });
    return res;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

export const uploadAsset = async (data: FormData) => {
  try {
    const res = await processRequest({
      method: "post",
      url: ENDPOINTS.MISC.uploadAsset,
      body: data,
      hasFiles: true,
      useAbsoluteUrl: true
    });
    return res;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

export const deleteAsset = async ({path, filename}: {path: string, filename: string}) => {
  try {
    const res = await processRequest({
      method: "delete",
      url: ENDPOINTS.MISC.deleteAsset + `/${path}/${filename}`,
      useAbsoluteUrl: true
    });
    return res;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
