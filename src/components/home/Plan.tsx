import { Box, Button, Hide, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import ZigzagBorder from "../extras/ZigzagBorder";

interface PlanProps {
  name: string;
  price: number;
  cancelledPrice?: number;
  description?: string;
  features?: Array<string>;
  bgColor?: string;
  badgeText?: string;
}

const Plan = ({
  name,
  price,
  cancelledPrice,
  description,
  features,
  bgColor,
  badgeText,
}: PlanProps) => {
  return (
    <>
      <Box
        pos={"relative"}
        p={[6, 10]}
        px={[6, 8]}
        w={["full", "64"]}
        roundedTop={"12"}
        roundedBottomLeft={["12", "none"]}
        border={"2px solid #000"}
        bgColor={bgColor || "#FFF"}
        borderBottom={["2px solid #000", "none"]}
      >
        {badgeText ? (
          <Box
            pos={"absolute"}
            top={2}
            right={2}
            px={2}
            py={1}
            bgColor={"#FFF"}
            boxShadow={"md"}
            fontSize={"8"}
          >
            {badgeText}
          </Box>
        ) : null}
        <Box minH={["auto", "80%"]}>
          <Text fontSize={"sm"} fontWeight={"semibold"} mb={2}>
            {name}
          </Text>
          <Box pos={"relative"}>
            {cancelledPrice ? (
              <Text
                pos={"absolute"}
                as={"s"}
                fontSize={"xs"}
                top={-2}
                left={4}
                fontWeight={"semibold"}
              >
                ₹{Number(cancelledPrice)?.toLocaleString("en-IN")}
              </Text>
            ) : null}
            <HStack mb={2}>
              <Text fontSize={"2xl"} fontWeight={"bold"} className="mont-bold">
                ₹{Number(price)?.toLocaleString("en-IN")}
              </Text>
              <Text fontSize={"sm"} fontWeight={"semibold"}>
                / project
              </Text>
            </HStack>
          </Box>
          <Text fontSize={"xs"}>{description}</Text>
          <br />
          <VStack
            w={"full"}
            alignItems={"flex-start"}
            justifyContent={"flex-start"}
            gap={2}
          >
            {features?.map((item, i) => (
              <HStack gap={2} alignItems={"center"} key={i}>
                <FaCheckCircle size={14} />
                <Text fontSize={"xs"}>{item}</Text>
              </HStack>
            ))}
          </VStack>
        </Box>

        <br />
        <HStack
          px={10}
          w={"full"}
          zIndex={9}
          bottom={[8, "unset"]}
          justifyContent={["flex-end", "center"]}
          pos={["absolute", "relative"]}
        >
          <Button
            colorScheme="black"
            variant={"outline"}
            w={[28, 48]}
            p={4}
            border={"2px"}
            fontSize={"sm"}
            _hover={{
              bgColor: "#222",
              color: "#FFF",
            }}
          >
            Book Slot
          </Button>
        </HStack>

        <Hide below="sm">
          <ZigzagBorder fill={bgColor} />
        </Hide>
      </Box>
    </>
  );
};

export default Plan;
