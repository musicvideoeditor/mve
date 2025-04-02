"use client";
import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { FaCircle, FaPlus } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import ProjectAssetRow from "./ProjectAssetRow";
import { colors } from "@/lib/constants";
import Dropzone from "@/components/custom/Dropzone";
import { useAppDispatch, useAppSelector } from "@/lib/redux/store";
import {
  addAsset,
  fetchProjectAssets,
} from "@/lib/redux/features/project/project-assets";
import useFileUpload from "@/lib/helpers/useFileUpload";
import { API } from "@/lib/api";
import AlertBox from "@/components/custom/AlertBox";
import { getSession } from "next-auth/react";

const Filters = () => {
  return (
    <>
      <HStack gap={0} border={"1px solid #BBB"} rounded={4} overflow={"hidden"}>
        <Button
          px={4}
          size={"xs"}
          fontWeight={"medium"}
          variant={"ghost"}
          rounded={0}
        >
          View all
        </Button>
        <Button
          px={4}
          size={"xs"}
          fontWeight={"medium"}
          variant={"ghost"}
          borderX={"1px solid #BBB"}
          rounded={"0"}
        >
          Your files
        </Button>
        <Button
          px={4}
          size={"xs"}
          fontWeight={"medium"}
          variant={"ghost"}
          rounded={0}
        >
          Shared files
        </Button>
      </HStack>
    </>
  );
};

