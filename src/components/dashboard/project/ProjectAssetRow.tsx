"use client";
import AlertBox from "@/components/custom/AlertBox";
import DateFormatter from "@/components/custom/DateFormatter";
import { deleteProjectAsset } from "@/lib/redux/features/project/project-assets";
import { useAppDispatch } from "@/lib/redux/store";
import { ProjectAssetType } from "@/lib/types/project";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Checkbox,
  HStack,
  Icon,
  Progress,
  Td,
  Text,
  Tr,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { LuFile } from "react-icons/lu";

function calculateSize(size?: number) {
  if (size && size > 0) {
    const sizeInKb = size / 1000;
    const sizeInMb = sizeInKb / 1000;
    if (sizeInKb <= 0.1) return `${size.toFixed(2)} Bytes`;
    if (sizeInKb > 0.1 && sizeInKb < 1000) return `${sizeInKb.toFixed(2)} KB`;
    else return `${sizeInMb.toFixed(2)} MB`;
  }
  return "Invalid Size";
}

const ProjectAssetRow = (props: ProjectAssetType) => {
  const { uploadProgress, approvalStatus, onRemoveFileFromStack } = props;
  const toast = useToast();
  const dispatch = useAppDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);

  async function handleDelete() {
    try {
      setIsLoading(true);
      if (Boolean(props.documentId))
        await dispatch(deleteProjectAsset({ id: props.documentId }));
      else onRemoveFileFromStack();

      onClose();
    } catch (error: any) {
      toast({
        status: "error",
        description: error?.message,
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Tr>
        {/* <Td>
          <Checkbox borderColor={"#BBB"}></Checkbox>
        </Td> */}
        <Td>
          <HStack>
            <Box
              boxSize={8}
              rounded={6}
              border={"1px solid #BBB"}
              display={"grid"}
              placeContent={"center"}
            >
              <LuFile />
            </Box>
            <Box>
              <Text fontSize={"xs"} fontWeight={"semibold"}>
                {props?.name?.slice(0, 10) +
                  (props?.name?.length > 10 ? "..." : "")}
              </Text>
              <Text fontSize={"10"}>
                {calculateSize(props?.assets[0]?.size)}
              </Text>
            </Box>
          </HStack>
        </Td>
        <Td>
          <DateFormatter>{props.createdAt}</DateFormatter>
        </Td>
        <Td fontSize={"xs"}>
          <Badge>{props?.approvalStatus}</Badge>
        </Td>
        <Td>
          <HStack>
            <Avatar
              src={props?.uploadedBy?.avatar?.url}
              name={props?.uploadedBy?.name || props?.uploadedBy?.username}
              size={"sm"}
            />
            <Box>
              <Text fontSize={"xs"} fontWeight={"semibold"}>
                {props?.uploadedBy?.name ?? props?.uploadedBy?.username}
              </Text>
              <Text fontSize={"10"}>{props?.uploadedBy?.email}</Text>
            </Box>
          </HStack>
        </Td>
        <Td textAlign={"center"}>
          {approvalStatus == "uploading" ? (
            <Progress value={uploadProgress} hasStripe />
          ) : approvalStatus == "just uploaded" ? null : (
            <Button
              size={"xs"}
              fontWeight={"medium"}
              border={"1px solid #BBB"}
              variant={"ghost"}
              onClick={onOpen}
            >
              {approvalStatus == "pending upload" ? "REMOVE" : "DELETE"}
            </Button>
          )}
        </Td>
      </Tr>

      {/* Delete confirmation alert */}
      <AlertBox
        title="Delete asset?"
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleDelete}
        isLoading={isLoading}
        theme="delete"
      >
        <Text fontSize={"sm"}>
          Are you sure you want to delete this record? This action is
          irreversible.
        </Text>
      </AlertBox>
    </>
  );
};

export default ProjectAssetRow;
