import axios from "axios";
import { apiBaseURL } from "../constants";
import { joinWaitlist, login } from "./services/auth-api";
import { getSession } from "next-auth/react";


interface RequestProps {
  method?: "get" | "put" | "post" | "delete" | "patch";
  url: string;
  query?: { [key: string]: any };
  body?: { [key: string]: any };
}

const httpClient = axios.create({
  baseURL: apiBaseURL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const processRequest = async ({
  method = "get",
  url,
  query = {},
  body = {},
}: RequestProps) => {
  try {
    const session = await getSession();

    // @ts-ignore
    const token = session?.accessToken || null;

    const headers = token ? {
      Authorization: `Bearer ${token}`,
    } : {};

    const res = await httpClient.request({
      method: method,
      url: `/api${url}${
        Object.keys(query)?.length >= 1
          ? "?" +
            Object.keys(query)
              .map(
                (key) =>
                  encodeURIComponent(key) + "=" + encodeURIComponent(query[key])
              )
              .join("&")
          : ""
      }`,
      data: body,
      headers
    });
    return res;
  } catch (error: any) {
    console.log(error?.response?.data);
    throw new Error(error?.response?.data?.error?.message || error?.message);
  }
};

export const API = {
  // Auth APIs
  AUTH: {
    login,
  },

  // User APIs
  USER: {

  },

  // Project APIs
};
