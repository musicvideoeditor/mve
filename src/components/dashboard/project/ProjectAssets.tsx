import {
  Box,
  Button,
  Checkbox,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaCircle, FaPlus } from "react-icons/fa";
import { FcOpenedFolder } from "react-icons/fc";
import { FiSearch } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import ProjectAssetRow from "./ProjectAssetRow";

const ProjectAssets = ({ onSubmit }: { onSubmit: () => void }) => {
  return (
    <>
      <Stack
        direction={["column", "row"]}
        alignItems={"flex-start"}
        gap={4}
        mb={8}
      >
        <Box w={["full", "xs"]} py={16} px={4} rounded={12} bgColor={"#FFF"}>
          <VStack
            w={"full"}
            h={"full"}
            alignItems={"center"}
            justifyContent={"flex-start"}
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
              w={"full"}
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
            overflow={"scroll"}
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

          <TableContainer h={"2xs"}>
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
                <ProjectAssetRow />
                <ProjectAssetRow />
                <ProjectAssetRow />
                <ProjectAssetRow />
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

export default ProjectAssets;
