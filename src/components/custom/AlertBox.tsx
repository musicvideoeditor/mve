import { AlertBoxProps } from "@/lib/types/other";
import { Hide } from "@chakra-ui/react";
import React from "react";
import AppModal from "./AppModal";
import AppDrawer from "./AppDrawer";


const AlertBox = (props: AlertBoxProps) => {
  return (
    <>
      {/* Modal, only visible in larger screens */}
      <Hide below="sm">
        <AppModal {...props} />
      </Hide>


      {/* Drawer, only visible in mobile screens */}
      <Hide above="sm">
        <AppDrawer {...props} />
      </Hide>
    </>
  );
};

export default AlertBox;
