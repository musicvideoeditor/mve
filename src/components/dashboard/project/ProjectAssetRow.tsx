import {
  Avatar,
  Box,
  Button,
  Checkbox,
  HStack,
  Td,
  Text,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { LuFile } from "react-icons/lu";

const ProjectAssetRow = () => {
  return (
    <>
      <Tr>
        <Td>
          <Checkbox borderColor={"#BBB"}></Checkbox>
        </Td>
        <Td>
          <HStack>
            <Box
              boxSize={8}
              rounded={6}
              border={"1px solid #BBB"}
              display={"grid"}
              placeContent={"center"}
            >
              <LuFile />
            </Box>
            <Box>
              <Text fontSize={"xs"} fontWeight={"semibold"}>
                File name
              </Text>
              <Text fontSize={"10"}>200 KB</Text>
            </Box>
          </HStack>
        </Td>
        <Td fontSize={"xs"}>Jan 4, 2022</Td>
        <Td fontSize={"xs"}>Jan 4, 2022</Td>
        <Td>
          <HStack>
            <Avatar src="https://bit.ly/dan-abramov" size={"sm"} />
            <Box>
              <Text fontSize={"xs"} fontWeight={"semibold"}>
                User name
              </Text>
              <Text fontSize={"10"}>user@email.com</Text>
            </Box>
          </HStack>
        </Td>
        <Td textAlign={'center'}>
            <Button
              size={"xs"}
              fontWeight={"medium"}
              border={"1px solid #BBB"}
              variant={"ghost"}
            >
              Delete
            </Button>
        </Td>
      </Tr>
    </>
  );
};

export default ProjectAssetRow;
