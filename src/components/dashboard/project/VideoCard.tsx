"use client";
import { Box, Button, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { LuClock } from "react-icons/lu";

interface VideoCardProps {
  name: string;
  uploadDate?: string;
  coverImg?: string;
  duration?: number | string;
}

const VideoCard = ({
  name,
  coverImg,
  uploadDate,
  duration,
}: VideoCardProps) => {
  return (
    <>
      <Link href={"/dashboard/projects/dsgsdg/videos/dsgsdg"} target="_blank">
        <Box
          bgImage={`url("${coverImg || "/abstract.jpg"}")`}
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
              <Text fontSize={[10, "xs"]}>20 July, 2024</Text>
            </Box>
            <HStack justifyContent={"space-between"}>
              <Button
                size={"xs"}
                variant={"ghost"}
                colorScheme="whiteAlpha"
                color={"#FFF"}
                leftIcon={<LuClock />}
              >
                07:53 duration
              </Button>
              <Button
                size={"xs"}
                variant={"ghost"}
                colorScheme="whiteAlpha"
                color={"#FFF"}
                leftIcon={<IoChatbubbleEllipses />}
              >
                8 comments
              </Button>
            </HStack>
          </Box>
        </Box>
      </Link>
    </>
  );
};

export default VideoCard;
