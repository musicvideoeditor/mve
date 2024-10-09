import VerticalSpacer from "@/components/extras/VerticalSpacer";
import { colors } from "@/lib/constants";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const page = () => {
  return (
    <>
      <VerticalSpacer />
      <Container maxW={"sm"} p={[4, 8]}>
        <VStack justifyContent={"center"} alignItems={"center"}>
          <Box w={"full"}>
            <Text fontSize={"lg"} fontWeight={"bold"} textAlign={"center"}>
              Welcome
            </Text>
            <Text fontSize={"xs"} textAlign={"center"}>
              Please enter your details
            </Text>
            <br />
            <FormControl mb={6}>
              <FormLabel fontSize={"xs"} lineHeight={1}>
                Name
              </FormLabel>
              <Input placeholder="Your full name" />
            </FormControl>
            <FormControl mb={6}>
              <FormLabel fontSize={"xs"} lineHeight={1}>
                Email
              </FormLabel>
              <Input placeholder="Enter your email" />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel fontSize={"xs"} lineHeight={1}>
                Password
              </FormLabel>
              <Input type="password" />
            </FormControl>
            <br />
            <Button
              w={"full"}
              colorScheme="blue"
              fontSize={"sm"}
              fontWeight={"medium"}
              bgColor={colors.loginBtnColor}
            >
              Sign up
            </Button>
            <Button
              mt={4}
              w={"full"}
              variant={"outline"}
              fontSize={"sm"}
              fontWeight={"medium"}
              leftIcon={<FcGoogle />}
            >
              Sign up with Google
            </Button>
            <br />
            <br />
            <Text fontSize={"xs"} textAlign={"center"}>
              Already have an account?{" "}
              <a
                href="/auth/register"
                style={{ fontWeight: "bold", color: "navy" }}
              >
                Sign In
              </a>
            </Text>
          </Box>
        </VStack>
      </Container>
    </>
  );
};

export default page;
