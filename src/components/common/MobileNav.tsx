"use client";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Icon,
  IconButton,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import Logo from "./Logo";
import { MdArrowOutward } from "react-icons/md";
import LoginModal from "../home/LoginModal";
import { colors, NAVLINKS } from "@/lib/constants";
import {
  FaArrowLeftLong,
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";
import Link from "next/link";

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
        <Icon as={HiMenuAlt2} fontSize={28} onClick={onToggle} />
        <Box transform={"auto"} translateX={8}>
          <Logo size={["8"]} />
        </Box>
        <Button
          colorScheme={color ?? "black"}
          variant={"outline"}
          px={3}
          py={5}
          leftIcon={<MdArrowOutward />}
          as={"a"}
          href="/auth/login"
        >
          Log In
        </Button>
      </HStack>

      <Drawer isOpen={isOpen} onClose={onToggle} placement="left" size={"xs"}>
        <DrawerOverlay />
        <DrawerContent bgColor={colors.homeSidenavBgColor} color={"#FFF"}>
          <DrawerHeader>
            <HStack justifyContent={"flex-start"}>
              <FaArrowLeftLong onClick={onToggle} />
            </HStack>
          </DrawerHeader>
          <DrawerBody>
            <HStack
              my={4}
              py={4}
              justifyContent={"space-between"}
              borderBottom={"1px dashed #FFF"}
            >
              <Text fontWeight={"semibold"}>Get Connected</Text>
              <Link href={"/auth/login"}>
                <Text fontSize={"sm"}>Login/Signup</Text>
              </Link>
            </HStack>
            <Box>
              <VStack
                alignItems={"flex-start"}
                justifyContent={"flex-start"}
                gap={4}
              >
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
              </VStack>
            </Box>
            <Link href={"/contact-us"}>
              <HStack
                my={4}
                py={4}
                justifyContent={"flex-start"}
                borderTop={"1px dashed #FFF"}
              >
                <Text fontWeight={"semibold"}>Get In Touch</Text>
              </HStack>
            </Link>
          </DrawerBody>
          <DrawerFooter>
            <HStack w={"full"} justifyContent={"flex-start"} gap={4}>
              <IconButton
                size={"sm"}
                rounded={"full"}
                aria-label="facebook"
                icon={<FaFacebookF />}
              />
              <IconButton
                size={"sm"}
                rounded={"full"}
                aria-label="facebook"
                icon={<FaInstagram />}
              />
              <IconButton
                size={"sm"}
                rounded={"full"}
                aria-label="facebook"
                icon={<FaXTwitter />}
              />
            </HStack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileNav;
