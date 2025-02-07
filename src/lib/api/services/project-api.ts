import { CreateProjectProps } from "@/lib/props/project";
import { processRequest } from "..";
import { ENDPOINTS } from "../endpoints";
import { ProjectAssetType } from "@/lib/types/project";

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

// Update project
export const updateProject = async ({
  id,
  data,
}: {
  id: string;
  data: Object;
}) => {
  try {
    const res = await processRequest({
      method: "put",
      url: `${ENDPOINTS.PROJECT.updateProject}/${id}`,
      body: { ...data },
    });
    return res;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

// Project Assets APIs

export const createProjectAsset = async ({
  name,
  project,
}: Partial<ProjectAssetType>) => {
  try {
    const res = await processRequest({
      method: "post",
      url: ENDPOINTS.PROJECT.createProjectAsset,
      body: { name, projectId: project?.documentId },
    });
    return res;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

export const getProjectAssets = async ({ id }: { id: string }) => {
  try {
    const res = await processRequest({
      method: "get",
      url: `${ENDPOINTS.PROJECT.getProjectAssets}?projectId=${id}`,
    });
    return res;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

export const deleteProjectAsset = async ({ id }: { id: string }) => {
  try {
    const res = await processRequest({
      method: "delete",
      url: `${ENDPOINTS.PROJECT.deleteProjectAsset}/${id}`,
    });
    return res;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
