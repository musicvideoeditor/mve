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
        <Grid
          templateColumns={["repeat(1,1fr)", "repeat(2,1fr)", "repeat(4,1fr)"]}
          gap={4}
        >
          <ProjectCard name="Damodarstakam" progress={"1/4"} />
          <ProjectCard
            name="Vrindavan Pyaro Vrindavan"
            subtitle="Indresh Upadhyay"
            coverImg="/temp/mountain.jpg"
          />
          <ProjectCard
            name="Mere Banke Bihari Laal"
            subtitle="Madhavas"
            coverImg="/temp/mountain2.jpg"
            progress={"3/4"}
          />
          <ProjectCard name="Damodarstakam" />
          <ProjectCard
            name="Vrindavan Pyaro Vrindavan"
            subtitle="Indresh Upadhyay"
            coverImg="/temp/mountain.jpg"
          />
          <ProjectCard
            name="Mere Banke Bihari Laal"
            subtitle="Madhavas"
            coverImg="/temp/mountain2.jpg"
            progress={"4/4"}
          />
          <GridItem
            bgColor={"#FFF"}
            rounded={16}
            overflow={"hidden"}
            pos={"relative"}
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
      </Box>
    </>
  );
};

export default page;
