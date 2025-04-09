"use client";
import { Box, Grid, GridItem, Skeleton, Text } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import ProjectCard from "../project/ProjectCard";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";
import { colors } from "@/lib/constants";
import { useAppDispatch, useAppSelector } from "@/lib/redux/store";
import { fetchProjects } from "@/lib/redux/features/project/project-slice";

const ProjectsGrid = ({ length }: { length?: number }) => {
  const ref = useRef(false);
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.projectReducer.loading);
  const projects = useAppSelector((state) => state.projectReducer.projects);

  useEffect(() => {
    if (ref.current) return;
    dispatch(fetchProjects());
    ref.current = true;
  }, []);

  return (
    <>
      <Grid
        templateColumns={["repeat(1,1fr)", "repeat(2,1fr)", "repeat(4,1fr)"]}
        gap={4}
      >
        {isLoading && (
          <Skeleton rounded={6}>
            <ProjectCard
              documentId="dummy"
              name="dummy"
              subtitle="dummy"
              createdAt="dummy"
            />
          </Skeleton>
        )}

        {projects
          .slice(0, length ? length - 1 : projects.length)
          .map((project) => (
            <ProjectCard
              key={project.documentId}
              documentId={project.documentId}
              name={project.name}
              coverImg={"/temp/mountain.jpg"}
              mediaCount={project.videosCount}
              subtitle={project.description}
              createdAt={project.createdAt}
              statusTitle={project?.statusTitle}
              statusSubtitle={project?.statusSubtitle}
            />
          ))}
        <GridItem
          bgColor={"#FFF"}
          rounded={16}
          overflow={"hidden"}
          pos={"relative"}
          minH={40}
          className="new-project"
        >
          <Link
            href="/dashboard/new-project"
            style={{ position: "relative", zIndex: 5 }}
          >
            <Box
              h={"full"}
              display={"flex"}
              flexDir={"column"}
              alignItems={"center"}
              justifyContent={"center"}
              gap={4}
            >
              <FaPlus fontSize={28} />
              <Text fontWeight={"semibold"} textAlign={"center"}>
                New Project
              </Text>
            </Box>
          </Link>

          <Box
            boxSize={12}
            pos={"absolute"}
            bgColor={colors.orange}
            bottom={-20}
            left={-20}
            rounded={"full"}
            zIndex={0}
            className="new-project--sphere"
          ></Box>
        </GridItem>
      </Grid>
    </>
  );
};

export default ProjectsGrid;
