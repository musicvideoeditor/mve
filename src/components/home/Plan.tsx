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
        p={10}
        w={["full", "64"]}
        roundedTop={"12"}
        border={"1px solid #000"}
        // className="zigzag-border"
        bgColor={bgColor || "#FFF"}
        borderBottom={"none"}
      >
        <Box minH={"80%"}>
          <Text fontSize={"sm"} fontWeight={"semibold"}>
            {name}
          </Text>
          {cancelledPrice ? (
            <Text as={"s"} fontWeight={"semibold"}>
              ₹{Number(cancelledPrice)?.toLocaleString("en-IN")}
            </Text>
          ) : null}
          <HStack mb={2}>
            <Text fontSize={"2xl"} fontWeight={"bold"}>
              ₹{Number(price)?.toLocaleString("en-IN")}
            </Text>
            <Text fontSize={"sm"} fontWeight={"semibold"}>
              / project
            </Text>
          </HStack>
          <Text fontSize={"sm"}>{description}</Text>
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
        <HStack w={"full"} justifyContent={"center"}>
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
