"use client";
import {
  Avatar,
  Box,
  Button,
  FormLabel,
  HStack,
  Input,
  Switch,
  Text,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { MdReply } from "react-icons/md";
import VideoFrame from "@/components/dashboard/video/VideoFrame";

const ProjectUpdates = () => {
  const [intent, setIntent] = useState("");
  const [showBookmarks, setShowBookmarks] = useState(false);

  return (
    <>
      <HStack alignItems={"flex-start"} gap={4}>
        <Box flex={5}>
          <Text fontSize={"xx-large"} fontWeight={"bold"}>
            Project Name
          </Text>
          <Text>ID: PROJ1234</Text>
          <br />
          <VideoFrame
            src="https://www.youtube.com/embed/xooLMR6sPxk"
            title="Your Video Title"
            showBookmarks={showBookmarks}
          />
          <HStack w={"full"} alignItems={"center"}>
            {intent == "" ? (
              <HStack w={"full"} justifyContent={"space-between"}>
                <Text>
                  Have something to say to the editor? Put your comments.
                </Text>
                <Button
                  fontSize="xs"
                  fontWeight="500"
                  size={"sm"}
                  rounded={"full"}
                  colorScheme="facebook"
                  bgColor={"#6420AA"}
                  onClick={() => setIntent("comment")}
                >
                  Add Comment
                </Button>
              </HStack>
            ) : (
              <Box w={"full"}>
                <HStack
                  w={"full"}
                  justifyContent={"space-between"}
                  flexWrap={"wrap"}
                >
                  <Box>
                    <FormLabel
                      display="flex"
                      ms="4px"
                      fontSize="sm"
                      fontWeight="500"
                      mb="8px"
                    >
                      From
                    </FormLabel>
                    <HStack gap={6}>
                      <HStack alignItems={"flex-end"}>
                        <Input
                          variant="auth"
                          fontSize="sm"
                          ms={{ base: "0px", md: "0px" }}
                          type="number"
                          placeholder="00"
                          fontWeight="500"
                          size="md"
                          w={16}
                        />
                        <Text fontSize={"sm"}>min.</Text>
                      </HStack>
                      <HStack alignItems={"flex-end"}>
                        <Input
                          variant="auth"
                          fontSize="sm"
                          ms={{ base: "0px", md: "0px" }}
                          type="number"
                          placeholder="00"
                          fontWeight="500"
                          size="md"
                          w={16}
                        />
                        <Text fontSize={"sm"}>sec.</Text>
                      </HStack>
                    </HStack>
                  </Box>
                  <Box>
                    <FormLabel
                      display="flex"
                      ms="4px"
                      fontSize="sm"
                      fontWeight="500"
                      mb="8px"
                    >
                      To
                    </FormLabel>
                    <HStack gap={6}>
                      <HStack alignItems={"flex-end"}>
                        <Input
                          variant="auth"
                          fontSize="sm"
                          ms={{ base: "0px", md: "0px" }}
                          type="number"
                          placeholder="00"
                          fontWeight="500"
                          size="md"
                          w={16}
                        />
                        <Text fontSize={"sm"}>min.</Text>
                      </HStack>
                      <HStack alignItems={"flex-end"}>
                        <Input
                          variant="auth"
                          fontSize="sm"
                          ms={{ base: "0px", md: "0px" }}
                          type="number"
                          placeholder="00"
                          fontWeight="500"
                          size="md"
                          w={16}
                        />
                        <Text fontSize={"sm"}>sec.</Text>
                      </HStack>
                    </HStack>
                  </Box>
                </HStack>
                <br />
                <Box>
                  <FormLabel
                    display="flex"
                    ms="4px"
                    fontSize="sm"
                    fontWeight="500"
                    mb="8px"
                  >
                    Message
                  </FormLabel>
                  <Textarea
                    w={"full"}
                    h={"16"}
                    ms={{ base: "0px", md: "0px" }}
                    resize={"none"}
                    mb={8}
                  />
                  <br />
                  <HStack justifyContent={"flex-end"} pb={8}>
                    <Button
                      fontSize="xs"
                      fontWeight="500"
                      size={"sm"}
                      rounded={"full"}
                      onClick={() => setIntent("")}
                    >
                      Save Comment
                    </Button>
                  </HStack>
                </Box>
              </Box>
            )}
          </HStack>
        </Box>
        <Box flex={2} pos={'relative'}>
          <Box pos={'sticky'} top={0} w={"full"} rounded={12} p={6} bgColor={"#070F2B"} color={"#FFF"}>
            <HStack justifyContent={"space-between"} mb={4}>
              <Text fontSize={"lg"} fontWeight={"bold"}>
                Rececnt Activity
              </Text>
              <HStack justifyContent={"flex-end"}>
                <Text fontSize={"xs"}>Bookmarks</Text>
                <Switch onChange={(e) => setShowBookmarks(e.target.checked)} />
              </HStack>
            </HStack>
            <br />
            <Box mb={8}>
              <HStack alignItems={"flex-start"}>
                <Avatar name="Krunal Mali" size={"sm"} />
                <Box w={"full"}>
                  <Text fontWeight={"medium"} fontSize={"sm"}>
                    Krunal Mali (12 May, 2024)
                  </Text>
                  <Text color={"purple.400"} fontSize={"xs"}>
                    01:37-04:22
                  </Text>
                </Box>
              </HStack>
              <Text fontSize={"xs"} mt={4}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aspernatur veniam minus sunt labore voluptate, delectus
                architecto neque repellendus hic id? Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Aspernatur veniam minus sunt
                labore voluptate, delectus architecto neque repellendus hic id?
              </Text>
              <HStack w={"full"} justifyContent={"flex-end"} mt={1}>
                <Button
                  colorScheme="twitter"
                  variant={"ghost"}
                  size={"sm"}
                  rounded={"full"}
                  leftIcon={<MdReply />}
                >
                  Add Reply
                </Button>
              </HStack>
            </Box>
            <Box mb={8}>
              <HStack alignItems={"flex-start"}>
                <Avatar name="Sangam Kumar" size={"sm"} />
                <Box w={"full"}>
                  <Text fontWeight={"medium"} fontSize={"sm"}>
                    Sangam Kumar (12 May, 2024)
                  </Text>
                  <Text color={"purple.400"} fontSize={"xs"}>
                    03:51-04:22
                  </Text>
                </Box>
              </HStack>
              <Text fontSize={"xs"} mt={4}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aspernatur veniam minus sunt labore voluptate, delectus
                architecto neque?
              </Text>
              <HStack w={"full"} justifyContent={"flex-end"} mt={1}>
                <Button
                  colorScheme="twitter"
                  variant={"ghost"}
                  size={"sm"}
                  rounded={"full"}
                  leftIcon={<MdReply />}
                >
                  Add Reply
                </Button>
              </HStack>
            </Box>
          </Box>
        </Box>
      </HStack>
    </>
  );
};

export default ProjectUpdates;
