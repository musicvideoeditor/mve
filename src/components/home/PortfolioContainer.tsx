import { Box, Text } from "@chakra-ui/react";
import React from "react";
import Carousel from "./Carousel";

const PortfolioContainer = () => {
  return (
    <>
      {/* Portfolio Carousel */}
      <Box
        w={["full"]}
        p={[8, 8, 16]}
        bgColor={"#c2e6ff"}
        minH={["50vh", "85vh"]}
        id="portfolio"
      >
        <>
          <Text
            textAlign={"center"}
            fontSize={["2xl", "3xl"]}
            fontWeight={"bold"}
            className="mont-bold"
          >
            Recent videos from our team
          </Text>

          <br />
          <br />
          <Carousel />
        </>
      </Box>
    </>
  );
};

export default PortfolioContainer;
