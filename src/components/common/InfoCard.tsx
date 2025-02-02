import { colors } from "@/lib/constants";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";

interface InfoCardTypes {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaUrl?: string;
  titleColor?: string;
  iconUrl?: string
}

const InfoCard = ({
  title,
  subtitle,
  ctaLabel,
  ctaUrl,
  titleColor,
  iconUrl
}: InfoCardTypes) => {
  return (
    <>
      <Box
        p={6}
        h={"full"}
        display={"flex"}
        flexDir={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        bgColor={"#FFF"}
        rounded={8}
        border={"1px solid #DADADA"}
      >
        <Image src={iconUrl ?? "/icons/sad.png"} w={6} />
        <Text fontWeight={"semibold"} mt={2} color={titleColor ?? "red"}>
          {title ?? "ERROR"}
        </Text>
        <Text fontSize={"xs"} mb={2}>
          {subtitle}
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

export default InfoCard;
