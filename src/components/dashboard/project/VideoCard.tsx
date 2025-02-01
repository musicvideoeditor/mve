"use client";
import { ProjectVideoType } from "@/lib/types/project";
import { Box, Button, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { LuClock } from "react-icons/lu";


const VideoCard = ({
  name,
  thumbnail,
  createdAt,
  duration,
}: ProjectVideoType) => {
  return (
    <>
      <Link href={"/dashboard/projects/dsgsdg/videos/dsgsdg"} target="_blank">
        <Box
          bgImage={`url("${thumbnail?.url || "/abstract.jpg"}")`}
          bgPos={"50% 40%"}
          rounded={16}
          overflow={"hidden"}
          className="project-card"
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
              <Text fontSize={[10, "xs"]}>
                {createdAt
                  ? new Date(createdAt).toLocaleDateString(undefined, {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })
                  : null}
              </Text>
            </Box>
            <HStack justifyContent={"space-between"}>
              {duration ? (
                <Button
                  size={"xs"}
                  variant={"ghost"}
                  colorScheme="whiteAlpha"
                  color={"#FFF"}
                  leftIcon={<LuClock />}
                >
                  {duration} duration
                </Button>
              ) : null}
            </HStack>
          </Box>
        </Box>
      </Link>
    </>
  );
};

export default VideoCard;
