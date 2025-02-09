"use client";
import DateFormatter from "@/components/custom/DateFormatter";
import { VideoCommentType } from "@/lib/types/project";
import { Avatar, Box, HStack, IconButton, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { MdReply } from "react-icons/md";

const UserComment = (props: VideoCommentType) => {
  return (
    <>
      <Box mb={8}>
        <HStack alignItems={"center"}>
          <Avatar name={props.author.name} size={"sm"} />
          <Text fontWeight={"medium"} fontSize={"sm"}>
            {props.author.name ?? props.author.username} (
            {new Date(props.createdAt).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
            )
          </Text>
        </HStack>
        <Text fontSize={"xs"} mt={4}>
          <Text as={"span"} color={"purple.400"} fontSize={"xs"} pr={2}>
            {Boolean(props?.minutes) || Boolean(props?.seconds)
              ? `${props?.minutes} : ${props?.seconds}`
              : null}
          </Text>
          {props.message}
        </Text>
        <HStack justifyContent={"flex-end"}>
          <Text fontSize={"xs"} color={"gray.500"}>
            {new Date(props?.createdAt).toLocaleTimeString()}
          </Text>
        </HStack>
        {props?.response ? (
          <HStack w={"full"} justifyContent={"flex-start"} mt={1} pl={2}>
            <Text fontSize={"xs"}>{props?.response}</Text>
            <Text fontSize={"xs"} textAlign={"right"}>
              Replied by Admin
            </Text>
          </HStack>
        ) : null}
      </Box>
    </>
  );
};

export default UserComment;
