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
  onUpload: (acceptedFiles: File[]) => void;
  uploadStatus?: "pending" | "uploading" | "success" | "failed";
}

const Dropzone = (props: DropzoneProps) => {
  const { onUpload, ...rest } = props;
  const [files, setFiles] = useState<File[]>([]);
  const [filePreviews, setFilePreviews] = useState<string[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  useEffect(() => {
    if (files.length > 0) {
      // Generate preview URLs of dropped files
      const previews = files.map((file) => {
        if (file.type == "application/zip") return "/icons/zip.png";
        if (file.type == "application/eps") return "/icons/eps.png";
        if (file.type == "video/avi") return "/icons/avi.png";
      });

      // @ts-ignore
      setFilePreviews(previews);
    }
  }, [files]);

  useEffect(() => {
    if(props.uploadStatus == "success") {
      setFiles([])
      setFilePreviews([])
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
              accept={"application/zip, application/eps, video/avi"}
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

          {filePreviews.length > 0 && (
            <Box w={"full"}>
              <Box
                w={"full"}
                p={4}
                rounded={8}
                border={`1px solid #ccdeab`}
                bgColor={"#fafaf7"}
                maxH={"2xs"}
                overflowY={"scroll"}
              >
                <HStack justifyContent={"space-between"} mb={4}>
                  <Text fontSize={"xs"}>{files.length} files selected</Text>
                </HStack>
                <Grid
                  rowGap={8}
                  columnGap={4}
                  templateColumns={["repeat(3,1fr)"]}
                >
                  {filePreviews.map((preview, i) => (
                    <GridItem key={i}>
                      <Box pos={"relative"}>
                        <Image
                          src={preview}
                          alt={`Preview ${i}`}
                          h={12}
                          objectFit={"contain"}
                        />
                        <Button
                          colorScheme="red"
                          pos={"absolute"}
                          top={0}
                          right={0}
                          w={2}
                          h={4}
                          rounded={'full'}
                          fontSize={8}
                          onClick={() => {
                            const newFiles = [...files];
                            newFiles.splice(i, 1);
                            setFiles(newFiles);
                            const newPreviews = [...filePreviews];
                            newPreviews.splice(i, 1);
                            setFilePreviews(newPreviews);
                          }}
                        >DELETE</Button>
                      </Box>
                      {/* File name */}
                      <Text fontSize={"xs"}>
                        {files[i].name?.slice(0, 6)}...
                      </Text>
                    </GridItem>
                  ))}
                </Grid>
              </Box>
            </Box>
          )}
        </VStack>
        <br />
        <HStack justifyContent={"flex-end"}>
          <Button
            leftIcon={<FiCheck />}
            size={"sm"}
            colorScheme="blackAlpha"
            bgColor={"#000"}
            _hover={{ bgColor: "#333" }}
            fontSize={"xs"}
            onClick={() => onUpload(files)}
            disabled={files.length == 0}
            isLoading={props.uploadStatus == "uploading"}
          >
            Upload
          </Button>
        </HStack>
      </Box>
    </>
  );
};

export default Dropzone;
