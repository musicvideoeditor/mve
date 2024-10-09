"use client";
import Sidenav from "@/components/dashboard/Sidenav";
import Topbar from "@/components/dashboard/Topbar";
import { colors } from "@/lib/constants";
import { LayoutProps } from "@/lib/props/common";
import {
  Box,
  Button,
  Container,
  Hide,
  HStack,
  IconButton,
  Text,
} from "@chakra-ui/react";
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
      regex: /^\/dashboard\/projects$/,
    },
    {
      label: "Video Review",
      icon: <MdOutlineComment fontSize={16} />,
      url: "/dashboard/projects/csdejdt/videos/xdfg43t3",
      regex: /^\/dashboard\/projects\/[^/]+\/videos\/[^/]+$/,
    },
    {
      label: "Review History",
      icon: <BsClockHistory fontSize={16} />,
      url: "#",
      regex: /^\/dashboard\/projects\/review\/history$/,
    },
    {
      label: "Chat",
      icon: <MdOutlineComment fontSize={16} />,
      url: "#",
      regex: /^\/dashboard\/projects\/chat$/,
    },
    {
      label: "Download",
      icon: <BsCloudDownload fontSize={16} />,
      url: "#",
      regex: /^\/dashboard\/projects\/download$/,
    },
  ];

  return (
    <>
      <Box bgImage={"/bg.jpg"} bgSize={"cover"} h={"100vh"} overflow={"scroll"}>
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
        <Box zIndex={1} pos={"relative"} top={4}>
          <HStack w={"full"} px={[2, 8, 16]} justifyContent={"space-between"}>
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
              <Hide below="sm">
                {tabs.map((tab, i) => (
                  <Button
                    key={i}
                    as={"a"}
                    size={"lg"}
                    href={tab.url}
                    fontSize={"xs"}
                    rounded={"full"}
                    leftIcon={tab.icon}
                    display={['none', 'flex']}
                    colorScheme={tab.regex.test(pathname) ? "yellow" : "gray"}
                    bgColor={
                      tab.regex.test(pathname)
                        ? "#4ca336"
                        : colors.dashboardBgColor
                    }
                    color={tab.regex.test(pathname) ? "#fff" : "#000"}
                  >
                    {tab.label}
                  </Button>
                ))}
              </Hide>
              <IconButton
                rounded={"full"}
                aria-label="account"
                size={"lg"}
                icon={<FaRegUserCircle fontSize={20} />}
                as={"a"}
                href="/dashboard/account"
              />
            </HStack>
          </HStack>
          <Box
            w={["97.5%", "97.5%"]}
            mx={"auto"}
            p={[4, 8, 8]}
            py={[8]}
            roundedTop={24}
            minH={["95vh", "90vh"]}
            bgColor={colors.dashboardBgColor}
            overflow={'scroll'}
          >
            <Container maxW={["full", "5xl"]}>{children}</Container>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default layout;
