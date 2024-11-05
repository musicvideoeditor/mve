import { Avatar, Box, HStack, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { BsCloudArrowUpFill, BsEyeFill } from "react-icons/bs";
import { IoChatbubbleEllipses } from "react-icons/io5";

interface MemberCardProps {
  permissions: Array<"view" | "upload" | "comment">;
  name: string;
  email: string;
}

const MemberCard = ({ permissions, name, email }: MemberCardProps) => {
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
          <Avatar src="https://bit.ly/dan-abramov" size={"sm"} />
        </Box>
        <Box flex={7}>
          <Text fontSize={"xs"} fontWeight={"semibold"}>
            {name}
          </Text>
          <Text fontSize={"10"}>{email}</Text>
        </Box>
        <Box flex={2}>
          <HStack justifyContent={'flex-end'}>
            {permissions?.includes("view") ? (
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
            ) : null}
          </HStack>
        </Box>
      </HStack>
    </>
  );
};

export default MemberCard;
