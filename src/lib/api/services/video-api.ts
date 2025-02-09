import { processRequest } from "..";
import { ENDPOINTS } from "../endpoints";

export const getVideoInfo = async ({ videoId }: { videoId: string }) => {
  try {
    const res = await processRequest({
      method: "get",
      url: ENDPOINTS.VIDEO.getVideoInfo + `/${videoId}`,
    });
    return res;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

export const getVideoComments = async ({ videoId }: { videoId: string }) => {
  try {
    const res = await processRequest({
      method: "get",
      url: ENDPOINTS.VIDEO.getVideoComments + `?videoId=${videoId}`,
    });
    return res;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

export const addVideoComment = async ({
  videoId,
  data,
}: {
  videoId: string;
  data: Object;
}) => {
  try {
    const res = await processRequest({
      method: "post",
      url: ENDPOINTS.VIDEO.addVideoComment,
      body: { videoId, ...data },
    });
    return res;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};