"use client";
import { API } from "@/lib/api";
import { storageBaseUrl } from "@/lib/constants";
import {
  Avatar,
  Box,
  HStack,
  IconButton,
  Switch,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BsCloudArrowUpFill, BsEyeFill } from "react-icons/bs";
import { FiClock } from "react-icons/fi";
import { IoChatbubbleEllipses } from "react-icons/io5";

interface MemberCardProps {
  documentId: string;
  permissions: Array<"view" | "upload" | "comment">;
  name: string;
  email: string;
  avatar?: { url: string };
  isConfirmed?: boolean;
  isBlocked?: boolean;
}

const MemberCard = ({
  permissions,
  name,
  email,
  avatar,
  documentId,
  isBlocked,
  isConfirmed,
}: MemberCardProps) => {
  const toast = useToast();

  async function toggleMemberStatus(status: boolean) {
    try {
      await API.PROJECT.updateProjectMember({
        id: documentId,
        data: { data: { isBlocked: status } },
      });
      toast({
        status: "success",
        description: "Member status updated successfully",
      });
    } catch (error: any) {
      toast({
        status: "error",
        description: error?.message,
      });
    }
  }

  return (
    <>
      <HStack
        p={2}
        rounded={6}
        w={"full"}
        alignItems={"center"}
        justifyContent={"flex-start"}
        cursor={"pointer"}
        _hover={{ bgColor: "gray.100" }}
      >
        <Box flex={1}>
          <Avatar
            src={avatar?.url ? storageBaseUrl + avatar?.url : "/avatar.png"}
            size={"sm"}
          />
        </Box>
        <Box flex={7}>
          <Text fontSize={"xs"} fontWeight={"semibold"}>
            {name}
          </Text>
          <Text fontSize={"10"}>{email}</Text>
        </Box>
        <Box flex={2}>
          <HStack justifyContent={"flex-end"}>
            {/* {permissions?.includes("view") ? (
              <IconButton
                aria-label="view"
                size={"xs"}
                rounded={"full"}
                icon={<BsEyeFill />}
              />
            ) : null}
            {permissions?.includes("upload") ? (
              <IconButton
                aria-label="upload"
                size={"xs"}
                rounded={"full"}
                icon={<BsCloudArrowUpFill />}
              />
            ) : null}
            {permissions?.includes("comment") ? (
              <IconButton
                aria-label="comment"
                size={"xs"}
                rounded={"full"}
                icon={<IoChatbubbleEllipses />}
              />
            ) : null} */}

            {isConfirmed ? (
              <Switch
                defaultChecked={!isBlocked}
                onChange={(e) => {
                  toggleMemberStatus(!e.target.checked);
                }}
              />
            ) : (
              <FiClock />
            )}
          </HStack>
        </Box>
      </HStack>
    </>
  );
};

export default MemberCard;
