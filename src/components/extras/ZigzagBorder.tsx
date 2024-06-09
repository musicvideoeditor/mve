"use client";
import { Box } from "@chakra-ui/react";
import React from "react";

interface ZigzagBorderProps {
  fill?: string;
}

const ZigzagBorder = ({ fill }: ZigzagBorderProps) => {
  return (
    <>
      <Box
        pos={"absolute"}
        bottom={'-21.4mm'}
        left={'-2px'}
        width={"101.5%"}
        overflow={"hidden"}
      >
        <svg
          width="100%"
          height="35.33mm"
          version="1.1"
          viewBox="0 0 286.08 35.33"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g transform="translate(-36.872 -76.609)">
            <path
              transform="rotate(-1.8131 67.755 87.459)"
              d="m54.462 107.64-16.795-31.31 35.513 1.1098-9.3588 15.1z"
              style={{ fill: fill || "#fff", strokeWidth: 2 }}
            />
            <path
              d="m37.33 76.9 17.778 30.763 17.753-30.79"
              style={{ fill: "none", strokeWidth: 2, stroke: "#000" }}
            />
            <g transform="translate(35.531 -.15291)">
              <path
                transform="rotate(-1.8131 67.755 87.459)"
                d="m54.462 107.64-16.795-31.31 35.513 1.1098-9.3588 15.1z"
                style={{ fill: fill || "#fff", strokeWidth: 2 }}
              />
              <path
                d="m37.33 76.9 17.778 30.763 17.753-30.79"
                style={{ fill: "none", strokeWidth: 2, stroke: "#000" }}
              />
            </g>
            <g transform="translate(71.519 -.014224)">
              <path
                transform="rotate(-1.8131 67.755 87.459)"
                d="m54.462 107.64-16.795-31.31 35.513 1.1098-9.3588 15.1z"
                style={{ fill: fill || "#fff", strokeWidth: 2 }}
              />
              <path
                d="m37.33 76.9 17.778 30.763 17.753-30.79"
                style={{ fill: "none", strokeWidth: 2, stroke: "#000" }}
              />
            </g>
            <g transform="translate(107.05 -.16714)">
              <path
                transform="rotate(-1.8131 67.755 87.459)"
                d="m54.462 107.64-16.795-31.31 35.513 1.1098-9.3588 15.1z"
                style={{ fill: fill || "#fff", strokeWidth: 2 }}
              />
              <path
                d="m37.33 76.9 17.778 30.763 17.753-30.79"
                style={{ fill: "none", strokeWidth: 2, stroke: "#000" }}
              />
            </g>
            <g transform="translate(142.58 -.32005)">
              <path
                transform="rotate(-1.8131 67.755 87.459)"
                d="m54.462 107.64-16.795-31.31 35.513 1.1098-9.3588 15.1z"
                style={{ fill: fill || "#fff", strokeWidth: 2 }}
              />
              <path
                d="m37.33 76.9 17.778 30.763 17.753-30.79"
                style={{ fill: "none", strokeWidth: 2, stroke: "#000" }}
              />
            </g>
            <g transform="translate(178.11 -.47297)">
              <path
                transform="rotate(-1.8131 67.755 87.459)"
                d="m54.462 107.64-16.795-31.31 35.513 1.1098-9.3588 15.1z"
                style={{ fill: fill || "#fff", strokeWidth: 2 }}
              />
              <path
                d="m37.33 76.9 17.778 30.763 17.753-30.79"
                style={{ fill: "none", strokeWidth: 2, stroke: "#000" }}
              />
            </g>
            <g transform="translate(214.1 -.33428)">
              <path
                transform="rotate(-1.8131 67.755 87.459)"
                d="m54.462 107.64-16.795-31.31 35.513 1.1098-9.3588 15.1z"
                style={{ fill: fill || "#fff", strokeWidth: 2 }}
              />
              <path
                d="m37.33 76.9 17.778 30.763 17.753-30.79"
                style={{ fill: "none", strokeWidth: 2, stroke: "#000" }}
              />
            </g>
            <g transform="translate(249.63 .041978)">
              <path
                transform="rotate(-1.8131 67.755 87.459)"
                d="m54.462 107.64-16.795-31.31 35.513 1.1098-9.3588 15.1z"
                style={{ fill: fill || "#fff", strokeWidth: 2 }}
              />
              <path
                d="m37.33 76.9 17.778 30.763 17.753-30.79"
                style={{ fill: "none", strokeWidth: 2, stroke: "#000" }}
              />
            </g>
          </g>
        </svg>
      </Box>
    </>
  );
};

export default ZigzagBorder;
