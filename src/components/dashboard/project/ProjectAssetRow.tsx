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
  Td,
  Text,
  Tr,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { LuFile } from "react-icons/lu";

const ProjectAssetRow = (props: ProjectAssetType) => {
  const toast = useToast();
  const dispatch = useAppDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);

  async function handleDelete() {
    try {
      setIsLoading(true);
      await dispatch(deleteProjectAsset({ id: props.documentId }));
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
                {props?.name}
              </Text>
              <Text fontSize={"10"}>
                {props?.assets?.length
                  ? `${props?.assets?.length} Files`
                  : "Recently uploaded"}
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
          <Button
            size={"xs"}
            fontWeight={"medium"}
            border={"1px solid #BBB"}
            variant={"ghost"}
            onClick={onOpen}
          >
            Delete
          </Button>
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
