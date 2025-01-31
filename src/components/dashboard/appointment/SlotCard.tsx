import { Box, Input, Text } from "@chakra-ui/react";
import React from "react";

const SlotCard = ({
  from,
  to,
  isDisabled,
  isSelected,
  onClick,
}: {
  from?: string;
  to?: string;
  isSelected?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
}) => {
  if (isDisabled) {
    return (
      <Input
        py={2}
        px={12}
        border={"1px solid"}
        borderRadius={4}
        fontSize={"sm"}
        borderColor="gray.100"
        bg="gray.100"
        isDisabled={true}
        value={`${from?.slice(0, 5)}-${to?.slice(0, 5)}`}
      />
    );
  }
  return (
    <Box
      py={2}
      px={12}
      border={"1px solid"}
      borderRadius={6}
      cursor={"pointer"}
      fontSize={"sm"}
      borderColor={isSelected ? "whatsapp.400" : "#000"}
      bg={isSelected ? "whatsapp.50" : "#FFF"}
      _hover={{ bg: "twitter.50" }}
      onClick={onClick}
    >
      <Text>
        {from?.slice(0, 5)}-{to?.slice(0, 5)}
      </Text>
    </Box>
  );
};

export default SlotCard;
