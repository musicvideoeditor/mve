import { CreateProjectProps } from "@/lib/props/project";
import { processRequest } from "..";
import { ENDPOINTS } from "../endpoints";

// Get Project List
export const getProjects = async () => {
  try {
    const res = await processRequest({
      method: "get",
      url: ENDPOINTS.PROJECT.getProjects,
    });
    return res;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

// Get Project Info
export const getProjectInfo = async ({ id }: { id: string }) => {
  try {
    const res = await processRequest({
      method: "get",
      url: `${ENDPOINTS.PROJECT.getProjectInfo}/${id}`,
    });
    return res;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

// Create new project
export const createProject = async ({ data }: { data: CreateProjectProps }) => {
  try {
    const res = await processRequest({
      method: "post",
      url: ENDPOINTS.PROJECT.createProject,
      body: data,
    });
    return res;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
