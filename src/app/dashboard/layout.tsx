"use client";
import VerticalSpacer from "@/components/extras/VerticalSpacer";
import { colors } from "@/lib/constants";
import { LayoutProps } from "@/lib/props/common";
import { useAppSelector } from "@/lib/redux/store";
import {
  Box,
  Button,
  Container,
  Hide,
  HStack,
  IconButton,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import {
  BsStars,
} from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { FaBell, FaVideo } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";

const layout = ({ children }: LayoutProps) => {
  const pathname = usePathname();
  const notifications = useAppSelector((state) => state.notificationReducer.data);

  const tabs = [
    {
      label: "Home",
      icon: <GoHomeFill fontSize={16} />,
      url: "/dashboard",
      regex: /^\/dashboard$/,
    },
    {
      label: "Projects",
      icon: <FaVideo fontSize={16} />,
      url: "/dashboard/projects",
      regex: /^\/dashboard\/projects$/,
    },
    // {
    //   label: "Video Review",
    //   icon: <MdOutlineComment fontSize={16} />,
    //   url: "/dashboard/projects/csdejdt/videos/xdfg43t3",
    //   regex: /^\/dashboard\/projects\/[^/]+\/videos\/[^/]+$/,
    // },
    {
      label: "Updates",
      icon: <FaBell fontSize={16} />,
      url: "/dashboard/updates",
      regex: /^\/dashboard\/updates$/,
    },
    // {
    //   label: "Chat",
    //   icon: <MdOutlineComment fontSize={16} />,
    //   url: "#",
    //   regex: /^\/dashboard\/projects\/chat$/,
    // },
    // {
    //   label: "Download",
    //   icon: <BsCloudDownload fontSize={16} />,
    //   url: "#",
    //   regex: /^\/dashboard\/projects\/download$/,
    // },
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
                    pos={'relative'}
                    rounded={"full"}
                    leftIcon={tab.icon}
                    display={["none", "flex"]}
                    colorScheme={tab.regex.test(pathname) ? "yellow" : "gray"}
                    bgColor={
                      tab.regex.test(pathname)
                        ? colors.orange
                        : colors.dashboardBgColor
                    }
                    color={tab.regex.test(pathname) ? "#fff" : "#000"}
                  >
                    {tab.label}

                    {/* Notification badge */}
                    <Hide below="md">
                      {tab.label == "Updates" && notifications?.length > 0 ? (
                        <Box
                          pos={"absolute"}
                          top={2}
                          right={2}
                          w={4}
                          h={4}
                          color={'#FFF'}
                          rounded={"full"}
                          bgColor={colors.orange}
                          display={'grid'}
                          placeContent={'center'}
                        >1</Box>
                      ) : null}
                    </Hide>
                  </Button>
                ))}
              </Hide>
              <IconButton
                rounded={"full"}
                aria-label="account"
                size={"lg"}
                bgColor={colors.dashboardBgColor}
                icon={<FaRegUserCircle fontSize={20} />}
                as={"a"}
                href="/dashboard/account"
              />
            </HStack>
          </HStack>
          <Box
            w={["97.5%", "97.5%"]}
            mx={"auto"}
            p={[0, 8, 8]}
            py={[8]}
            roundedTop={24}
            minH={["100vh", "90vh"]}
            bgColor={colors.dashboardBgColor}
            overflow={"scroll"}
          >
            <Container maxW={["full", "5xl", "7xl"]}>{children}</Container>
          </Box>
        </Box>
        <VerticalSpacer h={["5vh", 0]} />
      </Box>

      <HStack
        gap={4}
        pos={"fixed"}
        bottom={0}
        left={0}
        width={"full"}
        p={4}
        py={[2, 4]}
        className="bottom-nav"
        bgColor={colors.dashboardBgColor}
        zIndex={999}
        justifyContent={"space-between"}
      >
        {tabs.map((tab, i) => (
          <Link key={i} href={tab.url}>
            <Button
              size={"sm"}
              fontSize={"xs"}
              rounded={"full"}
              leftIcon={tab.icon}
              display={["flex", "none"]}
              colorScheme={tab.regex.test(pathname) ? "yellow" : "gray"}
              bgColor={
                tab.regex.test(pathname)
                  ? colors.orange
                  : colors.dashboardBgColor
              }
              color={tab.regex.test(pathname) ? "#fff" : "#000"}
            >
              {tab.regex.test(pathname) ? tab.label : null}
            </Button>
          </Link>
        ))}
      </HStack>

      <Button
        display={["none", "flex"]}
        rounded={"full"}
        roundedBottomRight={0}
        pos={"fixed"}
        bottom={[16, 8]}
        right={8}
        colorScheme="twitter"
        bgColor={colors.loginBtnColor}
        zIndex={99999}
        leftIcon={<BsStars />}
        className="shadow"
      >
        Need Help?
      </Button>

      <IconButton
        display={["flex", "none"]}
        aria-label="help"

        rounded={"full"}
        roundedBottomRight={0}
        icon={<BsStars />}
        pos={"fixed"}
        bottom={[12, 8]}
        right={6}
        colorScheme="twitter"
        bgColor={colors.loginBtnColor}
        zIndex={99999}
        className="shadow"
      />
    </>
  );
};

export default layout;
