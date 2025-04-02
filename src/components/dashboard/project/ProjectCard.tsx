"use client";
import { ProjectCardProps } from "@/lib/props/project";
import { Box, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const ProjectCard = ({
  name,
  coverImg,
  mediaCount,
  subtitle,
  createdAt,
  documentId,
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
        href={`/dashboard/projects/${documentId}`}
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
            <Text fontSize={[10, "xs"]}>
              {createdAt
                ? new Date(createdAt).toLocaleDateString(undefined, {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })
                : ""}
            </Text>
            <Box
              boxSize={8}
              bgColor={"orange.500"}
              color={"#FFF"}
              display={"grid"}
              placeContent={"center"}
              rounded={"full"}
            >
              <Text fontSize={"xs"}>{mediaCount ?? 0 / 4}</Text>
            </Box>
          </HStack>
        </Box>
      </Box>
    </>
  );
};

export default ProjectCard;
