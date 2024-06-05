import { ParentProps } from "@/lib/props/common";
import { Container } from "@chakra-ui/react";
import React, { ReactNode } from "react";

const CustomContainer = ({ children }: ParentProps) => {
  return (
    <>
      <Container maxW={["full", "5xl", "6xl"]}>{children}</Container>
    </>
  );
};

export default CustomContainer;
