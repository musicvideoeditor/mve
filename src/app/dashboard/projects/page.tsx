import ProjectCard from "@/components/dashboard/project/ProjectCard";
import { Box, Grid, Text } from "@chakra-ui/react";
import Link from "next/link";
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
        <Link href="/dashboard/new-project">
          <Box
            p={6}
            bgColor={"#FFF"}
            rounded={16}
            display={"flex"}
            flexDir={"column"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <FaPlus fontSize={32} />
            <Text fontWeight={"semibold"} mt={4} textAlign={"center"} mb={8}>
              New Project
            </Text>
          </Box>
        </Link>
      </Grid>
    </>
  );
};

export default page;
