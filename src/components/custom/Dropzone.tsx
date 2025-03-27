"use client";
import {
  Box,
  BoxProps,
  Button,
  Grid,
  GridItem,
  HStack,
  IconButton,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useCallback, useEffect, useState } from "react";
import { FcOpenedFolder } from "react-icons/fc";
import { useDropzone } from "react-dropzone";
import { FiCheck, FiPlus } from "react-icons/fi";
import { LuX } from "react-icons/lu";

interface DropzoneProps extends BoxProps {
  onFilesDrop: (acceptedFiles: File[]) => void;
  uploadStatus?: "pending" | "uploading" | "success" | "failed";
}

const Dropzone = (props: DropzoneProps) => {
  const { onFilesDrop, ...rest } = props;
  const [files, setFiles] = useState<File[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  useEffect(() => {
    if (files.length > 0) {
      if(onFilesDrop) onFilesDrop(files)
    }
  }, [files]);

  useEffect(() => {
    if(props.uploadStatus == "success") {
      setFiles([])
    }

  }, [props.uploadStatus])

  return (
    <>
      <Box
        w={props?.w || ["full", "xs"]}
        py={8}
        px={4}
        rounded={12}
        bgColor={"#FFF"}
      >
        <VStack
          w={"full"}
          h={"full"}
          alignItems={"center"}
          justifyContent={"flex-start"}
          gap={6}
        >
          <Box>
            <Text textAlign={"center"} fontWeight={"semibold"}>
              Upload your files
            </Text>
            <Text
              textAlign={"center"}
              fontSize={"8"}
              fontWeight={"medium"}
              color={"gray.500"}
            >
              Files should be .zip, .eps or .avi
            </Text>
          </Box>
          <Box
            w={"full"}
            rounded={8}
            p={8}
            border={`1px ${isDragActive ? "solid" : "dashed"} ${
              isDragActive ? "blue" : "#ccdeab"
            }`}
            bgColor={isDragActive ? "twitter.50" : "#fafaf7"}
            cursor={"pointer"}
            {...getRootProps()}
          >
            <input
              {...getInputProps()}
              // accept={"application/zip, application/eps, video/avi"}
            />

            <FcOpenedFolder fontSize={36} style={{ margin: "8px auto" }} />
            <Text
              textAlign={"center"}
              fontSize={"8"}
              fontWeight={"medium"}
              color={"gray.500"}
            >
              {isDragActive
                ? "Leave your files here"
                : "Drag and drop your files here"}
            </Text>
          </Box>
        </VStack>
      </Box>
    </>
  );
};

export default Dropzone;
