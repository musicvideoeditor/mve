"use client";
import {
  Avatar,
  Box,
  HStack,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Logo from "../common/Logo";
import CustomContainer from "../custom/CustomContainer";

const Topbar = () => {
  return (
    <>
      <Box
        p={4}
        w={"full"}
        bgColor={"#FFF"}
        borderBottom={"1px solid"}
        borderBottomColor={"gray.200"}
      >
        <CustomContainer>
          <HStack>
            <Logo size={8} />
            <Spacer />
            <Menu>
              <MenuButton as={Box} cursor={"pointer"}>
                <HStack>
                  <Avatar
                    name="Sangam Kumar"
                    size={"sm"}
                    src="https://neurosciencenews.com/files/2023/05/ai-trust-human-neurosinecce.jpg"
                  />
                  <Text fontSize={"sm"} fontWeight={"semibold"}>
                    Sangam Kumar
                  </Text>
                </HStack>
              </MenuButton>
              <MenuList>
                <MenuGroup>
                  <MenuItem>My Account</MenuItem>
                  <MenuItem>Payments </MenuItem>
                </MenuGroup>
                <MenuDivider />
                <MenuGroup>
                  <MenuItem>Docs</MenuItem>
                  <MenuItem>FAQ</MenuItem>
                </MenuGroup>
                <MenuDivider />
                <MenuItem fontWeight="semibold" color="red">
                  Logout
                </MenuItem>
              </MenuList>
            </Menu>
          </HStack>
        </CustomContainer>
      </Box>
    </>
  );
};

export default Topbar;
