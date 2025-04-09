"use client";
import { colors } from "@/lib/constants";
import { ProjectCardProps } from "@/lib/props/project";
import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const ProjectCard = ({
  name,
  coverImg,
  mediaCount,
  subtitle,
  createdAt,
  documentId,
  statusTitle,
  statusSubtitle,
}: ProjectCardProps) => {
  return (
    <>
      <Box pos={"relative"}>
        <Box
          pos={"relative"}
          w={"180px"}
          h={"180px"}
          className="project-card"
          as="a"
          href={`/dashboard/projects/${documentId}`}
          zIndex={1}
        >
          <Box
            pos={"absolute"}
            zIndex={0}
            rounded={16}
            w={"inherit"}
            h={"inherit"}
            bgImage={`url("${coverImg || "/abstract.jpg"}")`}
            bgPos={"50% 40%"}
            bgSize={"cover"}
            bgRepeat={"no-repeat"}
          ></Box>

          <Box
            pos={"absolute"}
            p={6}
            bgColor={"rgba(0,0,0,0.6)"}
            color={"#FFF"}
            rounded={16}
            w={'inherit'}
            h={"inherit"}
            zIndex={5}
          >
            <Box h={'24'}>
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

        {statusTitle || statusSubtitle ? (
          <Box pos={"absolute"} bottom={-16} zIndex={0} w={"full"}>
            <Box
              roundedBottom={8}
              w={["80%"]}
              mx={"auto"}
              p={2}
              bgColor={colors.orange}
              color={"#FFF"}
            >
              <Box pos={"relative"}>
                <Text
                  textAlign={"center"}
                  fontSize={"sm"}
                  fontWeight={"semibold"}
                  lineHeight={1}
                >
                  {statusTitle}
                </Text>
                <Text textAlign={"center"} fontSize={"xs"}>
                  {statusSubtitle}
                </Text>
              </Box>
            </Box>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default ProjectCard;
