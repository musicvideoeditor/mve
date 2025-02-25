import { Box, Container, HStack, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import Logo from "./Logo";

const Footer = () => (
  <Box as="footer" p={{ base: "10", md: "12" }}>
    <Stack gap="6">
      <Stack direction="row" justify="space-between" align="center">
        <Logo size={"36px"} />
        <HStack gap="4">
          {socialLinks.map(({ href, icon }, index) => (
            <Link key={index} href={href}>
              {icon}
            </Link>
          ))}
        </HStack>
      </Stack>
      <Text fontSize={'sm'}>
        A Cinekruz Venture. <br />
        &copy; {new Date().getFullYear()} - All rights reserved
      </Text>
    </Stack>
  </Box>
);

const socialLinks = [
  { href: "https://x.com", icon: <SiX /> },
  { href: "https://github.com", icon: <SiGithub /> },
  { href: "https://www.linkedin.com", icon: <SiLinkedin /> },
];

export default Footer;
