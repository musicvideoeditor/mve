import { Box, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Logo from "../common/Logo";
import { CiFileOn, CiGrid42, CiMoneyCheck1 } from "react-icons/ci";
import { IoVideocamOutline } from "react-icons/io5";
import { PiVideoCameraThin } from "react-icons/pi";
import Link from "next/link";

const Sidenav = () => {
  return (
    <>
      <Box
        w={"full"}
        h={"100vh"}
        border={"1px solid"}
        borderColor={"gray.300"}
        px={4}
        py={8}
      >
        <VStack
          w={"full"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={4}
        >
          <Logo size={"10"} />
          <br />
          <Link href={"/dashboard/projects"} style={{ width: "100%" }}>
            <HStack
              w={"full"}
              gap={3}
              p={2}
              cursor={"pointer"}
              rounded={4}
              _hover={{ bgColor: "gray.200" }}
            >
              <Icon as={CiGrid42} fontSize={24} />
              <Text>Dashboard</Text>
            </HStack>
          </Link>

          <Link href={"/dashboard/projects"} style={{ width: "100%" }}>
            <HStack
              w={"full"}
              gap={3}
              p={2}
              cursor={"pointer"}
              rounded={4}
              _hover={{ bgColor: "gray.200" }}
            >
              <Icon as={PiVideoCameraThin} fontSize={24} />
              <Text>Projects</Text>
            </HStack>
          </Link>
          <HStack
            w={"full"}
            gap={3}
            p={2}
            cursor={"pointer"}
            rounded={4}
            _hover={{ bgColor: "gray.200" }}
          >
            <Icon as={CiFileOn} fontSize={24} />
            <Text>Assets</Text>
          </HStack>
          <HStack
            w={"full"}
            gap={3}
            p={2}
            cursor={"pointer"}
            rounded={4}
            _hover={{ bgColor: "gray.200" }}
          >
            <Icon as={CiMoneyCheck1} fontSize={24} />
            <Text>Transactions</Text>
          </HStack>
        </VStack>
      </Box>
    </>
  );
};

export default Sidenav;
