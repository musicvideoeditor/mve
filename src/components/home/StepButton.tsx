import { Box, HStack, Stack, Text } from "@chakra-ui/react";
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
        p={[3, 4]}
        px={[3, 6]}
        w={"full"}
        bgColor={"#fff"}
        border={"2px solid #000"}
        rounded={8}
        cursor={"pointer"}
      >
        <Stack
          w={"full"}
          direction={["column", "row"]}
          alignItems={['center']}
          justifyContent={["center", "space-between"]}
        >
          <Text fontSize={"sm"} fontWeight={"semibold"} textAlign={"center"}>
            Step {step}
          </Text>
          <FaCircleArrowRight size={20} color="#6547de" />
        </Stack>
      </Box>
    </>
  );
};

export default StepButton;
