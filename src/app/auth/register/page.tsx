"use client";
import Navbar from "@/components/common/Navbar";
import VerticalSpacer from "@/components/extras/VerticalSpacer";
import { API } from "@/lib/api";
import { colors } from "@/lib/constants";
import { SignupSchema } from "@/lib/schema/auth-schema";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import React, { Suspense, useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff } from "react-icons/fi";
import * as z from "zod";

const SignupForm = () => {
  const params = useSearchParams();
  const callback = params.get("callback");
  const toast = useToast();

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<z.infer<typeof SignupSchema>>({
    resolver: zodResolver(SignupSchema),
  });

  async function handleRegister(v: z.infer<typeof SignupSchema>) {
    setIsLoading(true);
    try {
      const res = await API.AUTH.createAccount({ data: v });
      toast({
        status: "success",
        description: "Registration successful",
      });
      window.location.href = "/auth/login";
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
      <Navbar />
      <VerticalSpacer />
      <Container maxW={"sm"} p={[4, 8]}>
        <form method="post" onSubmit={handleSubmit(handleRegister)}>
          <VStack justifyContent={"center"} alignItems={"center"}>
            <Box w={"full"}>
              <Text fontSize={"lg"} fontWeight={"bold"} textAlign={"center"}>
                Welcome
              </Text>
              <Text fontSize={"xs"} textAlign={"center"}>
                Please enter your details
              </Text>
              <br />
              <FormControl mb={6} isInvalid={!!errors.name}>
                <FormLabel fontSize={"xs"} lineHeight={1}>
                  Name
                </FormLabel>
                <Input
                  size={"sm"}
                  placeholder="Your full name"
                  {...register("name")}
                />
                <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
              </FormControl>
              <FormControl mb={6} isInvalid={!!errors.email}>
                <FormLabel fontSize={"xs"} lineHeight={1}>
                  Email
                </FormLabel>
                <Input
                  size={"sm"}
                  placeholder="Enter your email"
                  {...register("email")}
                />
                <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
              </FormControl>
              <FormControl mb={4} isInvalid={!!errors.password}>
                <FormLabel fontSize={"xs"} lineHeight={1}>
                  Password
                </FormLabel>
                <InputGroup size={"sm"}>
                  <Input
                    type={showPassword ? "text" : "password"}
                    {...register("password")}
                  />
                  <InputRightElement
                    children={showPassword ? <FiEyeOff /> : <FiEye />}
                    onClick={() => setShowPassword(!showPassword)}
                  />
                </InputGroup>
                <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
              </FormControl>
              <br />
              <Button
                w={"full"}
                colorScheme="blue"
                fontSize={"sm"}
                fontWeight={"medium"}
                bgColor={colors.loginBtnColor}
                isLoading={isLoading}
                type="submit"
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
                onClick={() =>
                  signIn("google", { callbackUrl: "/api/auth/callback/google" })
                }
              >
                Sign up with Google
              </Button>
              <br />
              <br />
              <Text fontSize={"xs"} textAlign={"center"}>
                Already have an account?{" "}
                <a
                  href={`/auth/login${callback ? `?callback=${callback}` : ""}`}
                  style={{ fontWeight: "bold", color: "navy" }}
                >
                  Sign In
                </a>
              </Text>
            </Box>
          </VStack>
        </form>
      </Container>
    </>
  );
};

const page = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <SignupForm />
      </Suspense>
    </>
  );
};

export default page;
