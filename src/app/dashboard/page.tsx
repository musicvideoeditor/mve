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
  const items = [
    {
      src: "https://cdn.myanimelist.net/r/84x124/images/characters/9/131317.webp?s=d4b03c7291407bde303bc0758047f6bd",
      name: "Uchiha Sasuke",
    },
    {
      src: "https://cdn.myanimelist.net/r/84x124/images/characters/7/284129.webp?s=a8998bf668767de58b33740886ca571c",
      name: "Baki Ani",
    },
    {
      src: "https://cdn.myanimelist.net/r/84x124/images/characters/9/105421.webp?s=269ff1b2bb9abe3ac1bc443d3a76e863",
      name: "Uchiha Chan",
    },
    {
      src: "https://bit.ly/dan-abramov",
      name: "Baki Ani",
    },
  ];

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
            <Box
              p={8}
              bgColor={"#FFF"}
              rounded={8}
              border={"1px solid #DADADA"}
              display={"flex"}
              flexDir={"column"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Text fontSize={"2xl"} fontWeight={"semibold"}>
                Book&nbsp;<span style={{ color: colors.orange }}>Free</span>
                &nbsp;Consultation
              </Text>
              <Text fontSize={"sm"} color={"gray.700"}>
                Schedule a quick call with our team. It's Free!
              </Text>
              <AvatarGroup size="sm" max={4} mt={2}>
                {items.map((item) => (
                  <Avatar key={item.name} src={item.src} name={item.name} />
                ))}
              </AvatarGroup>
              <br />
              <Button
                colorScheme="orange"
                bgColor={colors.orange}
                leftIcon={<FaPhoneAlt />}
                rounded={"full"}
                as={"a"}
                href="https://cal.com"
                target="_blank"
              >
                Book Now
              </Button>
            </Box>
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
