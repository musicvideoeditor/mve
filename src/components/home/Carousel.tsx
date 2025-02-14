'use client'
import React from "react";
import { Avatar, Box, HStack, Text } from "@chakra-ui/react";
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "../custom/carousel/EmblaCarousel";
import { useAppSelector } from "@/lib/redux/store";

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };
const SLIDE_COUNT = 5;


export default function Carousel() {
  const SLIDES = useAppSelector(state => state.configReducer.data?.portfolio) ?? []

  return (
    <>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </>
  );
}
