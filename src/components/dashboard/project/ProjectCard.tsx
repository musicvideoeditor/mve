"use client";
import { Box, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

interface ProjectCardProps {
  name: string;
  subtitle?: string;
  coverImg?: string;
  progress?: number | string;
}

const ProjectCard = ({
  name,
  coverImg,
  progress,
  subtitle,
}: ProjectCardProps) => {
  return (
    <>
        <Box
          bgImage={`url("${coverImg || "/abstract.jpg"}")`}
          bgPos={"50% 40%"}
          rounded={16}
          overflow={"hidden"}
          className="project-card"
          as="a"
          href="/dashboard/projects/dsgsdg"
          target="_blank"
        >
          <Box p={6} bgColor={"rgba(0,0,0,0.6)"} color={"#FFF"}>
            <Box h={24}>
              <Text
                fontSize={["sm"]}
                fontWeight={"semibold"}
                overflow={"hidden"}
                whiteSpace={"nowrap"}
                textOverflow={"ellipsis"}
              >
                {name}
              </Text>
              <Text fontSize={["xs"]}>{subtitle ?? "Subtitle"}</Text>
            </Box>
            <HStack justifyContent={"space-between"}>
              <Text fontSize={[10, "xs"]}>20 July, 2024</Text>
              <Box
                boxSize={8}
                bgColor={"orange.500"}
                color={"#FFF"}
                display={"grid"}
                placeContent={"center"}
                rounded={"full"}
              >
                <Text fontSize={"xs"}>{progress ?? 0 / 4}</Text>
              </Box>
            </HStack>
          </Box>
        </Box>
    </>
  );
};

export default ProjectCard;
