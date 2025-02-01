"use client";
import ErrorCard from "@/components/common/ErrorCard";
import MemberCard from "@/components/dashboard/project/MemberCard";
import VideoCard from "@/components/dashboard/project/VideoCard";
import { colors } from "@/lib/constants";
import { fetchProjectInfo } from "@/lib/redux/features/project/project-info-slice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/store";
import { ProjectMemberType, ProjectVideoType } from "@/lib/types/project";
import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Grid,
  GridItem,
  HStack,
  IconButton,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import { BsCloudArrowUpFill, BsEyeFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { FiUserPlus } from "react-icons/fi";
import { HiOutlineEye } from "react-icons/hi2";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { LuPen } from "react-icons/lu";

const page = ({ params }: { params: { projectId: string } }) => {
  const ref = useRef(false);
  const dispatch = useAppDispatch();
  const project = useAppSelector((state) => state.projectInfoReducer);

  useEffect(() => {
    if (ref.current) return;
    dispatch(fetchProjectInfo(params.projectId));
    ref.current = true;
  }, []);

  if (project.loading) {
    return (
      <Box p={4}>
        <VStack
          w={"full"}
          h={["80vh"]}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <CircularProgress />
          <Text fontSize={"sm"}>Loading</Text>
        </VStack>
      </Box>
    );
  }

  if (project.loading == false && project.projectInfo?.documentId == null) {
    <Box p={4}>
      <ErrorCard
        ctaLabel="Go Back"
        ctaUrl="/dashboard/projects"
        subtitle={"We could not find this project"}
      />
    </Box>;
  }

  if (project.projectInfo.documentId)
    return (
      <>
        <Box p={4}>
          <Text fontSize={"lg"} fontWeight={"semibold"} mb={4}>
            {project.projectInfo?.name} Videos
          </Text>
          <Stack direction={["column-reverse", "row"]} gap={8}>
            <Box flex={4}>
              <Grid
                templateColumns={["repeat(1,1fr)", "repeat(2,1fr)"]}
                gap={6}
              >
                {project?.projectInfo?.videos
                  ? project?.projectInfo?.videos?.map(
                      (video: ProjectVideoType, i) => (
                        <VideoCard
                          key={i}
                          name={video.name}
                          source={video?.source}
                          createdAt={video.createdAt}
                          duration={video.duration}
                        />
                      )
                    )
                  : null}
                {project.projectInfo?.subscription?.revisionsLeft === 0 && (
                  <GridItem>
                    <ErrorCard
                      title="You have used all revisions"
                      subtitle="Buy more to continue"
                      ctaLabel="Buy Now"
                      ctaUrl={"#"}
                    />
                  </GridItem>
                )}
              </Grid>
            </Box>
            <Box flex={2}>
              <Box
                p={4}
                bgColor={"#FFF"}
                border={"1px solid #DADADA"}
                rounded={8}
              >
                <HStack justifyContent={"space-between"} mb={4}>
                  <Text fontSize={"sm"} fontWeight={"semibold"}>
                    Overview
                  </Text>
                  <Button
                    colorScheme="orange"
                    variant={"ghost"}
                    size={"xs"}
                    rounded={"full"}
                    leftIcon={<LuPen />}
                  >
                    Edit
                  </Button>
                </HStack>
                <Text fontSize={"xs"} color={"gray.800"} mb={4}>
                  {project.projectInfo.description}
                </Text>
              </Box>
              <br />
              <Box
                p={4}
                bgColor={"#FFF"}
                border={"1px solid #DADADA"}
                rounded={8}
              >
                <HStack justifyContent={"space-between"} mb={4}>
                  <Text fontSize={"sm"} fontWeight={"semibold"}>
                    Members
                  </Text>
                  <Button
                    colorScheme="orange"
                    variant={"ghost"}
                    size={"xs"}
                    rounded={"full"}
                    leftIcon={<FiUserPlus />}
                  >
                    Invite
                  </Button>
                </HStack>
                <VStack
                  w={"full"}
                  alignItems={"flex-start"}
                  justifyContent={"flex-start"}
                >
                  {project.projectInfo?.members
                    ? project.projectInfo?.members?.map(
                        (member: ProjectMemberType) => (
                          <MemberCard
                            key={member?.username}
                            name={member?.name || member?.username}
                            email={member?.email}
                            permissions={["comment", "upload", "view"]}
                          />
                        )
                      )
                    : null}
                </VStack>
              </Box>
            </Box>
          </Stack>
        </Box>
      </>
    );
};

export default page;
