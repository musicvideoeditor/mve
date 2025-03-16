
import { processRequest } from "..";
import { ENDPOINTS } from "../endpoints";

export const getTransactions = async () => {
    try {
        const res = await processRequest({
            method: "get",
            url: ENDPOINTS.TRANSACTION.getTransactions,
        });
        return res;
    } catch (error: any) {
        throw new Error(error?.message);
    }
};