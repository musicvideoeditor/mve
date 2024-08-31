import {
  Avatar,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const ProfileDetails = () => {
  return (
    <>
      <Box
        p={6}
        roundedTopLeft={"48"}
        roundedBottomRight={"48"}
        bgColor={"#FFF"}
        w={["full", "xs"]}
        border={"2px solid #AAA"}
      >
        <VStack w={"full"} gap={4}>
          <Avatar
            name="Dan Abrahmov"
            size={"xl"}
            src="https://bit.ly/dan-abramov"
            mb={4}
          />
          <Text fontWeight={"semibold"}>Krunal Mali</Text>
          <br />
          <FormControl>
            <FormLabel fontSize={"xs"} color={"gray.600"} mb={0}>
              <i>* Email ID</i>
            </FormLabel>
            <Input
              defaultValue={"cinekruz@gmail.com"}
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
          <Button size={"sm"} mt={2} colorScheme="red" px={6}>
            Logout
          </Button>
        </VStack>
      </Box>
    </>
  );
};

export default ProfileDetails;
