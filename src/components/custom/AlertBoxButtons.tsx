import { AlertBoxProps } from "@/lib/types/other";
import { Button, HStack } from "@chakra-ui/react";
import React from "react";

type AlertBoxButtonProps = Pick<
  AlertBoxProps,
  | "isLoading"
  | "onClose"
  | "onSubmit"
  | "theme"
  | "primaryCtaLabel"
  | "secondaryCtaLabel"
>;

const InfoButtons = (props: AlertBoxButtonProps) => {
  const { onClose, isLoading, primaryCtaLabel } = props;
  return (
    <>
      <HStack
        w={["full"]}
        alignItems={"center"}
        justifyContent={["space-between", "flex-end"]}
        gap={4}
      >
        <Button
          onClick={onClose}
          w={["full", "max-content"]}
          isLoading={isLoading}
        >
          {primaryCtaLabel ?? "Okay"}
        </Button>
      </HStack>
    </>
  );
};

const SuccessButtons = (props: AlertBoxButtonProps) => {
  const { onClose, isLoading, onSubmit, secondaryCtaLabel, primaryCtaLabel } =
    props;
  return (
    <>
      <HStack
        w={["full"]}
        alignItems={"center"}
        justifyContent={["space-between", "flex-end"]}
        gap={4}
      >
        {secondaryCtaLabel ? (
          <Button
            onClick={onClose}
            w={["full", "max-content"]}
            isLoading={isLoading}
          >
            {secondaryCtaLabel}
          </Button>
        ) : null}
        <Button
          onClick={() => {
            if (onSubmit) onSubmit.call(null);
          }}
          w={["full", "max-content"]}
          isLoading={isLoading}
          colorScheme="whatsapp"
        >
          {primaryCtaLabel ?? "Okay"}
        </Button>
      </HStack>
    </>
  );
};

const DeleteButtons = (props: AlertBoxButtonProps) => {
  const { onClose, isLoading, onSubmit, secondaryCtaLabel, primaryCtaLabel } =
    props;
  return (
    <>
      <HStack
        w={["full"]}
        alignItems={"center"}
        justifyContent={["space-between", "flex-end"]}
        gap={4}
      >
        <Button
          onClick={onClose}
          w={["full", "max-content"]}
          isLoading={isLoading}
        >
          {secondaryCtaLabel ?? "Cancel"}
        </Button>
        <Button
          onClick={() => {
            if (onSubmit) onSubmit.call(null);
          }}
          w={["full", "max-content"]}
          isLoading={isLoading}
          colorScheme="red"
        >
          {primaryCtaLabel ?? "Delete"}
        </Button>
      </HStack>
    </>
  );
};

// Type guard to ensure we're only using valid theme values
const isValidTheme = (theme: string): theme is AlertBoxProps["theme"] => {
  return ["info", "success", "delete"].includes(theme);
};

const AlertBoxButtons = (
  props: Pick<
    AlertBoxProps,
    | "isLoading"
    | "onClose"
    | "onSubmit"
    | "theme"
    | "primaryCtaLabel"
    | "secondaryCtaLabel"
  >
) => {
  const buttons: { [k in typeof props.theme]: React.ReactNode } = {
    info: <InfoButtons {...props} />,
    success: <SuccessButtons {...props} />,
    delete: <DeleteButtons {...props} />,
  };

  if (!isValidTheme(props.theme)) {
    throw new Error(`Invalid theme: ${props.theme}`);
  }

  return buttons[props.theme];
};

export default AlertBoxButtons;
