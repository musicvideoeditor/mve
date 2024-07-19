"use client";
import NewProjectDrawer from "@/components/dashboard/project/NewProjectDrawer";
import { Button, HStack, Text, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { FaPlus } from "react-icons/fa6";

const page = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
      <HStack justifyContent={"space-between"}>
        <Text fontSize={["lg", "xx-large"]} fontWeight={"bold"}>
          All Projects
        </Text>

        <Button
          fontWeight={"medium"}
          colorScheme="blackAlpha"
          bgColor={"#000"}
          _hover={{ bgColor: "#333" }}
          leftIcon={<FaPlus />}
          onClick={onToggle}
        >
          New Project
        </Button>
      </HStack>

      <NewProjectDrawer isOpen={isOpen} onClose={onToggle} />
    </>
  );
};

export default page;
