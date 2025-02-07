import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "..";
import { CreateProjectProps } from "@/lib/props/project";

// Get project list thunk
export const getProjectList = createAsyncThunk(
  "project/getProjectList",
  async () => {
    const res = await API.PROJECT.getProjects();
    return res.data;
  }
);

// Get project info thunk
export const getProjectInfo = createAsyncThunk(
  "project/getProjectInfo",
  async ({ id }: { id: string }) => {
    const res = await API.PROJECT.getProjectInfo({ id });
    return res.data;
  }
);

// Create Project thunk
export const createProject = createAsyncThunk(
  "project/createProject",
  async ({ data }: { data: CreateProjectProps }) => {
    const res = await API.PROJECT.createProject({ data });
    return res.data;
  }
);


// Create asyncThunk to upload asset
export const uploadAsset = createAsyncThunk(
  "projectAssets/uploadProjectAsset",
  async (
    {
      files,
      entryId,
      modelId,
      field,
      path,
    }: {
      files: File[];
      entryId: string;
      modelId: string;
      field: string;
      path?: string;
    },
    { rejectWithValue }
  ) => {
    try {
      const res = await API.MISC.uploadAsset({
        files,
        entryId: entryId,
        modelId: modelId,
        field,
        path,
      });
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error?.message || error);
    }
  }
);