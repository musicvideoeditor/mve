"use client";
import Sidenav from "@/components/dashboard/Sidenav";
import Topbar from "@/components/dashboard/Topbar";
import { LayoutProps } from "@/lib/props/common";
import { Box, Button, HStack, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { BsClockHistory, BsCloudDownload } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineComment } from "react-icons/md";
import { RiFolderUploadLine } from "react-icons/ri";

const layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Box bgImage={"/bg.jpg"}>
        <Box
          pos={"absolute"}
          top={0}
          left={"0"}
          right={0}
          bottom={0}
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
          zIndex={0}
        ></Box>
        <Box zIndex={1} pos={"relative"} top={"5vh"}>
          <HStack w={"full"} px={[4, 8, 16]} justifyContent={"space-between"}>
            <Box
              w={"max-content"}
              px={6}
              pb={2}
              pt={4}
              roundedTop={24}
              bgColor={"#e8e8e6"}
            >
              <Text fontSize={"md"} fontWeight={"bold"}>
                Dashboard
              </Text>
            </Box>
            <HStack pos={"relative"} bottom={2}>
              <Button
                rounded={"full"}
                colorScheme="orange"
                size={"lg"}
                fontSize={"xs"}
                bgColor={"#4ca336"}
                leftIcon={<RiFolderUploadLine fontSize={16} />}
                as={'a'}
                href="/dashboard/projects"
              >
                Upload Data
              </Button>
              <Button
                rounded={"full"}
                size={"lg"}
                fontSize={"xs"}
                leftIcon={<MdOutlineComment fontSize={16} />}
                as={'a'}
                href="/dashboard"
              >
                Video Review
              </Button>
              <Button
                rounded={"full"}
                size={"lg"}
                fontSize={"xs"}
                leftIcon={<BsClockHistory fontSize={16} />}
              >
                Review History
              </Button>
              <Button
                rounded={"full"}
                size={"lg"}
                fontSize={"xs"}
                leftIcon={<MdOutlineComment fontSize={16} />}
              >
                Chat
              </Button>
              <Button
                rounded={"full"}
                size={"lg"}
                fontSize={"xs"}
                leftIcon={<BsCloudDownload fontSize={16} />}
              >
                Download
              </Button>
              <IconButton
                rounded={"full"}
                aria-label="account"
                size={"lg"}
                icon={<FaRegUserCircle fontSize={20} />}
              />
            </HStack>
          </HStack>
          <Box p={[4, 8, 16]} roundedTop={24} minH={"90vh"} bgColor={"#e8e8e6"}>
            {children}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default layout;
