'use client';
import ProjectTitleForm from "@/components/dashboard/project/ProjectTitleForm";
import { Box, HStack, Text } from "@chakra-ui/react";
import React from "react";

const page = () => {
  return (
    <>
      <HStack
        mb={8}
        gap={6}
        w={"full"}
        justifyContent={"space-between"}
        flexWrap={"wrap-reverse"}
      >
        <Box>
          <Text className="mont-bold" fontSize={"lg"}>
            New Project
          </Text>
          <Text fontWeight={"semibold"} fontSize={"10"}>
            Create a new project and upload files in next step
          </Text>
        </Box>
      </HStack>

      <Text
        display={["none", "block"]}
        fontSize={10}
        fontWeight={"semibold"}
        mb={6}
      >
        Projects &nbsp;&nbsp; / &nbsp;&nbsp; New Project &nbsp;&nbsp;
      </Text>

      <ProjectTitleForm />
    </>
  );
};

export default page;
