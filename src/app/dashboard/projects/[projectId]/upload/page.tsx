"use client";
import InviteModal from "@/components/dashboard/project/InviteModal";
import ProjectAssets from "@/components/dashboard/project/ProjectAssets";
import { fetchProjectInfo } from "@/lib/redux/features/project/project-info-slice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/store";
import { Box, Button, HStack, Text, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import { FiPlus, FiUpload } from "react-icons/fi";

const page = ({ params }: { params: { projectId: string } }) => {
  const ref = useRef(false);
    const dispatch = useAppDispatch();
    const {isOpen, onOpen, onClose} = useDisclosure()
    const project = useAppSelector((state) => state.projectInfoReducer);
  
    useEffect(() => {
      if (ref.current) return;
      dispatch(fetchProjectInfo(params.projectId));
      ref.current = true;
    }, []);

  return (
    <>
      <HStack
        mb={8}
        gap={6}
        w={"full"}
        justifyContent={"space-between"}
        flexWrap={"wrap-reverse"}
      >
        <Box>
          <Text className="mont-bold" fontSize={"lg"}>
            Project Assets
          </Text>
          <Text fontWeight={"semibold"} fontSize={"10"}>
            Documents and attachments that have been uploaded as part of this
            project
          </Text>
        </Box>
        <HStack w={"full"} justifyContent={"flex-end"}>
          <Button
            leftIcon={<FiPlus />}
            size={"sm"}
            colorScheme="blackAlpha"
            bgColor={"#000"}
            _hover={{ bgColor: "#333" }}
            fontSize={"xs"}
            onClick={onOpen}
          >
            Add Members
          </Button>
        </HStack>
      </HStack>

      <Text
        display={["none", "block"]}
        fontSize={10}
        fontWeight={"semibold"}
        mb={6}
      >
        Projects &nbsp;&nbsp; / &nbsp;&nbsp; {project.projectInfo.name} &nbsp;&nbsp; /
        &nbsp;&nbsp; Files and assets
      </Text>

      <ProjectAssets projectId={params.projectId} />

      <InviteModal
        onClose={onClose}
        isOpen={isOpen}
        members={project.projectInfo?.members ?? []}
        projectId={project.projectInfo?.documentId ?? ""}
      />
    </>
  );
};

export default page;
