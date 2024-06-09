"use client";
import { Box, Button, HStack, Spacer, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CustomContainer from "../custom/CustomContainer";
import Logo from "./Logo";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const links = [
  {
    label: "How it works",
    href: "#",
  },
  {
    label: "Portfolio",
    href: "#",
  },
  {
    label: "Pricing",
    href: "#",
  },
  {
    label: "Blogs",
    href: "#",
  },
  {
    label: "FAQ",
    href: "#",
  },
];

const Navbar = () => {
  const [bgColor, setBgColor] = useState("transparent");
  const [hasScrolledPast, setHasScrolledPast] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      const threshold = viewportHeight * 0.1; // 10vh

      if (scrollPosition > threshold && !hasScrolledPast) {
        setHasScrolledPast(true);
        setBgColor("#111");
      } else if (scrollPosition <= threshold && hasScrolledPast) {
        setHasScrolledPast(false);
        setBgColor("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasScrolledPast]);

  return (
    <>
      <Box
        p={[4, 6]}
        bgColor={bgColor}
        pos={"fixed"}
        top={0}
        left={0}
        right={0}
        zIndex={999}
        transition={"all .3s ease"}
      >
        <CustomContainer>
          <HStack
            w={"full"}
            gap={16}
            justifyContent={"flex-start"}
            className="allroundgothic-medium"
            color={hasScrolledPast ? "#FFF" : "#000"}
          >
            <Logo />
            <HStack gap={8}>
              {links?.map((item, i) => (
                <Link key={i} href={item?.href}>
                  <Text fontSize={"sm"} fontWeight={"semibold"}>
                    {item?.label}
                  </Text>
                </Link>
              ))}
            </HStack>
            <Spacer />
            <HStack gap={4} justifyContent={"flex-end"}>
              <Link href={"#"}>
                <Text fontSize={"sm"} fontWeight={"semibold"}>
                  Get Connected
                </Text>
              </Link>

              <Button
                colorScheme={hasScrolledPast ? "white" : "black"}
                variant={"outline"}
                px={3}
                py={5}
                leftIcon={<MdArrowOutward />}
              >
                Log In
              </Button>
            </HStack>
          </HStack>
        </CustomContainer>
      </Box>
    </>
  );
};

export default Navbar;