const ProjectAssets = ({ projectId }: { projectId: string }) => {
  const ref = useRef(false);

  const user = useAppSelector((state) => state.userReducer.user);
  const { uploadFile, loading, error, progress } = useFileUpload();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const dispatch = useAppDispatch();
  const toast = useToast();

  const [stackedFiles, setStackedFiles] = useState<File[]>([]);
  const [uploadedFilesIndex, setUploadedFilesIndex] = useState<string[]>([]);
  const [uploadingFileIndex, setUploadingFileIndex] = useState<string>("");

  const isLoading = useAppSelector(
    (state) => state.projectAssetsReducer.loading
  );
  const assets = useAppSelector((state) => state.projectAssetsReducer.data);

  useEffect(() => {
    if (ref.current) return;
    dispatch(fetchProjectAssets({ documentId: projectId }));
    ref.current = true;
  }, []);

  useEffect(() => {
    console.log("Uploaded files are");
    console.log(uploadedFilesIndex);
  }, [uploadedFilesIndex]);

  useEffect(() => {
    console.log("Current progress is");
    console.log(progress);
  }, [progress]);

  const handleProjectAssetUpload = async () => {
    onClose();
    const session = await getSession();
    if (!stackedFiles?.length) return;

    for (const file of Array.from(stackedFiles)) {
      try {
        setUploadingFileIndex(file.name);
        const res = await API.PROJECT.createProjectAsset({
          name: file?.name,
          project: { documentId: projectId },
        });
        const assetId = res.data?.id;
        if (res.data.documentId) {
          await uploadFile({
            files: [file],
            entryId: assetId,
            modelId: "api::asset.asset",
            field: "assets",
            sessionToken: session?.accessToken,
            path: projectId + "/" + user?.username + "/"
          });
        }
        setUploadedFilesIndex((prev) => [...prev, file?.name]);
        setUploadingFileIndex("");
      } catch (error: any) {
        toast({
          status: "error",
          description: error?.message,
        });
      }
    }
  };

  return (
    <>
      <Stack
        direction={["column", "row"]}
        alignItems={"flex-start"}
        gap={4}
        mb={8}
      >
        <Dropzone
          onFilesDrop={(files) =>
            setStackedFiles((prev) => [...prev, ...files])
          }
        />

        <Box
          w={["full", "80%"]}
          px={4}
          py={6}
          border={"1px solid #666"}
          rounded={8}
        >
          <HStack justifyContent={"space-between"} mb={4} flexWrap={'wrap'}>
            <Box>
              <Text fontWeight={"semibold"} fontSize={"sm"}>
                Attached files
              </Text>
              <Text fontWeight={"medium"} fontSize={"10"}>
                Files and assets that have been attached to this project
              </Text>
            </Box>

            <InputGroup w={["full", "2xs"]} border={"1px solid #DDD"} rounded={8}>
              <InputLeftElement children={<FiSearch />} />
              <Input placeholder="Search" pl={8} fontSize={"sm"} />
            </InputGroup>
          </HStack>

          <HStack
            mb={6}
            p={3}
            bgColor={"#e3e3e3"}
            justifyContent={"space-between"}
            overflow={"scroll"}
          >
            <Filters />
          </HStack>

          <TableContainer h={"2xs"} overflowY={"scroll"}>
            <Table size={"sm"} colorScheme="teal">
              <Thead>
                <Tr>
                  {/* <Th>
                    <Checkbox borderColor={"#BBB"}></Checkbox>
                  </Th> */}
                  <Th fontSize={"10"}>File name</Th>
                  <Th fontSize={"10"}>Date uploaded</Th>
                  <Th fontSize={"10"}>Approval Status</Th>
                  <Th fontSize={"10"}>Uploaded by</Th>
                  <Th fontSize={"10"}></Th>
                </Tr>
              </Thead>
              {isLoading ? (
                <>
                  <CircularProgress isIndeterminate color="orange" />
                  <Text fontSize={"sm"}>Loading...</Text>
                </>
              ) : null}
              <Tbody>
                {stackedFiles?.map((item, key) => (
                  <ProjectAssetRow
                    key={key}
                    approvalStatus={
                      uploadingFileIndex == item.name
                        ? "uploading"
                        : uploadedFilesIndex.includes(item.name)
                        ? "just uploaded"
                        : "pending upload"
                    }
                    assets={[
                      {
                        name: item?.name || "No name",
                        url: URL.createObjectURL(item) || "#",
                        // @ts-ignore
                        size: item?.size || "No size",
                      },
                    ]}
                    name={item?.name || "No name"}
                    project={{ documentId: projectId }}
                    documentId=""
                    onRemoveFileFromStack={() => {
                      // remove file from stackedFiles
                      const newStackedFiles = stackedFiles.filter(
                        (file) => file.name !== item.name
                      );
                      setStackedFiles(newStackedFiles);
                    }}
                    uploadProgress={
                      uploadingFileIndex == item.name
                        ? progress
                        : // : uploadedFilesIndex.includes(item.name)
                          // ? 100
                          0
                    }
                    uploadedBy={{
                      // @ts-ignore
                      email: user?.email,
                      // @ts-ignore
                      username: user?.username,
                      name: user?.name,
                      avatar: { url: "#" },
                    }}
                  />
                ))}

                {assets.map((asset) => (
                  <ProjectAssetRow key={asset.documentId} {...asset} />
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Stack>

      <HStack justifyContent={["center", "flex-end"]}>
        {/* Show this button if any asset is in "reviewing" status */}
        {stackedFiles?.length > 0 && (
          <Box>
            <Button
              size={"lg"}
              rounded={"full"}
              colorScheme="orange"
              bgColor={colors.orange}
              boxShadow={"-4px 4px #000"}
              px={16}
              onClick={onOpen}
            >
              Start Uploading
            </Button>
          </Box>
        )}
      </HStack>
      <br />
      <br />

      <AlertBox
        title="Start Upload?"
        isOpen={isOpen}
        onClose={onClose}
        theme="success"
        primaryCtaLabel="Start Upload"
        onSubmit={handleProjectAssetUpload}
      >
        <Text>
          Upload may take some time depending upon your network speed and files
          size. Please don't close the dashboard while the files are being
          uploaded
        </Text>
      </AlertBox>
    </>
  );
};

export default ProjectAssets;
