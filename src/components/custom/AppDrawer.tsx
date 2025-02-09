import React from "react";
import { AlertBoxProps } from "@/lib/types/other";
import {
  DrawerProps,
  DrawerContentProps,
  ModalHeaderProps,
  ModalBodyProps,
  ModalFooterProps,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from "@chakra-ui/react";
import AlertBoxButtons from "./AlertBoxButtons";

interface AppDrawerProps extends AlertBoxProps {
  drawerProps?: DrawerProps;
  drawerContentProps?: DrawerContentProps;
  drawerHeaderProps?: ModalHeaderProps;
  drawerFooterProps?: ModalFooterProps;
  drawerBodyProps?: ModalBodyProps;
}

const AppDrawer = (props: AppDrawerProps) => {
  const {
    title,
    isOpen,
    onClose,
    children,
    drawerProps,
    drawerContentProps,
    drawerHeaderProps,
    drawerBodyProps,
    drawerFooterProps,
  } = props;
  return (
    <>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement={drawerProps?.placement ?? "bottom"}
        {...drawerProps}
      >
        <DrawerOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <DrawerContent {...drawerContentProps}>
          <DrawerHeader {...drawerHeaderProps}>{title}</DrawerHeader>
          <DrawerBody {...drawerBodyProps}>{children}</DrawerBody>
          <DrawerFooter {...drawerFooterProps}>
            <AlertBoxButtons {...props} />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default AppDrawer;
