"use client";
import { Avatar, Box, BoxProps, Icon, Tooltip } from "@chakra-ui/react";
import React from "react";
import { FaLocationPin } from "react-icons/fa6";
import { ImLocation } from "react-icons/im";
interface UserPinProps {
  seek?: BoxProps["left"];
  color?: string;
  message?: string;
}

const UserPin = ({ seek, color, message }: UserPinProps) => {
  return (
    <>
      <Box pos={"absolute"} left={seek || 0} bottom={-2} cursor={"pointer"}>
        <Icon as={FaLocationPin} color={color} fontSize={"32"} p={0} m={0} />
        <Avatar
          size={"xs"}
          pos={"absolute"}
          top={0}
          left={1}
          src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          border={`2px solid ${color}`}
        />
      </Box>
    </>
  );
};

export default UserPin;
