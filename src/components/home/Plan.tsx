import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
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
}

const Plan = ({
  name,
  price,
  cancelledPrice,
  description,
  features,
  bgColor,
}: PlanProps) => {
  return (
    <>
      <Box
        pos={"relative"}
        p={10} px={8}
        w={["full", "64"]}
        roundedTop={"12"}
        border={"2px solid #000"}
        // className="zigzag-border"
        bgColor={bgColor || "#FFF"}
        borderBottom={"none"}
      >
        <Box minH={"80%"}>
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
        <HStack w={"full"} justifyContent={"center"} zIndex={9}>
          <Button
            colorScheme="black"
            variant={"outline"}
            w={48}
            p={4}
            fontSize={"sm"}
            _hover={{
              bgColor: "#222",
              color: "#FFF",
            }}
          >
            Book Slot
          </Button>
        </HStack>

        <ZigzagBorder fill={bgColor} />
      </Box>
    </>
  );
};

export default Plan;
