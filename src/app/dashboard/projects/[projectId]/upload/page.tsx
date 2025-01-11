'use client';
import ProjectAssets from "@/components/dashboard/project/ProjectAssets";
import { Box, Button, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { FiPlus, FiUpload } from "react-icons/fi";

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
            Project Assets
          </Text>
          <Text fontWeight={"semibold"} fontSize={"10"}>
            Documents and attachments that have been uploaded as part of this
            project
          </Text>
        </Box>
        <HStack w={"full"} justifyContent={"flex-end"}>
          <Button
            leftIcon={<FiPlus />}
            size={"sm"}
            colorScheme="blackAlpha"
            bgColor={"#000"}
            _hover={{ bgColor: "#333" }}
            fontSize={"xs"}
            w={24}
          >
            Add Members
          </Button>
        </HStack>
      </HStack>

      <Text
        display={["none", "block"]}
        fontSize={10}
        fontWeight={"semibold"}
        mb={6}
      >
        Projects &nbsp;&nbsp; / &nbsp;&nbsp; Project Name &nbsp;&nbsp; /
        &nbsp;&nbsp; Files and assets
      </Text>

      <ProjectAssets onSubmit={() => console.log("assets")} />
    </>
  );
};

export default page;
