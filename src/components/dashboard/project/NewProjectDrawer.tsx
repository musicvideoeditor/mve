"use client";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaCircle } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FcOpenedFolder } from "react-icons/fc";
import { FiPlus, FiSearch, FiUpload } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { LuFile } from "react-icons/lu";


const ProjectTitle = ({ onSubmit }: { onSubmit: () => void }) => {
  return (
    <>
      <Box
        w={["full", "80%"]}
        p={[4, 8]}
        border={"1px solid #333"}
        rounded={12}
        mx={"auto"}
      >
        <VStack
          w={"full"}
          h={"full"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Text fontWeight={"semibold"}>What is the name of your Project?</Text>
          <br />
          <br />
          <Input
            mb={4}
            w={["full", "xs"]}
            variant={"flushed"}
            placeholder="Project Title"
          />
          <Button
            size={"lg"}
            rounded={"full"}
            colorScheme="orange"
            bgColor={"#4ca336"}
            boxShadow={"-4px 4px #000"}
            px={16}
            onClick={onSubmit}
          >
            Submit
          </Button>
        </VStack>
      </Box>
    </>
  );
};

const ProjectAssets = ({ onSubmit }: { onSubmit: () => void }) => {
  return (
    <>
      <Stack direction={["column", "row"]} gap={8} mb={8}>
        <Box w={["full", "xs"]} h={"xs"} rounded={12} bgColor={"#FFF"}>
          <VStack
            w={"full"}
            h={"full"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={6}
          >
            <Box>
              <Text textAlign={"center"} fontWeight={"semibold"}>
                Upload your files
              </Text>
              <Text
                textAlign={"center"}
                fontSize={"8"}
                fontWeight={"medium"}
                color={"gray.500"}
              >
                Files should be .zip, .eps or .avi
              </Text>
            </Box>
            <Box
              w={"70%"}
              rounded={8}
              p={8}
              border={"1px dashed #ccdeab"}
              bgColor={"#fafaf7"}
            >
              <FcOpenedFolder fontSize={36} style={{ margin: "8px auto" }} />
              <Text
                textAlign={"center"}
                fontSize={"8"}
                fontWeight={"medium"}
                color={"gray.500"}
              >
                Drag and drop your files here
              </Text>
            </Box>
          </VStack>
        </Box>

        <Box
          w={["full", "80%"]}
          px={4}
          py={6}
          border={"1px solid #666"}
          rounded={8}
        >
          <HStack justifyContent={"space-between"} mb={4}>
            <Box>
              <Text fontWeight={"semibold"} fontSize={"sm"}>
                Attached files
              </Text>
              <Text fontWeight={"medium"} fontSize={"10"}>
                Files and assets that have been attached to this project
              </Text>
            </Box>

            <InputGroup w={"2xs"} border={"1px solid #DDD"} rounded={8}>
              <InputLeftElement children={<FiSearch />} />
              <Input placeholder="Search" pl={8} fontSize={"sm"} />
            </InputGroup>
          </HStack>

          <HStack
            mb={6}
            p={3}
            bgColor={"#e3e3e3"}
            justifyContent={"space-between"}
          >
            <HStack
              gap={0}
              border={"1px solid #BBB"}
              rounded={4}
              overflow={"hidden"}
            >
              <Button
                px={4}
                size={"xs"}
                fontWeight={"medium"}
                variant={"ghost"}
                rounded={0}
              >
                View all
              </Button>
              <Button
                px={4}
                size={"xs"}
                fontWeight={"medium"}
                variant={"ghost"}
                borderX={"1px solid #BBB"}
                rounded={"0"}
              >
                Your files
              </Button>
              <Button
                px={4}
                size={"xs"}
                fontWeight={"medium"}
                variant={"ghost"}
                rounded={0}
              >
                Shared files
              </Button>
            </HStack>
            <HStack>
              <Button
                size={"xs"}
                fontWeight={"medium"}
                border={"1px solid #BBB"}
                variant={"ghost"}
                leftIcon={<FaCircle fontSize={"6"} color="#16a160" />}
                rightIcon={<IoClose color={"#999"} />}
              >
                Jan 1 - Jan 31
              </Button>
              <Button
                size={"xs"}
                fontWeight={"medium"}
                border={"1px solid #BBB"}
                variant={"ghost"}
                leftIcon={<FaCircle fontSize={"6"} color="#16a160" />}
                rightIcon={<IoClose color={"#999"} />}
              >
                Project Name
              </Button>
              <Button
                size={"xs"}
                fontWeight={"medium"}
                // border={"1px solid #BBB"}
                variant={"ghost"}
                leftIcon={<FaPlus />}
                // rightIcon={<IoClose color={'#999'} />}
              >
                Add Filter
              </Button>
            </HStack>
          </HStack>

          <TableContainer>
            <Table size={"sm"} colorScheme="teal">
              <Thead>
                <Tr>
                  <Th>
                    <Checkbox borderColor={"#BBB"}></Checkbox>
                  </Th>
                  <Th fontSize={"10"}>File name</Th>
                  <Th fontSize={"10"}>Date uploaded</Th>
                  <Th fontSize={"10"}>Last updated</Th>
                  <Th fontSize={"10"}>Uploaded by</Th>
                  <Th fontSize={"10"}></Th>
                </Tr>
              </Thead>
              <Tbody>
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
                  <Td>
                    <HStack>
                      <Button
                        size={"xs"}
                        fontWeight={"medium"}
                        border={"1px solid #BBB"}
                        variant={"ghost"}
                      >
                        Edit
                      </Button>
                      <Button
                        size={"xs"}
                        fontWeight={"medium"}
                        border={"1px solid #BBB"}
                        variant={"ghost"}
                      >
                        Delete
                      </Button>
                    </HStack>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Stack>

      <HStack justifyContent={"flex-end"}>
        <Box>
          <Button
            size={"lg"}
            rounded={"full"}
            colorScheme="orange"
            bgColor={"#4ca336"}
            boxShadow={"-4px 4px #000"}
            px={16}
            onClick={onSubmit}
          >
            Submit for Review
          </Button>
          <Text
            fontSize={10}
            fontWeight={"semibold"}
            color={"red.500"}
            mt={2}
            textAlign={"center"}
          >
            *Submit once all of your data is uploaded.
          </Text>
        </Box>
      </HStack>
    </>
  );
};

const NewProjectDrawer = () => {
  const [step, setStep] = useState("title");

  return (
    <>
      <Container maxW={["full", "6xl"]}>
        <HStack justifyContent={"space-between"} mb={16}>
          <Box>
            <Text className="mont-bold" fontSize={"lg"}>
              {step == "title" ? "" : "Files and assets"}
            </Text>
            <Text fontWeight={"semibold"} fontSize={"10"}>
              {step == "assets"
                ? "Documents and attachments that have been uploaded as part of this project"
                : ""}
            </Text>
          </Box>
          <HStack>
            <Button
              leftIcon={<FiUpload />}
              size={"sm"}
              variant={"outline"}
              border={"1px solid #666"}
              fontSize={"xs"}
              w={24}
            >
              Share
            </Button>
            <Button
              leftIcon={<FiPlus />}
              size={"sm"}
              colorScheme="blackAlpha"
              bgColor={"#000"}
              _hover={{ bgColor: "#333" }}
              fontSize={"xs"}
              w={24}
            >
              Invite
            </Button>
          </HStack>
        </HStack>

        <Text fontSize={10} fontWeight={"semibold"} mb={6}>
          Projects &nbsp;&nbsp; / &nbsp;&nbsp; Project Name &nbsp;&nbsp; /
          &nbsp;&nbsp; Files and assets
        </Text>
        {step == "title" ? (
          <ProjectTitle onSubmit={() => setStep("assets")} />
        ) : (
          <ProjectAssets onSubmit={() => setStep("assets")} />
        )}
      </Container>
    </>
  );
};

export default NewProjectDrawer;
