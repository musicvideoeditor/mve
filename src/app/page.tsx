"use client";
import Navbar from "@/components/common/Navbar";
import CustomContainer from "@/components/custom/CustomContainer";
import FaqsContainer from "@/components/home/FaqsContainer";
import Plan from "@/components/home/Plan";
import StepButton from "@/components/home/StepButton";
import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  FormControl,
  FormLabel,
  Hide,
  HStack,
  Image,
  Input,
  Select,
  SkeletonCircle,
  SkeletonText,
  Stack,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import Marquee from "react-fast-marquee";
import { FaArrowRight, FaCircleArrowRight } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import "swiper/swiper-bundle.css";
import Link from "next/link";
import Carousel from "@/components/home/Carousel";
import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/redux/store";
import { fetchHomeConfig } from "@/lib/redux/features/config-slice";
import LogoMarquee from "@/components/home/LogoMarquee";
import PlansContainer from "@/components/home/PlansContainer";
import PortfolioContainer from "@/components/home/PortfolioContainer";
import Footer from "@/components/common/Footer";

export default function Home() {
  const ref = useRef(false);
  const dispatch = useAppDispatch();
  const config = useAppSelector((state) => state.configReducer);

  useEffect(() => {
    if (ref.current) return;
    dispatch(fetchHomeConfig());
    ref.current = true;
  }, []);

  if (config.loading) {
    return (
      <Box>
        <Navbar />
        <VStack
          w={"full"}
          h={["80vh", "80vh"]}
          gap={4}
          alignItems={"center"}
          justifyContent={"center"}
          p={[4, 8, 16]}
        >
          <CircularProgress isIndeterminate />
          <Text>Loading</Text>
        </VStack>
      </Box>
    );
  }

  return (
    <>
      <Navbar />
      <Box w={["full"]} px={[8, 8, 16]} bgColor={"#ffe6e6"}>
        <CustomContainer>
          <HStack
            pos={"relative"}
            w={"full"}
            h={["55vh", "75vh", "75vh", "75vh", "75vh"]}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Image
              pos={"relative"}
              src="/hero.png"
              w={["full", "3xl", "3xl"]}
              top={8}
            />
          </HStack>
        </CustomContainer>
      </Box>

      {/* Offer banner */}
      {config?.data?.config?.showOfferSection ? (
        <Box w={["full"]} p={[8, 8, 16]} bgColor={"#fff"}>
          <CustomContainer>
            <Stack
              direction={["column", "row"]}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <VStack gap={0}>
                <Text
                  fontSize={"2xl"}
                  fontWeight={"bold"}
                  className="gothic-bold"
                  textAlign={"center"}
                >
                  Get your Music Video Edited starting at just
                </Text>
                <HStack
                  alignItems={"center"}
                  justifyContent={"center"}
                  gap={4}
                  mt={[4, 2]}
                >
                  <Text
                    fontSize={"xl"}
                    fontWeight={"bold"}
                    as={"s"}
                    className="mont-bold"
                  >
                    ₹30,000
                  </Text>
                  <Text
                    fontSize={"3xl"}
                    fontWeight={"bold"}
                    color={"red.600"}
                    className="mont-bold"
                  >
                    ₹10,000*
                  </Text>
                </HStack>
                <Text
                  fontSize={["xs", "sm"]}
                  fontWeight={["semibold", "medium"]}
                  color={"red.600"}
                  textAlign={"center"}
                >
                  *Limited seats available for this offer, check yours!
                </Text>
              </VStack>

              <Stack direction={["row", "column"]} mt={[4, 2]}>
                <Button
                  w={[40, 56]}
                  colorScheme="red"
                  bgColor={"#ff3b3b"}
                  variant={"solid"}
                  px={2}
                  py={6}
                  leftIcon={<MdArrowOutward fontSize={20} />}
                  className="gothic-bold"
                  fontSize={["xs", "sm"]}
                  as={"a"}
                  href="/auth/register"
                >
                  Get Started
                </Button>
                <Button
                  w={[40, 56]}
                  colorScheme="black"
                  variant={"outline"}
                  px={2}
                  py={6}
                  fontSize={["xs", "sm"]}
                  as={"a"}
                  href="#how-it-works"
                >
                  Show me how it works
                </Button>
              </Stack>
            </Stack>
          </CustomContainer>
        </Box>
      ) : null}

      <PortfolioContainer />

      <LogoMarquee />

      <PlansContainer />

      <Box w={["full"]} p={[4, 8, 8]} bgColor={"#fff"}>
        <CustomContainer>
          <Text
            fontSize={["2xl", "4xl"]}
            fontWeight={"bold"}
            textAlign={"center"}
            className="allroundgothic-bold"
          >
            MVE hires top talent quickly without any headaches
          </Text>
          <Text
            fontSize={["md", "xl"]}
            textAlign={"center"}
            mt={2}
            className="allroundgothic-medium"
          >
            We hire top talent quickly without any headaches
          </Text>
        </CustomContainer>
      </Box>

      <Box p={2} bgColor={"#f5f5f5"} id="how-it-works"></Box>
      <Box w={["full"]} p={[0, 8, 8]} py={[8, 8, 8]} bgColor={"#e9e1fc"}>
        <CustomContainer>
          <Text
            textAlign={"center"}
            fontSize={["2xl", "3xl"]}
            fontWeight={"bold"}
            className="mont-bold"
            mb={[8, 16]}
          >
            How it works?
          </Text>

          <Stack
            direction={["column", "row"]}
            w={"full"}
            alignItems={"center"}
            justifyContent={"space-between"}
            gap={8}
          >
            <Box w={["full", "64"]}>
              <Stack direction={["row", "column"]}>
                <StepButton step="1" />
                <StepButton step="2" />
                <StepButton step="3" />
                <StepButton step="4" />
                <StepButton step="5" />
              </Stack>
              <br />
              <Hide below="sm">
                <Link href={"/auth/login"}>
                  <Box
                    p={4}
                    px={6}
                    w={"full"}
                    bgColor={"#6547de"}
                    color={"#fff"}
                    border={"2px solid #000"}
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
                </Link>
              </Hide>
            </Box>
            <Box w={["full", "auto"]}>
              <Box
                w={["full", "lg"]}
                h={"xs"}
                border={"2px solid #000"}
                rounded={16}
                boxShadow={"-4px 4px 0px #333"}
                bgColor={"#FFF"}
              ></Box>
              <Hide above="sm">
                <br />
                <Link href={"/auth/login"}>
                  <Box
                    p={4}
                    px={6}
                    w={"full"}
                    bgColor={"#6547de"}
                    color={"#fff"}
                    border={"2px solid #000"}
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
                </Link>
              </Hide>
            </Box>
          </Stack>
        </CustomContainer>
      </Box>

      <Box w={["full"]} p={[4, 8, 8]} bgColor={"#b2fa5f"}>
        <CustomContainer>
          <Stack
            direction={["column", "row"]}
            alignItems={"center"}
            justifyContent={"center"}
            gap={4}
          >
            <Text
              fontSize={"2xl"}
              fontWeight={["bold"]}
              textAlign={"center"}
              className="allroundgothic-medium"
            >
              Sign in to start your journey
            </Text>
            <Button
              px={8}
              w={[48, "48"]}
              colorScheme="red"
              border={"1px solid #000"}
              className="mont-bold"
            >
              Sign In
            </Button>
          </Stack>
        </CustomContainer>
      </Box>

      <Box p={2} bgColor={"#f5f5f5"}></Box>
      <Box w={"full"} p={[8, 8, 16]} bgColor={"#fcfbf5"} pb={[8, 16]}>
        <CustomContainer>
          <HStack justifyContent={"space-between"} gap={8}>
            <Box display={["none", "block"]}>
              <Image src="/inbox.png" w={["full", "lg"]} />
            </Box>
            <Box maxW={["full", "45%"]}>
              <Text
                maxW={["full", "95%"]}
                fontWeight={"medium"}
                fontSize={["3xl", "5xl"]}
                className="gothic-bold"
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

      <Box w={"full"} p={[8, 8, 16]} bgColor={"#e1f7fc"}>
        <CustomContainer>
          <Text
            fontSize={["2xl", "3xl", "5xl"]}
            fontWeight={"700"}
            mb={8}
            className="mont-bold"
          >
            Get in touch
          </Text>
          <Stack direction={["column", "row"]} alignItems={"flex-start"}>
            <Box
              w={"full"}
              px={[0, 8]}
              borderRight={["none", "1px solid #999"]}
            >
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
                      borderBottom={"2px solid #000"}
                    />
                  </Box>
                  <Box w={"full"}>
                    <FormLabel fontSize={"sm"} mb={0}>
                      Email
                    </FormLabel>
                    <Input
                      variant={"flushed"}
                      borderBottom={"2px solid #000"}
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
                      borderBottom={"2px solid #000"}
                    ></Select>
                  </Box>
                  <Box w={"full"}>
                    <FormLabel fontSize={"sm"} mb={0}>
                      Phone Number
                    </FormLabel>
                    <Input
                      variant={"flushed"}
                      borderBottom={"2px solid #000"}
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
                    borderBottom={"2px solid #000"}
                    h={28}
                    resize={"none"}
                  />
                </Box>
                <HStack justifyContent={"flex-end"}>
                  <Button
                    colorScheme="teal"
                    bgColor={"#000"}
                    rounded={0}
                    leftIcon={<FaArrowRight />}
                  >
                    Submit
                  </Button>
                </HStack>
              </FormControl>
              <br />
            </Box>
            <Box w={"full"} px={[0, 8]} id="faq">
              <Text fontSize={"lg"} fontWeight={"semibold"} mb={2}>
                FAQ
              </Text>
              <br />
              <FaqsContainer />
            </Box>
          </Stack>
        </CustomContainer>
      </Box>

      <Footer />
    </>
  );
}
