import NotificationCard from "@/components/dashboard/home/NotificationCard";
import { Box, Checkbox, Input, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const page = () => {
  return (
    <>
      <Stack direction={["column", "row"]} gap={8} p={4}>
        <Box flex={2}>
          <Text fontSize={"lg"} fontWeight={"semibold"} mb={4}>
            Filters
          </Text>
          <Box
            rounded={6}
            bgColor={"#FFF"}
            border={"1px solid #DADADA"}
            p={4}
            mb={6}
          >
            <Text fontSize={"xs"} mb={4} fontWeight={"semibold"}>
              Search by keyword
            </Text>
            <Input variant={"flushed"} placeholder="Type here..." />
          </Box>
          <Box
            rounded={6}
            bgColor={"#FFF"}
            border={"1px solid #DADADA"}
            p={4}
            mb={6}
          >
            <Text fontSize={"xs"} mb={4} fontWeight={"semibold"}>
              Select dates
            </Text>
            <Input variant={"flushed"} type="date" />
          </Box>
          <Box
            rounded={6}
            bgColor={"#FFF"}
            border={"1px solid #DADADA"}
            p={4}
            mb={6}
          >
            <Text fontSize={"xs"} mb={4} fontWeight={"semibold"}>
              Filter by category
            </Text>
            <VStack
              w={"full"}
              alignItems={"flex-start"}
              justifyContent={"flex-start"}
              gap={2}
            >
              <Checkbox size={"sm"}>Project notifications</Checkbox>
              <Checkbox size={"sm"}>System notifications</Checkbox>
              <Checkbox size={"sm"}>Transaction notifications</Checkbox>
            </VStack>
          </Box>
        </Box>
        <Box flex={4}>
          <Text fontSize={"lg"} fontWeight={"semibold"} mb={4}>&zwnj;</Text>
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
      </Stack>
    </>
  );
};

export default page;
