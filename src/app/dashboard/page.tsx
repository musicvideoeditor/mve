import AppointmentCtaCard from "@/components/dashboard/appointment/AppointmentCtaCard";
import ProjectsGrid from "@/components/dashboard/home/ProjectsGrid";
import RecentNotifications from "@/components/dashboard/home/RecentNotifications";
import VerticalSpacer from "@/components/extras/VerticalSpacer";
import { colors } from "@/lib/constants";
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const ProjectUpdates = () => {
  

  return (
    <>
      <Stack direction={["column", "row"]} gap={8}>
        <Box flex={4} p={4}>
          <Box>
            <HStack mb={4} justifyContent={"space-between"}>
              <Text fontSize={"lg"} fontWeight={"semibold"}>
                Ongoing Projects
              </Text>
              <Link href={"/dashboard/projects"}>
                <Text
                  fontWeight={"medium"}
                  fontSize={"sm"}
                  color={colors.loginBtnColor}
                >
                  View all
                </Text>
              </Link>
            </HStack>
            <ProjectsGrid />
          </Box>
          <VerticalSpacer h={"12.5vh"} />

          <Box>
            <Text fontSize={"lg"} fontWeight={"semibold"} mb={4}>
              Have Questions?
            </Text>
            <AppointmentCtaCard />
          </Box>
        </Box>

        <Box p={4} flex={2}>
          <Box>
            <HStack mb={4} justifyContent={"space-between"}>
              <Text fontSize={"lg"} fontWeight={"semibold"}>
                Notifications
              </Text>
              <Link href={"/dashboard/projects"}>
                <Text
                  fontWeight={"medium"}
                  fontSize={"sm"}
                  color={colors.loginBtnColor}
                >
                  View all
                </Text>
              </Link>
            </HStack>
            <RecentNotifications />
          </Box>
        </Box>
      </Stack>
    </>
  );
};

export default ProjectUpdates;
