"use client";
import { Avatar, Box, Button, Container, HStack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { FiPlus, FiUpload } from "react-icons/fi";
import ProjectTitleForm from "./ProjectTitleForm";
import ProjectAssets from "./ProjectAssets";

const NewProjectDrawer = () => {
  const [step, setStep] = useState("title");

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
            {step == "title" ? "New Project" : "Files and assets"}
          </Text>
          <Text fontWeight={"semibold"} fontSize={"10"}>
            {step == "title"
              ? "Create a new project and upload files in next step"
              : "Documents and attachments that have been uploaded as part of this project"}
          </Text>
        </Box>
        <HStack w={"full"} justifyContent={"flex-end"}>
          <Button
            leftIcon={<FiUpload />}
            size={"sm"}
            variant={"outline"}
            border={"1px solid #666"}
            fontSize={"xs"}
            w={24}
          >
            Share
          </Button>
          <Button
            leftIcon={<FiPlus />}
            size={"sm"}
            colorScheme="blackAlpha"
            bgColor={"#000"}
            _hover={{ bgColor: "#333" }}
            fontSize={"xs"}
            w={24}
          >
            Invite
          </Button>
        </HStack>
      </HStack>

      <Text display={['none', 'block']} fontSize={10} fontWeight={"semibold"} mb={6}>
        Projects &nbsp;&nbsp; / &nbsp;&nbsp; Project Name &nbsp;&nbsp; /
        &nbsp;&nbsp; Files and assets
      </Text>
      {step == "title" ? (
        <ProjectTitleForm onSubmit={() => setStep("assets")} />
      ) : (
        <ProjectAssets onSubmit={() => setStep("assets")} />
      )}
    </>
  );
};

export default NewProjectDrawer;
