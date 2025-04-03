"use client";
import InfoCard from "@/components/common/InfoCard";
import InviteModal from "@/components/dashboard/project/InviteModal";
import MemberCard from "@/components/dashboard/project/MemberCard";
import ProjectDescription from "@/components/dashboard/project/ProjectDescription";
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
  Text,
  Stack,
  VStack,
  HStack,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import { FiUserPlus } from "react-icons/fi";

const page = ({ params }: { params: { projectId: string } }) => {
  const ref = useRef(false);
  const dispatch = useAppDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
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
          <CircularProgress color={"orange"} isIndeterminate />
          <Text fontSize={"sm"}>Loading</Text>
        </VStack>
      </Box>
    );
  }

  if (project.error) {
    return (
      <Box p={4}>
        <InfoCard
          ctaLabel="Go Back"
          ctaUrl="/dashboard/projects"
          subtitle={"We could not find this project"}
        />
      </Box>
    );
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
                          // @ts-ignore
                          project={project.projectInfo}
                          documentId={video.documentId}
                          name={video.name}
                          source={video?.source}
                          createdAt={video.createdAt}
                          duration={video.duration}
                        />
                      )
                    )
                  : null}
                {project.projectInfo?.subscription?.revisionsLeft === 0 ? (
                  <GridItem>
                    <InfoCard
                      title="You have used all revisions"
                      subtitle="Buy more to continue"
                      ctaLabel="Buy Now"
                      ctaUrl={"#"}
                    />
                  </GridItem>
                ) : (
                  <GridItem>
                    <InfoCard
                      title="No Videos"
                      ctaLabel="Upload Now"
                      titleColor="#000"
                      iconUrl="/icons/upload.png"
                      ctaUrl={`/dashboard/projects/${project.projectInfo?.documentId}/upload`}
                    />
                  </GridItem>
                )}
              </Grid>
            </Box>
            <Box flex={2}>
              {project.projectInfo ? (
                <ProjectDescription
                  description={project.projectInfo?.description ?? ""}
                  projectId={project.projectInfo?.documentId}
                />
              ) : null}
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
                    onClick={onOpen}
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
                            documentId={member.documentId}
                            key={member?.user?.username}
                            name={member?.user?.name || member?.user?.username}
                            email={member?.user?.email}
                            isConfirmed={true}
                            isBlocked={member?.isBlocked}
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

        <InviteModal
          onClose={onClose}
          isOpen={isOpen}
          members={project.projectInfo?.members ?? []}
          projectId={project.projectInfo?.documentId ?? ""}
        />
      </>
    );
};

export default page;
