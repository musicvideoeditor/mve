import { Avatar, Box, HStack, Text } from "@chakra-ui/react";
import React from "react";

const CarouselSlide = () => {
  return (
    <>
      <Box w={'full'}>
        <Box h={["xs", "sm"]} rounded={8} bgColor={"#333"} overflow={"hidden"}>
          <iframe
            width={"100%"}
            height={"100%"}
            className="embla__slide__img"
            src="https://www.youtube.com/embed/-LfC5CL1sIs?modestbranding=1&autohide=1&showinfo=0&controls=0&rel=0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope;"
          ></iframe>
        </Box>
        <HStack
          w={"max-content"}
          mx={"auto"}
          p={2}
          mt={4}
          rounded={4}
          border={"1px solid #333"}
          bgColor={"#FFF"}
        >
          <Avatar size={"md"} src="https://bit.ly/sage-adebayo" />
          <Box>
            <Text fontSize={"sm"} fontWeight={"semibold"}>
              Project Name
            </Text>
            <Text fontSize={"xs"}>Company</Text>
          </Box>
        </HStack>
      </Box>
    </>
  );
};

export default CarouselSlide;
