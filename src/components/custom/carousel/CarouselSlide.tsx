import { PortfolioType } from "@/lib/types/other";
import { Avatar, Box, HStack, Text } from "@chakra-ui/react";
import React from "react";

const CarouselSlide = (props: PortfolioType) => {
  return (
    <>
      <Box w={'full'}>
        <Box h={["xs", "sm"]} rounded={8} bgColor={"#333"} overflow={"hidden"}>
          <iframe
            width={"100%"}
            height={"100%"}
            className="embla__slide__img"
            src={props?.url}
            allow="accelerometer; autoplay; encrypted-media; gyroscope;"
          ></iframe>
        </Box>
        <HStack
          w={"max-content"}
          mx={"auto"}
          p={2}
          px={3}
          mt={4}
          rounded={4}
          border={"1px solid #333"}
          bgColor={"#FFF"}
        >
          <Avatar size={"md"} src={props?.logo?.url} />
          <Box>
            <Text fontSize={"sm"} fontWeight={"semibold"}>
              {props?.clientName}
            </Text>
            <Text fontSize={"xs"}>{props?.clientSubtitle}</Text>
          </Box>
        </HStack>
      </Box>
    </>
  );
};

export default CarouselSlide;
