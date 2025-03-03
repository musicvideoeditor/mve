"use client";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  CircularProgress,
  FormLabel,
  HStack,
  IconButton,
  Input,
  Stack,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { useRef, useState, useEffect } from "react";
import { MdReply } from "react-icons/md";
import VideoFrame from "@/components/dashboard/video/VideoFrame";
import { FaDownload, FaShareSquare } from "react-icons/fa";
import { BsStopwatch } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from "@/lib/redux/store";
import InfoCard from "@/components/common/InfoCard";
import UserComment from "@/components/dashboard/video/UserComment";
import { fetchVideoInfo } from "@/lib/redux/features/project/video/video-slice";
import { addVideoComment, fetchVideoComments } from "@/lib/redux/features/project/video/comment-slice";
import ReactPlayer from 'react-player'

const page = ({
  params,
}: {
  params: { videoId: string; projectId: string };
}) => {
  const toast = useToast();
  const ref = useRef(false)
  const dispatch = useAppDispatch();

  const video = useAppSelector((state) => state.videoReducer);
  const comments = useAppSelector((state) => state.commentsReducer);

  const [comment, setComment] = useState("");
  const [includeTimestamp, setIncludeTimestamp] = useState(false);
  const [timeStamp, setTimeStamp] = useState({ minutes: 0, seconds: 0 });

  useEffect(() => {
    if (ref.current) return;
    dispatch(fetchVideoInfo(params.videoId));
    dispatch(fetchVideoComments(params.videoId));
    ref.current = true;
  }, []);

  async function postComment (){
    try {
      await dispatch(addVideoComment({videoId: params.videoId, data: {comment, includeTimestamp, timeStamp}}));
      setComment("");
      setIncludeTimestamp(false);
      setTimeStamp({ minutes: 0, seconds: 0 });
    } catch (error: any) {
      toast({
        status: "error",
        description: error?.message,
      });
    }
  }

  if (video.loading) {
    return (
      <Box p={4}>
        <VStack
          w={"full"}
          h={["80vh"]}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <CircularProgress color={"orange"} isIndeterminate />
          <Text fontSize={"sm"}>Loading</Text>
        </VStack>
      </Box>
    );
  }

  if (video.error) {
    return (
      <Box p={4}>
        <InfoCard
          ctaLabel="Go Back"
          ctaUrl={`/dashboard/projects/${params.projectId}`}
          subtitle={"We could not find this video"}
        />
      </Box>
    );
  }

  return (
    <>
      <Text fontSize={"xl"} fontWeight={"bold"}>
        {video.data?.name}
      </Text>
      <Stack w={"full"} justifyContent={"space-between"} gap={4}>
        <HStack w={"full"} justifyContent={"space-between"} flex={5}>
          <Text fontSize={"sm"} w={"full"}>
            Project: {video.data?.project.name}
          </Text>
          <HStack w={"full"} justifyContent={"flex-end"} gap={0}>
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
      </Stack>
      <br />
      <Stack
        w={"full"}
        direction={["column", "row"]}
        alignItems={"flex-start"}
        gap={[0, 4]}
      >
        <Box w={"full"} flex={["unset", 6]}>
          <VideoFrame
            source={video.data?.source}
            url={
              video.data?.source === "local"
                ? video.data?.video?.url
                : video.data?.videoUrl
            }
            title="Your Video Title"
            showBookmarks={true}
          />
        </Box>

        <Box
          flex={["unset", 2]}
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
            {/* <Avatar name="Krunal Mali" size={"xs"} /> */}
            <Box w={"full"}>
              <Input
                w={"full"}
                variant={"unstyled"}
                placeholder="Type your feedback here..."
                fontSize={"xs"}
                color={"#FFF"}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
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
                    onChange={(e) =>
                      setTimeStamp({
                        ...timeStamp,
                        minutes: Number(e.target.value),
                      })
                    }
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
                    onChange={(e) =>
                      setTimeStamp({
                        ...timeStamp,
                        seconds: Number(e.target.value),
                      })
                    }
                  />
                  <Checkbox
                    size={"sm"}
                    colorScheme="white"
                    bgColor={"#FFF"}
                    iconColor="#000"
                    rounded={2}
                    onChange={(e) => setIncludeTimestamp(e.target.checked)}
                  />
                </HStack>

                <Button
                  colorScheme="facebook"
                  bgColor={"purple.500"}
                  size={"xs"}
                  fontSize={8}
                  onClick={() => postComment()}
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
            Comments{" "}
            <span style={{ color: "#FFF" }}>{comments.data.length}</span>{" "}
            <span
              style={{
                position: "absolute",
                bottom: "-2px",
                left: "8px",
                width: "32px",
                padding: "1px",
                backgroundColor: "#815ad6",
              }}
            ></span>
          </Text>

          <Box maxH={"xs"} overflowY={"scroll"}>
            {comments.loading ? (
              <Box p={4}>
                <CircularProgress color={"orange"} isIndeterminate />
                <Text fontSize={"xs"}>Loading</Text>
              </Box>
            ) : (
              comments.data.map((comment: any, index: number) => {
                return <UserComment key={index} {...comment} />;
              })
            )}
          </Box>
        </Box>
      </Stack>
    </>
  );
};

export default page;
