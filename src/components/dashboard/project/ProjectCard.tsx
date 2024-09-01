import { Box, HStack, Text } from "@chakra-ui/react";
import React from "react";

const ProjectCard = () => {
  return (
    <>
      <Box p={6} bgColor={"#FFF"} rounded={16}>
        <Box h={24}>
          <Text fontWeight={"semibold"}>Project 1</Text>
          <Text fontSize={"sm"} fontWeight={"semibold"}>
            Sapne Re - Sonu Nigam
          </Text>
        </Box>
        <HStack justifyContent={'space-between'}>
          <Text fontSize={"xs"}>20 July, 2024</Text>
          <Box
            boxSize={8}
            bgColor={"orange.500"}
            color={"#FFF"}
            display={"grid"}
            placeContent={"center"}
            rounded={"full"}
          >
            <Text fontSize={"xs"}>60%</Text>
          </Box>
        </HStack>
      </Box>
    </>
  );
};

export default ProjectCard;
