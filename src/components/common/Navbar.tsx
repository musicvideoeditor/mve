"use client";
import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CustomContainer from "../custom/CustomContainer";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { useAppSelector } from "@/lib/redux/store";

const Navbar = () => {
  const user = useAppSelector((state) => state.userReducer.user);
  const [bgColor, setBgColor] = useState("transparent");
  const [hasScrolledPast, setHasScrolledPast] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      const threshold = viewportHeight * 0.1; // 10vh

      if (scrollPosition > threshold && !hasScrolledPast) {
        setHasScrolledPast(true);
        setBgColor("#111");
      } else if (scrollPosition <= threshold && hasScrolledPast) {
        setHasScrolledPast(false);
        setBgColor("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasScrolledPast]);

  return (
    <>
      <Box
        w={"full"}
        p={[0, 6]}
        py={[4, 6]}
        bgColor={bgColor}
        pos={"fixed"}
        top={0}
        left={0}
        zIndex={999}
        transition={"all .3s ease"}
      >
        <CustomContainer>
          <DesktopNav color={hasScrolledPast ? "white" : "black"} user={user} />

          <MobileNav color={hasScrolledPast ? "white" : "black"} user={user} />
        </CustomContainer>
      </Box>
    </>
  );
};

export default Navbar;
