"use client";
import ProjectsGrid from "@/components/dashboard/home/ProjectsGrid";
import ProjectCard from "@/components/dashboard/project/ProjectCard";
import { colors } from "@/lib/constants";
import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";

const page = () => {
  return (
    <>
      <Box p={4}>
        <Text fontSize={"lg"} fontWeight={"semibold"} mb={4}>
          Your Projects
        </Text>

        <ProjectsGrid  />
      </Box>
    </>
  );
};

export default page;
