"use client";
import { updateProjectDescription } from "@/lib/redux/features/project/project-info-slice";
import { useAppDispatch } from "@/lib/redux/store";
import {
  Box,
  Button,
  Editable,
  EditablePreview,
  EditableTextarea,
  HStack,
  Text,
  useEditableControls,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { LuCheck, LuPen, LuX } from "react-icons/lu";

const ControlButtons = ({
  onSubmit,
}: {
  projectId: string;
  onSubmit: () => void;
}) => {
  const {
    isEditing,
    getSubmitButtonProps,
    getCancelButtonProps,
    getEditButtonProps,
  } = useEditableControls();

  return (
    <>
      <HStack justifyContent={"space-between"} mb={4}>
        <Text fontSize={"sm"} fontWeight={"semibold"}>
          Overview
        </Text>

        {isEditing ? (
          <HStack w={"full"} justifyContent={"flex-end"}>
            <Button
              colorScheme="red"
              variant={"ghost"}
              size={"xs"}
              rounded={"full"}
              leftIcon={<LuX />}
              {...getCancelButtonProps()}
            >
              Cancel
            </Button>
            <Button
              colorScheme="blue"
              variant={"ghost"}
              size={"xs"}
              rounded={"full"}
              leftIcon={<LuCheck />}
              {...getSubmitButtonProps()}
              onClick={onSubmit}
            >
              Save
            </Button>
          </HStack>
        ) : (
          <Button
            colorScheme="orange"
            variant={"ghost"}
            size={"xs"}
            rounded={"full"}
            leftIcon={<LuPen />}
            {...getEditButtonProps()}
          >
            Edit
          </Button>
        )}
      </HStack>
    </>
  );
};

const ProjectDescription = ({
  description,
  projectId,
}: {
  description: string;
  projectId: string;
}) => {
  const toast = useToast();
  const [v, setV] = useState(description);
  const dispatch = useAppDispatch();

  const handleSave = () => {
    try {
      if (v === description) {
        toast({
          status: "info",
          description: "Nothing to save"
        })
      } else {
        dispatch(updateProjectDescription({ id: projectId, description: v }));
      }
    } catch (error: any) {
      toast({
        status: "error",
        description: error?.message ?? "Couldn't save description",
      });
    }
  };

  return (
    <>
      <Box p={4} bgColor={"#FFF"} border={"1px solid #DADADA"} rounded={8}>
        <Editable
          fontSize={"small"}
          defaultValue={description}
          onChange={(val) => setV(val)}
        >
          <ControlButtons projectId={projectId} onSubmit={() => handleSave()} />
          <EditablePreview w={"100%"} />
          <EditableTextarea />
        </Editable>
      </Box>
    </>
  );
};

export default ProjectDescription;
