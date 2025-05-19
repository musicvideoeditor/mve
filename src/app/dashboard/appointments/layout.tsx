import BookedAppointments from "@/components/dashboard/appointment/BookedAppointments";
import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
        <Box>
            {children}
        </Box>
    </>
  );
};

export default layout;
