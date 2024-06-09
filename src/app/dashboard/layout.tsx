"use client";
import Sidenav from "@/components/dashboard/Sidenav";
import Topbar from "@/components/dashboard/Topbar";
import { LayoutProps } from "@/lib/props/common";
import { Box, HStack } from "@chakra-ui/react";
import React from "react";

const layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Topbar />
      <Box p={4}>
        <HStack alignItems={'flex-start'} justifyContent={"space-between"} gap={4}>
          <Box flex={1}>
            <Sidenav />
          </Box>
          <Box flex={5} overflowY={'scroll'} h={'86vh'} className="no-scrollbar">{children}</Box>
        </HStack>
      </Box>
    </>
  );
};

export default layout;
