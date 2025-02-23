"use client";
import { API } from "@/lib/api";
import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  HStack,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";

interface InvitationForMyselfType {
  invitedBy: {
    name?: string;
    username: string;
    email: string;
    avatar?: {
      url: string;
    };
  };
  project: {
    documentId: string;
    name?: string;
  };
  accepted: boolean;
}

const page = ({ params }: { params: { inviteId: string } }) => {
  const ref = useRef(false);
  const toast = useToast();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);
  const [inviteData, setInviteData] = useState<InvitationForMyselfType | null>(
    null
  );

  useEffect(() => {
    if (ref.current) return;
    fetchInviteData();
    ref.current = true;
  }, []);

  async function fetchInviteData() {
    try {
      const res = await API.INVITE.getInvite({ inviteId: params.inviteId });
      setInviteData(res.data);
      setLoading(false);
    } catch (error: any) {
      setError(error?.message);
      setLoading(false);
    }
  }

  async function acceptInvite() {
    try {
      setLoading(true);
      await API.INVITE.acceptInvite({ id: params.inviteId });
      toast({
        description: "Invite Accepted",
        status: "success",
      });

      setInviteData((prev) => {
        if (!prev) return null;
        return {
          ...prev,
          accepted: true,
        };
      });
    } catch (error: any) {
      setError(error?.message);
    } finally {
      setLoading(false);
    }
  }

  async function rejectInvite() {
    try {
      setLoading(true);
      await API.INVITE.rejectInvite({ id: params.inviteId });
      toast({
        description: "Invite Rejected",
        status: "success",
      });
      window.location.href = "/dashboard";
    } catch (error: any) {
      setError(error?.message);
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <>
        <VStack
          w={["full"]}
          h={["90vh"]}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <CircularProgress isIndeterminate />
          <Text>Loading</Text>
        </VStack>
      </>
    );
  }
  if (error) {
    return (
      <>
        <VStack
          w={["full"]}
          h={["90vh"]}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Text fontWeight={"semibold"} fontSize={"2xl"} color={"red"}>
            ERROR
          </Text>
          <Text fontWeight={"semibold"}>{error}</Text>
          <br />
          <Button onClick={fetchInviteData} rounded={"full"} size={"lg"} mb={4}>
            Retry
          </Button>
          <Button
            as={"a"}
            href="/dashboard"
            variant={"ghost"}
            rounded={"full"}
            size={"md"}
            leftIcon={<FiArrowLeft />}
          >
            Go back to Dashboard
          </Button>
        </VStack>
      </>
    );
  }

  return (
    <>
      <HStack alignItems={"center"} justifyContent={"center"} my={4}>
        <Text fontSize={"2xl"} fontWeight={"semibold"}>
          Invitation
        </Text>
      </HStack>
      <br />
      <Box p={4} rounded={6} w={["full", "3xl"]} mx={"auto"}>
        <VStack
          w={["full"]}
          alignItems={"center"}
          justifyContent={"flex-start"}
        >
          <Avatar
            size={"xl"}
            src={inviteData?.invitedBy?.avatar?.url ?? `/avatar.png`}
          />
          <br />
          <Text>
            {inviteData?.invitedBy?.name ?? inviteData?.invitedBy?.username} has
            invited you to collaborate on a project{" "}
            <strong>{inviteData?.project?.name}</strong>
          </Text>
          <br />
          <br />
          {inviteData?.accepted ? (
            <Text fontWeight={"semibold"} color={"whatsapp.500"}>
              Accepted
            </Text>
          ) : (
            <HStack justifyContent={"center"} gap={4}>
              <Button
                size={"lg"}
                rounded={"full"}
                colorScheme="red"
                onClick={rejectInvite}
              >
                Reject
              </Button>
              <Button
                size={"lg"}
                rounded={"full"}
                colorScheme="whatsapp"
                onClick={acceptInvite}
              >
                Accept
              </Button>
            </HStack>
          )}
        </VStack>
      </Box>
    </>
  );
};

export default page;
