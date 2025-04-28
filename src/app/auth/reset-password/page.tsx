"use client";
import Navbar from "@/components/common/Navbar";
import VerticalSpacer from "@/components/extras/VerticalSpacer";
import { colors } from "@/lib/constants";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

const page = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <Container maxW={"sm"} p={[4, 8]}>
        <VStack w={"full"} justifyContent={"center"} alignItems={"center"}>
          <Box w={"full"}>
            <Text
              fontSize={"lg"}
              className={"mont-semibold"}
              fontWeight={"semibold"}
              textAlign={"center"}
            >
              Reset Password
            </Text>
            <Text fontSize={"xs"} textAlign={"center"}>
              Create new password for your account
            </Text>

            <VerticalSpacer/>
            
            <FormControl mb={6}>
              <FormLabel fontSize={"xs"} lineHeight={1}>
                Password
              </FormLabel>
              <Input
                size={"sm"}
                type={"text"}
                placeholder={"Enter new password"}
              />
            </FormControl>
            <br />
            <FormControl mb={6}>
              <FormLabel fontSize={"xs"} lineHeight={1}>
                Confirm Password
              </FormLabel>
              <Input
                size={"sm"}
                type={"password"}
                placeholder={"Confirm new password"}
              />
            </FormControl>
            <br />
            <Button
              w={"full"}
              colorScheme="blue"
              fontSize={"sm"}
              fontWeight={"medium"}
              bgColor={colors.loginBtnColor}
              type="submit"
            >
              Update Password
            </Button>
          </Box>
        </VStack>
      </Container>
    </>
  );
};

export default page;
