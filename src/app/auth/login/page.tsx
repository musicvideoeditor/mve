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
        <VStack
          w={"full"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box w={"full"}>
            <Text fontSize={"lg"} className={"mont-semibold"} fontWeight={"semibold"} textAlign={'center'}>
              Welcome Back
            </Text>
            <Text fontSize={"xs"} textAlign={'center'}>Please enter your details</Text>
            <br />
            <br />
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
            <HStack justifyContent={"space-between"} mb={4}>
              <FormControl w={"max-content"}>
                <Checkbox fontSize={"8px"}>
                  Remember Me
                </Checkbox>
              </FormControl>

              <Link href={"/auth/forgot-password"}>
                <Text
                  fontWeight={"semibold"}
                  color={"facebook.500"}
                  fontSize={"xs"}
                >
                  Forgot Password
                </Text>
              </Link>
            </HStack>
            <br />
            <Button
              w={"full"}
              colorScheme="blue"
              fontSize={"sm"}
              fontWeight={"medium"}
              bgColor={colors.loginBtnColor}
            >
              Sign in
            </Button>
            <Button
              mt={4}
              w={"full"}
              variant={"outline"}
              fontSize={"sm"}
              fontWeight={"medium"}
              leftIcon={<FcGoogle />}
            >
              Sign in with Google
            </Button>
            <br />
            <br />
            <Text fontSize={"xs"} textAlign={"center"}>
              Don't have an account?{" "}
              <a
                href="/auth/register"
                style={{ fontWeight: "bold", color: "navy" }}
              >
                Sign Up
              </a>
            </Text>
          </Box>
        </VStack>
      </Container>
    </>
  );
};

export default page;
