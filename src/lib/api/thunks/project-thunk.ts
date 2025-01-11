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
