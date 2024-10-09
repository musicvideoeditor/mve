import Members from "@/components/dashboard/account/Members";
import ProfileDetails from "@/components/dashboard/account/ProfileDetails";
import Settings from "@/components/dashboard/account/Settings";
import Transactions from "@/components/dashboard/account/Transactions";
import {
  Stack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import React from "react";

const page = () => {
  return (
    <>
      <Stack
        direction={["column", "row"]}
        alignItems={"flex-start"}
        justifyContent={"center"}
        gap={6}
        p={[0, 4, 8]}
        w={"full"}
      >
        <ProfileDetails />
        <Tabs variant="solid-rounded" colorScheme="gray" w={["full", "90%"]}>
          <TabList px={[0, 6]} gap={[0, 6]} justifyContent={['space-between', 'flex-start']}>
            <Tab fontSize={"xs"} py={1} px={2} rounded={4}>
              Settings
            </Tab>
            <Tab fontSize={"xs"} py={1} px={2} rounded={4}>
              Activity
            </Tab>
            <Tab fontSize={"xs"} py={1} px={2} rounded={4}>
              Members
            </Tab>
            <Tab fontSize={"xs"} py={1} px={2} rounded={4}>
              Transactions
            </Tab>
          </TabList>
          <TabPanels
            p={2}
            mt={8}
            h={["auto", "md"]}
            w={"full"}
            rounded={20}
            border={"2px solid #AAA"}
          >
            <TabPanel>
              <Settings />
            </TabPanel>
            <TabPanel>Activity</TabPanel>
            <TabPanel>
              <Members />
            </TabPanel>
            <TabPanel p={[0, 2]}>
              <Transactions />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Stack>
    </>
  );
};

export default page;
