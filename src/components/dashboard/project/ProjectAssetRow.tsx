import { ProjectAssetType } from "@/lib/types/project";
import {
  Avatar,
  Badge,
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

const ProjectAssetRow = (props: ProjectAssetType) => {
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
                {props?.name}
              </Text>
              <Text fontSize={"10"}>{props?.assets?.length} Files</Text>
            </Box>
          </HStack>
        </Td>
        <Td fontSize={"xs"}>
          {new Date(props?.createdAt).toLocaleDateString("en-US")}
        </Td>
        <Td fontSize={"xs"}>
          <Badge>{props?.approvalStatus}</Badge>
        </Td>
        <Td>
          <HStack>
            <Avatar src="https://bit.ly/dan-abramov" size={"sm"} />
            <Box>
              <Text fontSize={"xs"} fontWeight={"semibold"}>
                {props?.uploadedBy?.name ?? props?.uploadedBy?.username}
              </Text>
              <Text fontSize={"10"}>{props?.uploadedBy?.email}</Text>
            </Box>
          </HStack>
        </Td>
        <Td textAlign={"center"}>
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
