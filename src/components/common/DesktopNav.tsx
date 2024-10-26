"use client";
import { Button, HStack, Spacer, Text, useDisclosure } from "@chakra-ui/react";
import React from "react";
import Logo from "./Logo";
import { NAVLINKS } from "@/lib/constants";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import LoginModal from "../home/LoginModal";

const DesktopNav = ({ color }: { color?: string }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <HStack
        display={["none", "flex", "flex"]}
        w={"full"}
        gap={16}
        justifyContent={"flex-start"}
        color={color ?? "#000"}
      >
        <Logo />
        <HStack gap={8}>
          {NAVLINKS?.map((item, i) => (
            <Link key={i} href={item?.href}>
              <Text
                fontSize={"sm"}
                fontWeight={"semibold"}
                className="allroundgothic"
              >
                {item?.label}
              </Text>
            </Link>
          ))}
        </HStack>
        <Spacer />
        <HStack gap={4} justifyContent={"flex-end"}>
          <Link href={"/contact-us"}>
            <Text fontSize={"sm"} fontWeight={"semibold"}>
              Get Connected
            </Text>
          </Link>

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
      </HStack>

      <LoginModal isOpen={isOpen} onClose={onToggle} />
    </>
  );
};

export default DesktopNav;
