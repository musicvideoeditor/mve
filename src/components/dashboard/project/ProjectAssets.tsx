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
  const [uploadStatus, setUploadStatus] = useState<
    "pending" | "uploading" | "success" | "failed"
  >("pending");
  const { uploadFile, loading, error } = useFileUpload();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const dispatch = useAppDispatch();
  const toast = useToast();

  const isLoading = useAppSelector(
    (state) => state.projectAssetsReducer.loading
  );
  const assets = useAppSelector((state) => state.projectAssetsReducer.data);

  useEffect(() => {
    if (ref.current) return;
    dispatch(fetchProjectAssets({ documentId: projectId }));
    ref.current = true;
  }, []);

  const handleProjectAssetUpload = async (files: File[]) => {
    if (!files.length) return;
    setUploadStatus("uploading");
    try {
      const res = await API.PROJECT.createProjectAsset({
        name: files[0]?.name,
        project: { documentId: projectId },
      });
      dispatch(addAsset(res.data));
      const assetId = res.data?.id;
      if (res.data.documentId) {
        await uploadFile({
          files: files,
          entryId: assetId,
          modelId: "api::asset.asset",
          field: "assets",
        });
        setUploadStatus("success");
      }
    } catch (error: any) {
      setUploadStatus("failed");
      toast({
        status: "error",
        description: error?.message,
      });
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
          onUpload={(files) => handleProjectAssetUpload(files)}
          uploadStatus={uploadStatus}
        />

        <Box
          w={["full", "80%"]}
          px={4}
          py={6}
          border={"1px solid #666"}
          rounded={8}
        >
          <HStack justifyContent={"space-between"} mb={4}>
            <Box>
              <Text fontWeight={"semibold"} fontSize={"sm"}>
                Attached files
              </Text>
              <Text fontWeight={"medium"} fontSize={"10"}>
                Files and assets that have been attached to this project
              </Text>
            </Box>

            <InputGroup w={"2xs"} border={"1px solid #DDD"} rounded={8}>
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
            {/* <HStack>
              <Button
                size={"xs"}
                fontWeight={"medium"}
                border={"1px solid #BBB"}
                variant={"ghost"}
                leftIcon={<FaCircle fontSize={"6"} color="#16a160" />}
                rightIcon={<IoClose color={"#999"} />}
              >
                Jan 1 - Jan 31
              </Button>
            </HStack> */}
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
                <VStack
                  w={"full"}
                  h={"sm"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <CircularProgress isIndeterminate color="orange" />
                  <Text fontSize={"sm"}>Loading...</Text>
                </VStack>
              ) : null}
              <Tbody>
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
        {assets.some((asset) => asset.approvalStatus === "reviewing") && (
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
              Submit for Review
            </Button>
          </Box>
        )}
      </HStack>
      <br />
      <br />

      <AlertBox
        title="Under Review"
        isOpen={isOpen}
        onClose={onClose}
        theme="info"
      >
        <Text>
          Project assets are currently under review. We will notify you once we
          approve them.
        </Text>
      </AlertBox>
    </>
  );
};

export default ProjectAssets;
