import { processRequest } from "..";
import { ENDPOINTS } from "../endpoints";

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