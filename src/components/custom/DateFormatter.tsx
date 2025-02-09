import { Text, TextProps } from "@chakra-ui/react";
import React from "react";

const DateFormatter = (props: {
  children: React.ReactNode;
  fontSize?: TextProps["fontSize"];
}) => {
  return (
    <>
      <Text fontSize={props?.fontSize ?? "xs"}>
        {props.children
          ? // @ts-ignore
            new Date(props?.children).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })
          : null}
      </Text>
    </>
  );
};

export default DateFormatter;
