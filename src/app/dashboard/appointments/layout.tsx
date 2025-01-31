import BookedAppointments from "@/components/dashboard/appointment/BookedAppointments";
import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Stack direction={["column", "row"]} gap={8}>
        <Box flex={4} p={4}>
            {children}
        </Box>
        <Box flex={2} p={4}>
          <Text fontSize={"lg"} fontWeight={"semibold"} mb={4}>
            Recent Appointments
          </Text>
          <br />
          <BookedAppointments />
        </Box>
      </Stack>
    </>
  );
};

export default layout;
