"use client";
import { fetchProjects } from "@/lib/redux/features/project/project-slice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/store";
import { SingleProjectState } from "@/lib/types/project";
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
import React, { useEffect, useRef } from "react";
import { HiOutlineVideoCamera } from "react-icons/hi";

const ProjectItem = ({ name, members, author }: SingleProjectState) => {
  return (
    <>
      <AccordionItem>
        <AccordionButton borderBottom={"1px solid #CCC"} pl={0}>
          <HStack flex={1}>
            <HiOutlineVideoCamera fontSize={"20"} />
            <Box fontSize={"sm"} textAlign="left">
              {name}
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
                <Tr >
                  <Td>{author?.name}</Td>
                  <Td>{author?.email}</Td>
                  <Td>{author?.createdAt}</Td>
                  <Td textAlign={"center"}></Td>
                </Tr>
                {members?.map((member, i) => (
                  <Tr key={i}>
                    <Td>{member?.name}</Td>
                    <Td>{member?.email}</Td>
                    <Td>{member?.createdAt}</Td>
                    <Td textAlign={"center"}>
                      <Switch size={"sm"} colorScheme="gray" />
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Hide>
          <Hide above="sm">
          <Box  p={3} rounded={4} bgColor={"#FFF"} mb={2}>
                <HStack mb={1}>
                  <Text>
                    <strong>User: </strong>
                  </Text>
                  <p>{author?.name}</p>
                </HStack>

                <HStack mb={1}>
                  <Text>
                    <strong>Email: </strong>
                  </Text>
                  <p>{author?.email}</p>
                </HStack>

                <HStack mb={1}>
                  <Text>
                    <strong>Joined On: </strong>
                  </Text>
                  <p>{author?.createdAt}</p>
                </HStack>

                {/* <HStack>
                  <Text>
                    <strong>Block/Unblock: </strong>
                  </Text>
                  <Switch size={"sm"} colorScheme="gray" />
                </HStack> */}
              </Box>
            {members?.map((member, i) => (
              <Box key={i} p={3} rounded={4} bgColor={"#FFF"} mb={2}>
                <HStack mb={1}>
                  <Text>
                    <strong>User: </strong>
                  </Text>
                  <p>{member?.name}</p>
                </HStack>

                <HStack mb={1}>
                  <Text>
                    <strong>Email: </strong>
                  </Text>
                  <p>{member?.email}</p>
                </HStack>

                <HStack mb={1}>
                  <Text>
                    <strong>Joined On: </strong>
                  </Text>
                  <p>{member?.createdAt}</p>
                </HStack>

                <HStack>
                  <Text>
                    <strong>Block/Unblock: </strong>
                  </Text>
                  <Switch size={"sm"} colorScheme="gray" />
                </HStack>
              </Box>
            ))}
          </Hide>
        </AccordionPanel>
      </AccordionItem>
    </>
  );
};

const Members = () => {
  const dispatch = useAppDispatch();
  const ref = useRef(false);
  const projects = useAppSelector((state) => state.projectReducer.projects);

  useEffect(() => {
    if (ref.current) return;
    dispatch(fetchProjects());
    ref.current = true;
  }, []);

  return (
    <>
      <Accordion allowToggle>
        {projects?.map((project, i) => (
          <ProjectItem key={i} {...project} />
        ))}
      </Accordion>
    </>
  );
};

export default Members;
