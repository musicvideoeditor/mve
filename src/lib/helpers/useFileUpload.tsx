import React, { useState } from "react";
import { API } from "../api";
import { FileUploadTypes } from "../types/other";

const useFileUpload = () => {
  const [loading, setLoading] = useState(false);
  //   const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);

  const uploadFile = async (props: FileUploadTypes) => {
    
    try {
      setLoading(true);
      setError(null);

      console.log(props);

      // Validate file
      if (!props.files.length) {
        throw new Error("No file provided");
      }

      
      // Create FormData instance
      const formData = new FormData();

      // Handle both single file and array of files
      const fileArray = Array.isArray(props.files) ? props.files : [props.files];
      
      // Strapi expects the files under the "files" key
      fileArray.forEach((file, index) => {
        formData.append('files', file);
      });

      formData.append("refId", props.entryId);
      formData.append("ref", props.modelId);
      formData.append("field", props.field);
      if (props.path) {
        formData.append("path", props.path);
      }

      console.log(formData);
      const res = await API.MISC.uploadAsset(formData);

      return res;
    } catch (err: any) {
      setError(err.message);
      console.log(err)
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    uploadFile,
    loading,
    // progress,
    error,
  };
};

export default useFileUpload;
