"use client";
import { useAppSelector } from "@/lib/redux/store";
import {
  Avatar,
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { signOut } from "next-auth/react";

const ProfileDetails = () => {
  const user = useAppSelector((state) => state.userReducer.user);

  return (
    <>
      <Box
        p={6}
        roundedTopLeft={[24, "48"]}
        roundedBottomRight={[24, "48"]}
        roundedTopRight={[24, 0]}
        roundedBottomLeft={[24, 0]}
        bgColor={["transparent", "#FFF"]}
        w={["full", "xs"]}
        border={"2px solid #AAA"}
      >
        <HStack alignItems={"center"} justifyContent={"center"}>
          <Avatar
            name={user?.name}
            size={"xl"}
            src="https://bit.ly/dan-abramov"
            mb={4}
          />
        </HStack>
        <Text
          fontWeight={"semibold"}
          className="mont-semibold"
          textAlign={"center"}
        >
          {user?.name}
        </Text>
        <Text
          fontWeight={"semibold"}
          className="mont-semibold"
          color={"whatsapp.500"}
          textAlign={"center"}
        >
          PROFILE DETAILS
        </Text>
        <br />
        <VStack w={"full"} gap={4}>
          <FormControl>
            <FormLabel fontSize={"xs"} color={"gray.600"} mb={0}>
              <i>* Email ID</i>
            </FormLabel>
            <Input
              defaultValue={user?.email}
              variant={"unstyled"}
              fontSize={"sm"}
              fontWeight={"semibold"}
            />
          </FormControl>
          <FormControl>
            <FormLabel fontSize={"xs"} color={"gray.600"} mb={0}>
              <i>* Phone No.</i>
            </FormLabel>
            <Input
              defaultValue={"+91 1234567890"}
              variant={"unstyled"}
              fontSize={"sm"}
              fontWeight={"semibold"}
            />
          </FormControl>
          <FormControl>
            <FormLabel fontSize={"xs"} color={"gray.600"} mb={0}>
              <i>* DoB</i>
            </FormLabel>
            <Input
              defaultValue={"01 Jan 2001"}
              variant={"unstyled"}
              fontSize={"sm"}
              fontWeight={"semibold"}
            />
          </FormControl>
          <FormControl>
            <FormLabel fontSize={"xs"} color={"gray.600"} mb={0}>
              <i>* Post</i>
            </FormLabel>
            <Input
              defaultValue={"Video Editor"}
              variant={"unstyled"}
              fontSize={"sm"}
              fontWeight={"semibold"}
            />
          </FormControl>
          <Button
            size={"sm"}
            mt={2}
            colorScheme="red"
            px={6}
            onClick={() => signOut()}
          >
            Logout
          </Button>
        </VStack>
      </Box>
    </>
  );
};

export default ProfileDetails;
