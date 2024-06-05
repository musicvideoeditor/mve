import { Box, Button, HStack, Spacer, Text } from "@chakra-ui/react";
import React from "react";
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
  return (
    <>
      <Box
        p={[4, 6]}
        bgColor={"#ffe6e6"}
        pos={"fixed"}
        top={0}
        left={0}
        right={0}
        zIndex={999}
      >
        <CustomContainer>
          <HStack w={"full"} gap={16} justifyContent={"flex-start"}>
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
                colorScheme="black"
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
