"use client";
import { Box } from "@chakra-ui/react";
import React from "react";

const Carousel = () => {
  return (
    <>
      <Box className="carousel">
        <Box
          rounded={8}
          bgColor={"#333"}
          overflow={"hidden"}
          className="carousel_item"
          style={{ "--i": 1 }}
        >
          <iframe
            src="https://www.youtube.com/embed/-LfC5CL1sIs?si=kxZY5wwhXdaC5W3W"
            width={"100%"}
            height={"100%"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </Box>
        <Box
          rounded={8}
          bgColor={"#333"}
          overflow={"hidden"}
          className="carousel_item"
          style={{ "--i": 2 }}
        >
          <iframe
            src="https://www.youtube.com/embed/-LfC5CL1sIs?si=kxZY5wwhXdaC5W3W"
            width={"100%"}
            height={"100%"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </Box>
        <Box
          rounded={8}
          bgColor={"#333"}
          overflow={"hidden"}
          className="carousel_item"
          style={{ "--i": 3 }}
        >
          <iframe
            src="https://www.youtube.com/embed/-LfC5CL1sIs?si=kxZY5wwhXdaC5W3W"
            width={"100%"}
            height={"100%"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </Box>
        <Box
          rounded={8}
          bgColor={"#333"}
          overflow={"hidden"}
          className="carousel_item"
          style={{ "--i": 4 }}
        >
          <iframe
            src="https://www.youtube.com/embed/-LfC5CL1sIs?si=kxZY5wwhXdaC5W3W"
            width={"100%"}
            height={"100%"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </Box>
        <Box
          rounded={8}
          bgColor={"#333"}
          overflow={"hidden"}
          className="carousel_item"
          style={{ "--i": 5 }}
        >
          <iframe
            src="https://www.youtube.com/embed/-LfC5CL1sIs?si=kxZY5wwhXdaC5W3W"
            width={"100%"}
            height={"100%"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </Box>
        <Box
          rounded={8}
          bgColor={"#333"}
          overflow={"hidden"}
          className="carousel_item"
          style={{ "--i": 6 }}
        >
          <iframe
            src="https://www.youtube.com/embed/-LfC5CL1sIs?si=kxZY5wwhXdaC5W3W"
            width={"100%"}
            height={"100%"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </Box>
        <Box
          rounded={8}
          bgColor={"#333"}
          overflow={"hidden"}
          className="carousel_item"
          style={{ "--i": 7 }}
        >
          <iframe
            src="https://www.youtube.com/embed/-LfC5CL1sIs?si=kxZY5wwhXdaC5W3W"
            width={"100%"}
            height={"100%"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </Box>
        <Box
          rounded={8}
          bgColor={"#333"}
          overflow={"hidden"}
          className="carousel_item"
          style={{ "--i": 8 }}
        >
          <iframe
            src="https://www.youtube.com/embed/-LfC5CL1sIs?si=kxZY5wwhXdaC5W3W"
            width={"100%"}
            height={"100%"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </Box>
      </Box>
    </>
  );
};

export default Carousel;
