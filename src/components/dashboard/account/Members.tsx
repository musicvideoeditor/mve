import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  HStack,
  Switch,
  Table,
  Tbody,
  Td,
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
        <AccordionPanel pb={4} fontSize={"xs"}>
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
