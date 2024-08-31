"use client";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";
interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size={"2xl"}>
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent>
          <ModalBody p={0}>
            <HStack gap={0}>
              <VStack
                w={"full"}
                justifyContent={"center"}
                alignItems={"center"}
                flex={1}
                p={20}
              >
                <Box w={"full"}>
                  <Text fontSize={"lg"} fontWeight={"semibold"}>
                    Welcome Back
                  </Text>
                  <Text fontSize={"xs"}>Please enter your details</Text>
                  <br />
                  <FormControl mb={4}>
                    <FormLabel fontSize={"xs"}>Email</FormLabel>
                    <Input size={"sm"} placeholder="Enter your email" />
                  </FormControl>
                  <FormControl mb={4}>
                    <FormLabel fontSize={"xs"}>Password</FormLabel>
                    <Input size={"sm"} type="password" />
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
              <Box flex={1} bgColor={"gray.50"}></Box>
            </HStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LoginModal;
