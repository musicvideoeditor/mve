import { Box, HStack, Select, Switch, Text } from "@chakra-ui/react";
import React from "react";

const Settings = () => {
  return (
    <>
      <Box mb={2} py={2} borderBottom={"1px solid #CCC"}>
        <HStack justifyContent={"space-between"}>
          <Text fontSize={"xs"} fontWeight={"semibold"}>
            Notification Toggle
          </Text>
          <Switch size={"sm"} colorScheme="gray" />
        </HStack>
      </Box>
      <Box mb={2} py={2} borderBottom={"1px solid #CCC"}>
        <HStack justifyContent={"space-between"}>
          <Text fontSize={"xs"} fontWeight={"semibold"}>
            Receive Notifications On
          </Text>
          <Select
            size={"xs"}
            w={"max-content"}
            fontSize={"xs"}
            py={"2px"}
            px={"2px"}
            rounded={4}
            bgColor={"gray.300"}
          >
            <option value="email">Email</option>
            <option value="sms">SMS</option>
          </Select>
        </HStack>
      </Box>
      <Box mb={2} py={2} borderBottom={"1px solid #CCC"}>
        <HStack justifyContent={"space-between"}>
          <Text fontSize={"xs"} fontWeight={"semibold"}>
            Require Passphrase for Public Shares
          </Text>
          <Switch size={"sm"} colorScheme="gray" />
        </HStack>
      </Box>
      <Box mb={2} py={2} borderBottom={"1px solid #CCC"}>
        <HStack justifyContent={"space-between"}>
          <Text fontSize={"xs"} fontWeight={"semibold"}>
            Change Password
          </Text>
        </HStack>
      </Box>
    </>
  );
};

export default Settings;
