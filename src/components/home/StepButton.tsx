import { Box, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { FaCircleArrowRight } from "react-icons/fa6";

interface StepButtonProps {
  step?: string;
  onClick?: () => void;
  isActive?: boolean;
}

const StepButton = ({ step, onClick, isActive }: StepButtonProps) => {
  return (
    <>
      <Box
        p={4}
        px={6}
        w={"full"}
        bgColor={"#fff"}
        border={"1px solid #000"}
        rounded={8}
        cursor={"pointer"}
      >
        <HStack w={"full"} justifyContent={"space-between"}>
          <Text fontSize={"sm"} fontWeight={"semibold"} textAlign={"center"}>
            Step {step}
          </Text>
          <FaCircleArrowRight size={20} color="#6547de" />
        </HStack>
      </Box>
    </>
  );
};

export default StepButton;
