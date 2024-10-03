"use client";
import { Box, Button, HStack, Icon, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import Logo from "./Logo";
import { MdArrowOutward } from "react-icons/md";
import LoginModal from "../home/LoginModal";

const MobileNav = ({ color }: { color?: string }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <HStack
        w={"full"}
        color={color ?? "#000"}
        justifyContent={"space-between"}
        display={["flex", "none", "none"]}
      >
        <Icon as={HiMenuAlt2} fontSize={28} />
        <Box transform={'auto'} translateX={8}>
        <Logo size={["8"]} />
        </Box>
        <Button
          colorScheme={color ?? "black"}
          variant={"outline"}
          px={3}
          py={5}
          leftIcon={<MdArrowOutward />}
          onClick={onToggle}
        >
          Log In
        </Button>
      </HStack>

      <LoginModal isOpen={isOpen} onClose={onToggle} />
    </>
  );
};

export default MobileNav;
