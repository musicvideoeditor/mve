import { processRequest } from "..";
import { ENDPOINTS } from "../endpoints";

export const sendInvite = async ({projectId, email}:{projectId:string, email:string}) =>{
    try {
        const res = await processRequest({
            method: "post",
            url: ENDPOINTS.INVITE.sendInvite,
            body: { projectId, email },
        });
        return res;
    } catch (error: any) {
        throw new Error(error?.message);
    }
}

export const getInvite = async ({inviteId}:{inviteId: string}) => {
    try {
        const res = await processRequest({
            method: "get",
            url: ENDPOINTS.INVITE.getAllInvites + `/${inviteId}`,
        });
        return res;
    } catch (error: any) {
        throw new Error(error?.message);
    }
};

export const getAllInvites = async () => {
    try {
        const res = await processRequest({
            method: "get",
            url: ENDPOINTS.INVITE.getAllInvites,
        });
        return res;
    } catch (error: any) {
        throw new Error(error?.message);
    }
};

export const getProjectInvites = async ({ projectId }: { projectId: string }) => {
    try {
        const res = await processRequest({
            method: "get",
            url: `${ENDPOINTS.INVITE.getProjectInvites}?projectId=${projectId}`,
        });
        return res;
    } catch (error: any) {
        throw new Error(error?.message);
    }
};

export const acceptInvite = async ({ id }: { id: string }) => {
    try {
        const res = await processRequest({
            method: "put",
            url: `${ENDPOINTS.INVITE.acceptInvite}/${id}`,
        });
        return res;
    } catch (error: any) {
        throw new Error(error?.message);
    }
};

export const rejectInvite = async ({ id }: { id: string }) => {
    try {
        const res = await processRequest({
            method: "delete",
            url: `${ENDPOINTS.INVITE.rejectInvite}/${id}`,
        });
        return res;
    } catch (error: any) {
        throw new Error(error?.message);
    }
};