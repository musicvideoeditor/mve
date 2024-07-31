"use client";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
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
import { BsStopwatch } from "react-icons/bs";

const ProjectUpdates = () => {
  const [intent, setIntent] = useState("");
  const [showBookmarks, setShowBookmarks] = useState(true);

  return (
    <>
      <Text fontSize={"xl"} fontWeight={"bold"}>
        Project Name
      </Text>
      <HStack justifyContent={"space-between"} gap={4}>
        <HStack justifyContent={"space-between"} flex={5}>
          <Text fontSize={'sm'}>ID: PROJ1234</Text>
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
          p={3}
          bgColor={"#1d2729"}
          color={"#FFF"}
          h={"100%"}
        >
          <HStack
            alignItems={"flex-start"}
            justifyContent={"flex-start"}
            mb={2}
          >
            <Avatar name="Krunal Mali" size={"xs"} />
            <Box w={"full"}>
              <Input
                w={"full"}
                variant={"unstyled"}
                placeholder="Type your feedback here..."
                fontSize={"xs"}
              />
              <HStack justifyContent={"space-between"} mt={4}>
                <HStack
                  p={"2px"}
                  py={"1px"}
                  fontSize={"xs"}
                  bgColor={"gray.500"}
                  rounded={4}
                  gap={1}
                >
                  <BsStopwatch fontSize={"10"} fontWeight={"bold"} />
                  <Input
                    variant={"unstyled"}
                    w={3}
                    size={"xs"}
                    fontSize={8}
                    p={0}
                    color={"#FFF"}
                    placeholder="00"
                    defaultValue={"00"}
                  />
                  <Text size={"xs"} color={"#FFF"}>
                    :
                  </Text>
                  <Input
                    variant={"unstyled"}
                    w={3}
                    size={"xs"}
                    fontSize={8}
                    p={0}
                    color={"#FFF"}
                    placeholder="00"
                    defaultValue={"00"}
                  />
                  <Checkbox
                    size={"sm"}
                    colorScheme="white"
                    bgColor={"#FFF"}
                    iconColor="#000"
                    rounded={2}
                  />
                </HStack>

                <Button
                  colorScheme="facebook"
                  bgColor={"purple.500"}
                  size={"xs"}
                  fontSize={8}
                >
                  Add Feedback
                </Button>
              </HStack>
            </Box>
          </HStack>
          <Text
            pl={2}
            my={4}
            fontSize={"xs"}
            color={"gray.400"}
            pos={"relative"}
          >
            Comments <span style={{ color: "#FFF" }}>2</span>{" "}
            <span
              style={{
                position: "absolute",
                bottom: '-2px',
                left: '8px',
                width: "32px",
                padding: "1px",
                backgroundColor: "#815ad6",
              }}
            ></span>
          </Text>

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
