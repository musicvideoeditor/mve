import { Box, VStack } from "@chakra-ui/react";
import React from "react";
import NotificationCard from "./NotificationCard";

const RecentNotifications = () => {
  return (
    <>
      <Box>
        <VStack
          w={"full"}
          gap={4}
          alignItems={"flex-start"}
          justifyContent={"flex-start"}
        >
          <NotificationCard
            isSystemNotification={true}
            title="Payment Pending"
            description="Please pay token amount for your project Damodarashtakam"
            actionBtnLabel="Pay ₹2380"
            actionBtnUrl="/invoice/sdjfnwoiehw"
          />
          <NotificationCard
            title="Rishi commented on video #18723"
            description={`"Requested revisions have been done"`}
            avatarUrl="https://bit.ly/dan-abramov"
            actionBtnLabel="View"
            actionBtnUrl="/projects/q21as/videos/18723"
          />
          <NotificationCard
            isSystemNotification={true}
            title="Revised Video Uploaded"
            description="Video #18723 uploaded for your project Damodarashtakam"
            actionBtnLabel="View"
            actionBtnUrl="/projects/q21as/videos/18723"
          />
        </VStack>
      </Box>
    </>
  );
};

export default RecentNotifications;
