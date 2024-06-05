"use client";

import Navbar from "@/components/common/Navbar";
import CustomContainer from "@/components/custom/CustomContainer";
import FaqsContainer from "@/components/home/FaqsContainer";
import Plan from "@/components/home/Plan";
import StepButton from "@/components/home/StepButton";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Select,
  Stack,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { FaArrowRight, FaCircleArrowRight } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";

export default function Home() {
  return (
    <>
      <Navbar />
      <Box
        w={["full"]}
        p={[4, 8, 16]}
        bgColor={"#ffe6e6"}
        minH={["auto", "85vh"]}
      >
        <CustomContainer></CustomContainer>
      </Box>

      <Box w={["full"]} p={[4, 8, 16]} bgColor={"#fff"}>
        <CustomContainer>
          <Stack
            direction={["column", "row"]}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <VStack>
              <Text fontSize={"xl"} fontWeight={"bold"}>
                Get your Music Video Edited starting at just
              </Text>
              <HStack alignItems={"center"} justifyContent={"center"} gap={4}>
                <Text fontSize={"xl"} fontWeight={"bold"} as={"s"}>
                  ₹30,000
                </Text>
                <Text fontSize={"3xl"} fontWeight={"bold"} color={"red"}>
                  ₹10,000
                </Text>
              </HStack>
              <Text fontSize={"xs"} color={"gray.600"}>
                *Limited seats available for this offer, check yours!
              </Text>
            </VStack>

            <VStack>
              <Button
                w={56}
                colorScheme="red"
                variant={"solid"}
                px={4}
                py={6}
                leftIcon={<MdArrowOutward />}
              >
                Get Started
              </Button>
              <Button
                w={56}
                colorScheme="black"
                variant={"outline"}
                px={4}
                py={6}
              >
                Show me how it works
              </Button>
            </VStack>
          </Stack>
        </CustomContainer>
      </Box>

      <Box
        w={["full"]}
        p={[4, 8, 16]}
        bgColor={"#c2e6ff"}
        minH={["auto", "85vh"]}
      >
        <CustomContainer>
          <Text textAlign={"center"} fontSize={"3xl"} fontWeight={"bold"}>
            Recent videos from our team
          </Text>
        </CustomContainer>
      </Box>

      <Box w={["full"]} p={[4, 8]} bgColor={"#fff"}>
        <CustomContainer></CustomContainer>
      </Box>

      <Box w={["full"]} p={[4, 8, 16]} bgColor={"#fff5c7"}>
        <CustomContainer>
          <Text textAlign={"center"} fontSize={"3xl"} fontWeight={"bold"}>
            Plans & Pricing
          </Text>
          <br />
          <br />
          <br />
          <Stack direction={["column", "row"]} gap={8}>
            <Plan
              name="Video Editing"
              price={20000}
              description="For videos that need to come alive"
              features={[
                "1st cut in 2 Days",
                "Final cut in 2 Days",
                "2 Revisions",
                "Motion Graphics",
              ]}
            />
            <Plan
              bgColor="#ffc4dd"
              name="Color Grading"
              price={10000}
              description="For videos that aim for cinematic color quality"
              features={[
                "1st cut in 2 Days",
                "Final cut in 2 Days",
                "1 Revisions",
                "Chat Support",
              ]}
            />
            <Plan
              bgColor="#b2fa5f"
              name="Complete Editing"
              price={10000}
              cancelledPrice={30000}
              description="Everything from editing to color grading and motion graphics"
              features={[
                "Video Editing",
                "Color Grading",
                "Motion Graphics",
                "3 Revisions",
              ]}
            />
            <Box w={["full", "64"]} alignSelf={"flex-end"}>
              <Box
                p={4}
                w={"full"}
                bgColor={"#fcd808"}
                border={"1px solid #000"}
                rounded={8}
              >
                <Text
                  fontSize={"sm"}
                  fontWeight={"semibold"}
                  textAlign={"center"}
                >
                  Got any VFX work to tackle?
                </Text>
              </Box>
              <Box
                mt={4}
                p={4}
                w={"full"}
                bgColor={"#ffef94"}
                border={"1px solid #000"}
                boxShadow={"-4px 4px 0px #333"}
                rounded={8}
              >
                <Text
                  fontSize={"sm"}
                  fontWeight={"semibold"}
                  textAlign={"center"}
                >
                  Need just Motion Graphics?
                </Text>
              </Box>
              <Box
                mt={4}
                w={"full"}
                bgColor={"#fff"}
                border={"1px solid #000"}
                overflow={"hidden"}
                rounded={8}
              >
                <Text
                  fontSize={"xs"}
                  fontWeight={"semibold"}
                  textAlign={"center"}
                  p={2}
                  bgColor={"#f7f8fa"}
                >
                  We are here, just{" "}
                  <span style={{ color: "#1776eb", fontWeight: "bold" }}>
                    CALL
                  </span>
                </Text>
                <Box w={"full"} p={4} minH={24}></Box>
              </Box>
            </Box>
          </Stack>
        </CustomContainer>
      </Box>

      <Box w={["full"]} p={[4, 8, 8]} bgColor={"#fff"}>
        <CustomContainer>
          <Text fontSize={"3xl"} fontWeight={"bold"} textAlign={"center"}>
            MVE hires top talent quickly without any headaches
          </Text>
          <Text fontSize={"xl"} textAlign={"center"} mt={2}>
            We hire top talent quickly without any headaches
          </Text>
        </CustomContainer>
      </Box>
      <Box p={2} bgColor={"#f5f5f5"}></Box>
      <Box w={["full"]} p={[4, 8, 8]} bgColor={"#e9e1fc"}>
        <CustomContainer>
          <Text textAlign={"center"} fontSize={"3xl"} fontWeight={"bold"}>
            How it works?
          </Text>
          <br />
          <br />
          <br />
          <Stack direction={["column", "row"]} w={"full"} gap={8}>
            <Box w={["full", "64"]}>
              <VStack>
                <StepButton step="1" />
                <StepButton step="2" />
                <StepButton step="3" />
                <StepButton step="4" />
                <StepButton step="5" />
              </VStack>
              <br />
              <Box
                p={4}
                px={6}
                w={"full"}
                bgColor={"#6547de"}
                color={"#fff"}
                border={"1px solid #000"}
                rounded={8}
                cursor={"pointer"}
              >
                <Text
                  fontSize={"sm"}
                  fontWeight={"semibold"}
                  textAlign={"center"}
                >
                  Start your journey with us!
                </Text>
              </Box>
            </Box>
          </Stack>
        </CustomContainer>
      </Box>

      <Box w={["full"]} p={[4, 8, 8]} bgColor={"#b2fa5f"}>
        <CustomContainer>
          <HStack justifyContent={"center"} gap={4}>
            <Text fontSize={"xl"} fontWeight={"bold"} textAlign={"center"}>
              Sign in to start your journey
            </Text>
            <Button colorScheme="red" border={"1px solid #000"} px={8}>
              Sign In
            </Button>
          </HStack>
        </CustomContainer>
      </Box>
      <Box p={2} bgColor={"#f5f5f5"}></Box>
      <Box w={"full"} p={[4, 8, 16]} bgColor={"#fcfbf5"}>
        <CustomContainer>
          <HStack justifyContent={"space-between"} gap={8}>
            <Box></Box>
            <Box maxW={["full", "45%"]}>
              <Text
                maxW={["full", "90%"]}
                fontWeight={"medium"}
                fontSize={["2xl", "3xl", "5xl"]}
              >
                Crafted your feedback conversation in One Inbox
              </Text>
              <Text
                fontSize={"sm"}
                color={"gray.600"}
                my={4}
                maxW={["full", "70%"]}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis porro, laborum quisquam doloremque corporis fugit.
              </Text>
              <br />
              <Button
                variant={"outline"}
                colorScheme="black"
                rounded={"full"}
                px={8}
                py={5}
                rightIcon={<FaArrowRight />}
              >
                Learn More
              </Button>
            </Box>
          </HStack>
        </CustomContainer>
      </Box>

      <Box w={"full"} p={[4, 8, 16]} bgColor={"#e1f7fc"}>
        <CustomContainer>
          <Text fontSize={["2xl", "3xl", "5xl"]} fontWeight={"bold"} mb={8}>
            Get in touch
          </Text>
          <HStack alignItems={'flex-start'}>
            <Box w={"full"} px={8} borderRight={["none", "1px solid #999"]}>
              <Text fontSize={"lg"} fontWeight={"semibold"} mb={2}>
                Send us a Message
              </Text>
              <Text fontSize={"sm"} color={"gray.600"}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis, nesciunt.
              </Text>
              <br />
              <FormControl w={"full"}>
                <HStack w={"full"} gap={6} pb={8}>
                  <Box w={"full"}>
                    <FormLabel fontSize={"sm"} mb={0}>
                      Name
                    </FormLabel>
                    <Input
                      variant={"flushed"}
                      borderBottom={"1px solid #000"}
                    />
                  </Box>
                  <Box w={"full"}>
                    <FormLabel fontSize={"sm"} mb={0}>
                      Email
                    </FormLabel>
                    <Input
                      variant={"flushed"}
                      borderBottom={"1px solid #000"}
                      type="email"
                    />
                  </Box>
                </HStack>
                <HStack w={"full"} gap={6} pb={8}>
                  <Box w={"full"}>
                    <FormLabel fontSize={"sm"} mb={0}>
                      Interested In
                    </FormLabel>
                    <Select
                      placeholder="Please select"
                      variant={"flushed"}
                      borderBottom={"1px solid #000"}
                    ></Select>
                  </Box>
                  <Box w={"full"}>
                    <FormLabel fontSize={"sm"} mb={0}>
                      Phone Number
                    </FormLabel>
                    <Input
                      variant={"flushed"}
                      borderBottom={"1px solid #000"}
                      type="email"
                    />
                  </Box>
                </HStack>
                <Box pb={8}>
                  <FormLabel fontSize={"sm"} mb={0}>
                    Message
                  </FormLabel>
                  <Textarea
                    variant={"flushed"}
                    borderBottom={"1px solid #000"}
                    h={28}
                    resize={"none"}
                  />
                </Box>
<HStack justifyContent={'flex-end'}>
  <Button colorScheme="teal" bgColor={'#000'} rounded={0} leftIcon={<FaArrowRight />}>Submit</Button>
</HStack>
              </FormControl>
              <br />
            </Box>
            <Box w={"full"} px={8}>
              <Text fontSize={"lg"} fontWeight={"semibold"} mb={2}>
                FAQ
              </Text>
              <br />
              <FaqsContainer />
            </Box>
          </HStack>
        </CustomContainer>
      </Box>
    </>
  );
}
