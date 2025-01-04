"use client";
import VerticalSpacer from "@/components/extras/VerticalSpacer";
import { colors } from "@/lib/constants";
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
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/lib/schema/auth-schema";
import * as z from "zod";

const page = () => {
  const toast = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
  });

  function handleLogin(v: z.infer<typeof LoginSchema>) {
    setLoading(true);
    signIn("credentials", { ...v, redirect: false }).then((res) => {
      if (res?.ok) {
        toast({
          status: "success",
          description: "Login successful",
        });
        window.location.href = "/dashboard";
        setLoading(false);
      } else {
        toast({
          status: "error",
          description: res?.error,
        });
        setLoading(false);
      }
    });
  }

  return (
    <>
      <VerticalSpacer />
      <Container maxW={"sm"} p={[4, 8]}>
        <form method="post" onSubmit={handleSubmit(handleLogin)}>
          <VStack w={"full"} justifyContent={"center"} alignItems={"center"}>
            <Box w={"full"}>
              <Text
                fontSize={"lg"}
                className={"mont-semibold"}
                fontWeight={"semibold"}
                textAlign={"center"}
              >
                Welcome Back
              </Text>
              <Text fontSize={"xs"} textAlign={"center"}>
                Please enter your details
              </Text>
              <br />
              <br />
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
                <Input size={"sm"} type="password" {...register("password")} />
                <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
              </FormControl>
              <HStack justifyContent={"space-between"} mb={4}>
                <FormControl w={"max-content"}>
                  <Checkbox fontSize={"8px"}>Remember Me</Checkbox>
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
                type="submit"
                isLoading={loading}
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
        </form>
      </Container>
    </>
  );
};

export default page;
