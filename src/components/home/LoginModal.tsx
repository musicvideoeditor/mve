"use client";
import { colors } from "@/lib/constants";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
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

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
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
      <Modal isOpen={isOpen} onClose={onClose} size={"2xl"}>
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent>
          <ModalBody p={0}>
            <form method="POST" onSubmit={handleSubmit(handleLogin)}>
              <HStack gap={0}>
                <VStack
                  w={"full"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  flex={1}
                  p={[8, 16, 20]}
                >
                  <Box w={"full"}>
                    <Text fontSize={"lg"} fontWeight={"semibold"}>
                      Welcome Back
                    </Text>
                    <Text fontSize={"xs"}>Please enter your details</Text>
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
                      <FormErrorMessage>
                        {errors.email?.message}
                      </FormErrorMessage>
                    </FormControl>
                    <FormControl mb={4} isInvalid={!!errors.password}>
                      <FormLabel fontSize={"xs"} lineHeight={1}>
                        Password
                      </FormLabel>
                      <Input
                        size={"sm"}
                        type="password"
                        {...register("password")}
                      />
                      <FormErrorMessage>
                        {errors.password?.message}
                      </FormErrorMessage>
                    </FormControl>
                    <HStack justifyContent={"space-between"} mb={4}>
                      <FormControl w={"max-content"}>
                        <Checkbox size={"sm"} fontSize={"8px"}>
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
                <Box flex={1} bgColor={"gray.50"} display={["none", "block"]}></Box>
              </HStack>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LoginModal;
