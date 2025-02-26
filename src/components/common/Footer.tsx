import {
  Box,
  Container,
  HStack,
  Icon,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import Logo from "./Logo";

const Footer = () => (
  <Box as="footer" px={{ base: "10", md: "12" }} py={6}>
    <Stack gap="6">
      <Stack
        direction={["column", "row"]}
        gap={8}
        justify="space-between"
        align="center"
      >
        <Box>
          <Text fontSize={"sm"} fontWeight={"semibold"} color={"#fc4841"} mb={2}>
            Designed by Prakydo
          </Text>
          <HStack gap={4}>
            <Link href="/legal/privacy-policy">
              <Text fontSize={"xs"}>Privacy Policy</Text>
            </Link>
            <Text fontSize={'xs'}>•</Text>
            <Link href="/legal/privacy-policy">
              <Text fontSize={"xs"}>Refund Policy</Text>
            </Link>
          </HStack>
        </Box>

        <Logo size={"36px"} />
        {/* <HStack gap="4">
          {socialLinks.map(({ href, icon }, index) => (
            <Link key={index} href={href}>
              {icon}
            </Link>
          ))}
        </HStack> */}
        <Text fontSize={"sm"}>
          <span style={{ color: "#fc4841" }}>A Cinekruz Venture.</span> <br />
          &copy; {new Date().getFullYear()} - All rights reserved
        </Text>
      </Stack>
    </Stack>
  </Box>
);

const socialLinks = [
  { href: "https://x.com", icon: <SiX /> },
  { href: "https://github.com", icon: <SiGithub /> },
  { href: "https://www.linkedin.com", icon: <SiLinkedin /> },
];

export default Footer;
