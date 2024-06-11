"use client";
import Sidenav from "@/components/dashboard/Sidenav";
import Topbar from "@/components/dashboard/Topbar";
import { LayoutProps } from "@/lib/props/common";
import { Box, HStack } from "@chakra-ui/react";
import React from "react";

const layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Box bgImage={'/bg.jpg'}>
        <HStack alignItems={'flex-start'} justifyContent={"space-between"} gap={0}>
          <Box flex={2} bgColor={'whiteAlpha.600'} filter={'auto'} backdropBlur={'10px'}>
            <Sidenav />
          </Box>
          <Box flex={8} overflowY={'scroll'} h={'100vh'} className="no-scrollbar" p={3}>{children}</Box>
        </HStack>
      </Box>
    </>
  );
};

export default layout;
