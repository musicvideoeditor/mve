import ProjectCard from "@/components/dashboard/project/ProjectCard";
import { Box, Grid, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";

const page = () => {

  return (
    <>
      <Grid
        templateColumns={[
          "repeat(2,1fr)",
          "repeat(2,1fr)",
          "repeat(3,1fr)",
          "repeat(4,1fr)",
        ]}
        gap={8}
        py={[8, 16]}
      >
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <Box
          p={6}
          bgColor={"#FFF"}
          rounded={16}
          display={"flex"}
          flexDir={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          as="a"
          href="/dashboard/new-project"
        >
          <FaPlus fontSize={32} />
          <Text fontWeight={"semibold"} mt={4}>
            New Project
          </Text>
        </Box>
      </Grid>
    </>
  );
};

export default page;
