import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import VerticalSpacer from "@/components/extras/VerticalSpacer";
import { Box } from "@chakra-ui/react";
import React from "react";

const layout = (props: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <VerticalSpacer />
      <Box minH={"80vh"}>{props.children}</Box>
      <Footer />
    </>
  );
};

export default layout;
