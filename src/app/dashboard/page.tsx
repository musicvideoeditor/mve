"use client";
import {
  Avatar,
  Box,
  Button,
  FormLabel,
  HStack,
  IconButton,
  Input,
  Switch,
  Text,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { MdReply } from "react-icons/md";
import VideoFrame from "@/components/dashboard/video/VideoFrame";
import { FiDownload } from "react-icons/fi";
import { FaDownload, FaShareSquare } from "react-icons/fa";

const ProjectUpdates = () => {
  const [intent, setIntent] = useState("");
  const [showBookmarks, setShowBookmarks] = useState(true);

  return (
    <>
      <Text fontSize={"xx-large"} fontWeight={"bold"}>
        Project Name
      </Text>
      <HStack justifyContent={"space-between"} gap={4}>
        <HStack justifyContent={"space-between"} flex={5}>
          <Text>ID: PROJ1234</Text>
          <HStack justifyContent={"flex-end"} gap={0}>
            <IconButton
              icon={<FaDownload />}
              variant={"ghost"}
              aria-label="download"
            />
            <IconButton
              icon={<FaShareSquare />}
              variant={"ghost"}
              aria-label="share"
            />
          </HStack>
        </HStack>
        <Box flex={2} w={"full"}></Box>
      </HStack>
      <br />
      <HStack alignItems={"flex-start"} gap={4}>
        <Box flex={6}>
          <VideoFrame
            src="https://www.youtube.com/embed/xooLMR6sPxk"
            title="Your Video Title"
            showBookmarks={showBookmarks}
          />
        </Box>

        <Box
          flex={2}
          rounded={12}
          p={6}
          bgColor={"#1d2729"}
          color={"#FFF"}
          h={"100%"}
        >
          <HStack justifyContent={"space-between"} mb={4}>
            <Text fontSize={"md"} fontWeight={"bold"}>
              Rececnt Activity
            </Text>
          </HStack>
          <br />
          <Box maxH={"xs"} overflowY={"scroll"}>
            <Box mb={8}>
              <HStack alignItems={"center"}>
                <Avatar name="Krunal Mali" size={"sm"} />
                <Text fontWeight={"medium"} fontSize={"sm"}>
                  Krunal Mali (12 May, 2024)
                </Text>
              </HStack>
              <Text fontSize={"xs"} mt={4}>
                <Text as={"span"} color={"purple.400"} fontSize={"xs"} pr={2}>
                  01:37
                </Text>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aspernatur veniam minus sunt labore voluptate, delectus
                architecto neque repellendus hic id? Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Aspernatur veniam minus sunt
                labore voluptate, delectus architecto neque repellendus hic id?
              </Text>
              <HStack w={"full"} justifyContent={"space-between"} mt={1}>
                <IconButton
                  colorScheme="twitter"
                  variant={"ghost"}
                  size={"sm"}
                  rounded={"full"}
                  _hover={{
                    bgColor: "blackAlpha.400",
                  }}
                  icon={<MdReply fontSize={16} />}
                  aria-label="reply"
                />
                <Text fontSize={"xs"} color={"gray.500"}>
                  5m ago
                </Text>
              </HStack>
            </Box>
            <Box mb={8}>
              <HStack alignItems={"center"}>
                <Avatar name="Krunal Mali" size={"sm"} />
                <Text fontWeight={"medium"} fontSize={"sm"}>
                  Krunal Mali (12 May, 2024)
                </Text>
              </HStack>
              <Text fontSize={"xs"} mt={4}>
                <Text as={"span"} color={"purple.400"} fontSize={"xs"} pr={2}>
                  01:37
                </Text>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aspernatur veniam minus sunt labore voluptate, delectus
                architecto neque?
              </Text>
              <HStack w={"full"} justifyContent={"space-between"} mt={1}>
                <IconButton
                  colorScheme="twitter"
                  variant={"ghost"}
                  size={"sm"}
                  rounded={"full"}
                  _hover={{
                    bgColor: "blackAlpha.400",
                  }}
                  icon={<MdReply fontSize={16} />}
                  aria-label="reply"
                />
                <Text fontSize={"xs"} color={"gray.500"}>
                  5m ago
                </Text>
              </HStack>
            </Box>
          </Box>
        </Box>
      </HStack>
    </>
  );
};

export default ProjectUpdates;
