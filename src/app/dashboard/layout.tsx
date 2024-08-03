"use client";
import Sidenav from "@/components/dashboard/Sidenav";
import Topbar from "@/components/dashboard/Topbar";
import { LayoutProps } from "@/lib/props/common";
import { Box, Button, HStack, IconButton, Text } from "@chakra-ui/react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { BsClockHistory, BsCloudDownload } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineComment } from "react-icons/md";
import { RiFolderUploadLine } from "react-icons/ri";

const layout = ({ children }: LayoutProps) => {
  const pathname = usePathname();
  const tabs = [
    {
      label: "Upload Data",
      icon: <RiFolderUploadLine fontSize={16} />,
      url: "/dashboard/projects",
      regex: /^\/dashboard\/projects$/
    },
    {
      label: "Video Review",
      icon: <MdOutlineComment fontSize={16} />,
      url: "/dashboard/projects/csdejdt/videos/xdfg43t3",
      regex: /^\/dashboard\/projects\/[^/]+\/videos\/[^/]+$/
    },
    {
      label: "Review History",
      icon: <BsClockHistory fontSize={16} />,
      url: "#",
      regex: /^\/dashboard\/projects\/review\/history$/
    },
    {
      label: "Chat",
      icon: <MdOutlineComment fontSize={16} />,
      url: "#",
      regex: /^\/dashboard\/projects\/chat$/
    },
    {
      label: "Download",
      icon: <BsCloudDownload fontSize={16} />,
      url: "#",
      regex: /^\/dashboard\/projects\/download$/
    },
  ];
  

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
              pos={"relative"}
              top={2}
              w={72}
              px={2}
              h={12}
              roundedTop={24}
              bgImage={"url('/tab.png')"}
              bgSize={"cover"}
              bgRepeat={"no-repeat"}
              bgPos={"top"}
            >
              <Text
                pos={"relative"}
                top={3}
                left={16}
                fontSize={"md"}
                fontWeight={"bold"}
              >
                Dashboard
              </Text>
            </Box>
            <HStack pos={"relative"} bottom={2}>
              {tabs.map((tab, i) => (
                <Button
                  key={i}
                  rounded={"full"}
                  size={"lg"}
                  fontSize={"xs"}
                  leftIcon={tab.icon}
                  as={'a'}
                  href={tab.url}
                  colorScheme={tab.regex.test(pathname) ? "yellow" : "gray"}
                  bgColor={tab.regex.test(pathname) ? "#4ca336" : "#FFF"}
                  color={tab.regex.test(pathname) ? "#fff" : "#000"}
                >
                  {tab.label}
                </Button>
              ))}
              <IconButton
                rounded={"full"}
                aria-label="account"
                size={"lg"}
                icon={<FaRegUserCircle fontSize={20} />}
              />
            </HStack>
          </HStack>
          <Box p={[4, 8, 16]} roundedTop={24} minH={"90vh"} bgColor={"#fff"}>
            {children}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default layout;
