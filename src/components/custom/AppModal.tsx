import React from "react";
import { AlertBoxProps } from "@/lib/types/other";
import {
  ModalProps,
  ModalContentProps,
  ModalHeaderProps,
  ModalBodyProps,
  ModalFooterProps,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import AlertBoxButtons from "./AlertBoxButtons";

interface AppModalProps extends AlertBoxProps {
  modalProps?: ModalProps;
  modalContentProps?: ModalContentProps;
  modalHeaderProps?: ModalHeaderProps;
  modalFooterProps?: ModalFooterProps;
  modalBodyProps?: ModalBodyProps;
}

const AppModal = (props: AppModalProps) => {
  const {
    children,
    title,
    isOpen,
    onClose,
    modalProps,
    modalContentProps,
    modalHeaderProps,
    modalBodyProps,
    modalFooterProps,
  } = props;

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size={modalProps?.size ?? "xl"} {...modalProps}>
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent {...modalContentProps}>
          <ModalHeader {...modalHeaderProps}>{title}</ModalHeader>
          <ModalBody {...modalBodyProps}>{children}</ModalBody>
          <ModalFooter {...modalFooterProps}>
            <AlertBoxButtons {...props} />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AppModal;
