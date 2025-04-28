"use client";
import React, { useState } from "react";
import { API } from "../api";
import { FileUploadTypes } from "../types/other";
import axios from "axios";
import { ENDPOINTS } from "../api/endpoints";
import { apiBaseURL, BUNNY } from "../constants";

interface UploadHandlerProps {
  // extends FileUploadTypes
  sessionToken?: string;
  file: File;
  projectName: string;
  username: string;
}

const useFileUpload = () => {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);

  const uploadFile = async (props: UploadHandlerProps) => {
    // if (!props?.sessionToken) {
    //   throw new Error("Invalid session, please refresh this page");
    // }

    try {
      setLoading(true);
      setError(null);

      console.log(props.file);

      // Validate file
      if (!props.file == null) {
        throw new Error("No file provided");
      }

      // Create FormData instance
      const formData = new FormData();

      // Handle both single file and array of files
      const fileArray = props.file;

      formData.append("attachment", props.file);
      // Strapi expects the files under the "files" key
      // fileArray.forEach((file, index) => {
      //   formData.append("files", file);
      // });

      // formData.append("refId", props.entryId);
      // formData.append("ref", props.modelId);
      // formData.append("field", props.field);
      // if (props.path) {
      //   formData.append("path", props.path);
      // }

      // const res = await axios.post(
      //   apiBaseURL + "/api" + ENDPOINTS.MISC.uploadAsset,
      //   formData,
      //   {
      //     headers: {
      //       "Content-Type": "multipart/form-data",
      //       Authorization: "Bearer " + props.sessionToken,
      //     },
      //     onUploadProgress: (event) => {
      //       console.log("Upload Event for file " + props.files[0]?.name)
      //       console.log(event)
      //       // @ts-ignore
      //       setProgress(Math.round((event.loaded / event.total) * 100));
      //     },
      //   }
      // );
      console.log(BUNNY.API_KEY);
      const res = await axios.put(
        ENDPOINTS.MISC.uploadAsset +
          `/${props.projectName}/${props.username}/${props.file.name}`,
        formData,
        {
          headers: {
            "Content-Type": "application/octet-stream",
            AccessKey: BUNNY.API_KEY,
          },
          onUploadProgress: (event) => {
            // @ts-ignore
            setProgress(Math.round((event.loaded / event.total) * 100));
          },
        }
      );
      console.log(res);
      return res;
    } catch (err: any) {
      setError(err.message);
      console.log(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    uploadFile,
    loading,
    progress,
    error,
  };
};

export default useFileUpload;
