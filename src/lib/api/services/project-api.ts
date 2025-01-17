import { CreateProjectProps } from "@/lib/props/project";
import { processRequest } from "..";

// Get Project List
export const getProjects = async () => {
  try {
    const res = await processRequest({
      method: "get",
      url: "/projects",
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
      url: `/projects/${id}`,
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
      url: "/projects",
      body: data,
    });
    return res;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
