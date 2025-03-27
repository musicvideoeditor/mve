"use client";
import AlertBox from "@/components/custom/AlertBox";
import { Box, Button, HStack, Input, Text, useToast } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import MemberCard from "./MemberCard";
import { InviteType, ProjectMemberType } from "@/lib/types/project";
import { IoSend } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "@/lib/redux/store";
import { fetchProjectInvites, sendInvite } from "@/lib/redux/features/project/project-invite-slice";

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
  const ref = useRef(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const invites = useAppSelector((state) => state.projectInviteReducer.data);

  useEffect(() => {
    if (ref.current) return;
    dispatch(fetchProjectInvites(projectId));
    ref.current = true;
  }, []);

  async function handleSendProjectInvite() {
    // validate email syntax
    if (!emailRegex.test(email)) {
      toast({
        status: "error",
        description: "Invalid email address",
      });
      return;
    }

    // Check if invite with this userEmail already exists
    if (
      invites.find(
        (invite: InviteType) => invite.userEmail.toLowerCase() === email.toLowerCase()
      )
    ) {
      toast({
        status: "error",
        description: "Invite already sent",
      });
      return;
    }

    setIsLoading(true);
    try {
      await dispatch(sendInvite({ projectId, email })).unwrap();
      setEmail("");
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
            {invites?.length ? "Pending Invites" : ""}
          </Text>
          {invites?.length ? (
            <Box>
              {/* @ts-ignore */}
              {invites?.map((invite: InviteType) => (
                <MemberCard
                  key={invite.documentId}
                  name={"Pending Invite"}
                  email={invite?.userEmail}
                  permissions={["comment", "upload", "view"]}
                />
              ))}
            </Box>
          ) : (
            <Text fontSize={"sm"}>
              Invite others to this project by entering their email address
            </Text>
          )}
          <HStack mt={4}>
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
              onClick={handleSendProjectInvite}
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
