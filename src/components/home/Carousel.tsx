import React from "react";
import { Avatar, Box, HStack, Text } from "@chakra-ui/react";
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "../custom/carousel/EmblaCarousel";

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());


export default function Carousel() {
  return (
    <>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </>
  );
}
