import MemberCard from "@/components/dashboard/project/MemberCard";
import VideoCard from "@/components/dashboard/project/VideoCard";
import { colors } from "@/lib/constants";
import {
  Avatar,
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  IconButton,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { BsCloudArrowUpFill, BsEyeFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { FiUserPlus } from "react-icons/fi";
import { HiOutlineEye } from "react-icons/hi2";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { LuPen } from "react-icons/lu";

const page = () => {
  return (
    <>
      <Box p={4}>
        <Text fontSize={"lg"} fontWeight={"semibold"} mb={4}>
          Damodarstakam Videos
        </Text>
        <Stack direction={["column-reverse", "row"]} gap={8}>
          <Box flex={4}>
            <Grid templateColumns={["repeat(1,1fr)", "repeat(2,1fr)"]} gap={6}>
              <VideoCard name="Video #135785" />
              <VideoCard name="Video #135786" />
              <VideoCard name="Video #135786" />
              <GridItem>
                <Box
                  h={"full"}
                  display={"flex"}
                  flexDir={"column"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  bgColor={"#FFF"}
                  rounded={8}
                  border={"1px solid #DADADA"}
                >
                  <Image src="/icons/sad.png" w={6} />
                  <Text fontWeight={"semibold"} mt={2}>
                    You have used all revisions
                  </Text>
                  <Text fontSize={'xs'} mb={2}>
                    Buy more to continue
                  </Text>
                  <Button
                    colorScheme="orange"
                    bgColor={colors.orange}
                    size={"sm"}
                    rounded={"full"}
                  >Buy Now</Button>
                </Box>
              </GridItem>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
                aspernatur id deserunt optio aliquid, aperiam, facere rem
                impedit, nesciunt nemo hic dolorum quaerat eaque assumenda
                excepturi eos. Nihil, cupiditate neque.
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
                <MemberCard
                  name="John Doe"
                  email="john@mail.com"
                  permissions={["comment", "upload", "view"]}
                />
                <MemberCard
                  name="Sangam Kr"
                  email="sangam@gmail.com"
                  permissions={["comment", "view"]}
                />
              </VStack>
            </Box>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default page;
