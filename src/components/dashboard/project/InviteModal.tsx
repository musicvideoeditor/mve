"use client";
import AlertBox from "@/components/custom/AlertBox";
import { Box, Button, HStack, Input, Text, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import MemberCard from "./MemberCard";
import { ProjectMemberType } from "@/lib/types/project";
import { IoSend } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "@/lib/redux/store";
import { addProjectMember } from "@/lib/redux/features/project/project-members-slice";

interface InviteModalProps {
  isOpen: boolean;
  onClose: () => void;
  members: ProjectMemberType[];
  projectId: string;
}

const InviteModal = ({
  isOpen,
  onClose,
  members,
  projectId,
}: InviteModalProps) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const invites = useAppSelector((state) => state.projectMemberReducer.data);

  async function sendInvite() {
    // validate email syntax
    if (!emailRegex.test(email)) {
      toast({
        status: "error",
        description: "Invalid email address",
      });
      return;
    }

    setIsLoading(true);
    try {
      await dispatch(addProjectMember({ projectId, email })).unwrap();
      onClose();
    } catch (error: any) {
      toast({
        status: "error",
        description: error?.message ?? "Couldn't invite member",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <AlertBox
        isOpen={isOpen}
        onClose={onClose}
        title="Team Members"
        theme="info"
        primaryCtaLabel="Close"
        hideButtons={true}
      >
        <Box>
          {members.length ? (
            <Box mb={6}>
              <Text fontSize={"sm"} mb={4}>
                Members involved in this project
              </Text>
              {members?.map((member: ProjectMemberType) => (
                <MemberCard
                  key={member?.username}
                  name={member?.name || member?.username}
                  email={member?.email}
                  permissions={["comment", "upload", "view"]}
                />
              ))}
            </Box>
          ) : null}
          <Text fontSize={"sm"} mb={4}>
            {invites?.length ? "Pending Invites" : "Invite others"}
          </Text>
          <HStack>
            <Input
              fontSize={"sm"}
              placeholder="Enter email ID to invite someone to this project"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              fontSize={"sm"}
              rightIcon={<IoSend />}
              colorScheme="twitter"
              onClick={sendInvite}
              isLoading={isLoading}
            >
              Invite
            </Button>
          </HStack>
        </Box>
      </AlertBox>
    </>
  );
};

export default InviteModal;
