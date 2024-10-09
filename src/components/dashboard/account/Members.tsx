import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Hide,
  HStack,
  Switch,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { HiOutlineVideoCamera } from "react-icons/hi";

const ProjectItem = () => {
  return (
    <>
      <AccordionItem>
        <AccordionButton borderBottom={"1px solid #CCC"} pl={0}>
          <HStack flex={1}>
            <HiOutlineVideoCamera fontSize={"20"} />
            <Box fontSize={"sm"} textAlign="left">
              Project Name
            </Box>
          </HStack>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4} fontSize={"xs"} px={[0, 2]}>
          <Hide below="sm">
            <Table
              size={"xs"}
              variant={"unstyled"}
              style={{ borderCollapse: "separate", borderSpacing: "0 8px" }}
            >
              <Thead>
                <Tr>
                  <Th>User</Th>
                  <Th>Email</Th>
                  <Th>Joined On</Th>
                  <Th textAlign={"center"}>Block/Unblock</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Sangam Kr</Td>
                  <Td>sangam@teamlancer.io</Td>
                  <Td>31 Aug, 2024</Td>
                  <Td textAlign={"center"}>
                    <Switch size={"sm"} colorScheme="gray" />
                  </Td>
                </Tr>
                <Tr>
                  <Td>Sangam Kr</Td>
                  <Td>sangam@teamlancer.io</Td>
                  <Td>31 Aug, 2024</Td>
                  <Td textAlign={"center"}>
                    <Switch size={"sm"} colorScheme="gray" />
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </Hide>
          <Hide above="sm">
            <Box p={3} rounded={4} bgColor={"#FFF"}>
              <HStack mb={1}>
                <Text>
                  <strong>User: </strong>
                </Text>
                <p>Sangam Kr</p>
              </HStack>

              <HStack mb={1}>
                <Text>
                  <strong>Email: </strong>
                </Text>
                <p>sangam@teamlancer.io</p>
              </HStack>

              <HStack mb={1}>
                <Text>
                  <strong>Joined On: </strong>
                </Text>
                <p>31 Aug, 2024</p>
              </HStack>

              <HStack>
                <Text>
                  <strong>Block/Unblock: </strong>
                </Text>
                <Switch size={"sm"} colorScheme="gray" />
              </HStack>
            </Box>
          </Hide>
        </AccordionPanel>
      </AccordionItem>
    </>
  );
};

const Members = () => {
  return (
    <>
      <Accordion allowToggle>
        <ProjectItem />
        <ProjectItem />
      </Accordion>
    </>
  );
};

export default Members;
