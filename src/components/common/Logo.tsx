import { Image, ImageProps, Text } from "@chakra-ui/react";
import React from "react";
interface LogoProps {
  size?: ImageProps["height"];
}

const Logo = ({ size }: LogoProps) => {
  return (
    <>
      <Image src="/logo.png" h={size || ["12"]} />
    </>
  );
};

export default Logo;
