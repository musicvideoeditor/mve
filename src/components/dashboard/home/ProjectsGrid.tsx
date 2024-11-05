import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import ProjectCard from "../project/ProjectCard";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";
import { colors } from "@/lib/constants";

const ProjectsGrid = () => {
  return (
    <>
      <Grid
        templateColumns={["repeat(1,1fr)", "repeat(2,1fr)", "repeat(4,1fr)"]}
        gap={4}
      >
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
    </>
  );
};

export default ProjectsGrid;
