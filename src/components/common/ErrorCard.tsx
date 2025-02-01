import { colors } from "@/lib/constants";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";

interface ErrorCardTypes {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaUrl?: string;
}

const ErrorCard = ({ title, subtitle, ctaLabel, ctaUrl }: ErrorCardTypes) => {
  return (
    <>
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
        <Text fontWeight={"semibold"} mt={2} color={"red"}>
          {title ?? "ERROR"}
        </Text>
        <Text fontSize={"xs"} mb={2}>
          {subtitle ?? "An error occured. Please try again."}
        </Text>
        <Button
          colorScheme="orange"
          bgColor={colors.orange}
          size={"sm"}
          rounded={"full"}
          as={"a"}
          href={ctaUrl ?? "/dashboard"}
        >
          {ctaLabel ?? "Go Back"}
        </Button>
      </Box>
    </>
  );
};

export default ErrorCard;
