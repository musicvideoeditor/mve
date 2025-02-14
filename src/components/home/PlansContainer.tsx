"use client";
import { Box, Link, Stack, Text } from "@chakra-ui/react";
import React from "react";
import CustomContainer from "../custom/CustomContainer";
import Plan from "./Plan";
import { useAppSelector } from "@/lib/redux/store";

const PlansContainer = () => {
  const plans =
    useAppSelector((state) => state.configReducer.data?.plans) ?? [];

  return (
    <>
      <Box
        w={["full"]}
        p={[8, 8, 16]}
        px={[4, 8, 16]}
        bgColor={"#fff5c7"}
        id="pricing"
      >
        <CustomContainer>
          <Text
            textAlign={"center"}
            fontSize={["2xl", "3xl"]}
            fontWeight={"bold"}
            className="mont-bold"
            mb={[8, 16]}
          >
            Plans & Pricing
          </Text>
          <Stack direction={["column", "row"]} gap={8}>
            {plans?.map((plan, i) => (
              <Plan
                key={i}
                bgColor={plan?.color}
                name={plan?.name}
                price={plan?.price}
                cancelledPrice={plan?.cancelledPrice}
                description={plan?.description}
                features={plan?.planBenefits?.map((p) => p.benefit)}
                badgeText={plan?.flag}
              />
            ))}

            <Box w={["full", "64"]} alignSelf={"flex-end"}>
              <Box
                p={4}
                w={"full"}
                bgColor={"#fcd808"}
                border={"2px solid #000"}
                rounded={8}
              >
                <Text
                  fontSize={"sm"}
                  fontWeight={"semibold"}
                  textAlign={"center"}
                >
                  Got any VFX work to tackle?
                </Text>
              </Box>
              <Box
                mt={4}
                p={4}
                w={"full"}
                bgColor={"#ffef94"}
                border={"2px solid #000"}
                boxShadow={"-4px 4px 0px #333"}
                rounded={8}
              >
                <Text
                  fontSize={"sm"}
                  fontWeight={"semibold"}
                  textAlign={"center"}
                >
                  Need just Motion Graphics?
                </Text>
              </Box>
              <Box
                mt={4}
                w={"full"}
                bgColor={"#fff"}
                border={"2px solid #000"}
                overflow={"hidden"}
                rounded={8}
              >
                <Text
                  fontSize={"xs"}
                  fontWeight={"semibold"}
                  textAlign={"center"}
                  p={2}
                  bgColor={"#f7f8fa"}
                >
                  We are here, just{" "}
                  <span style={{ color: "#1776eb", fontWeight: "bold" }}>
                    CALL
                  </span>
                </Text>
                <Box
                  w={"full"}
                  p={4}
                  minH={24}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Link href={"tel:1234567890"}>
                    <Text
                      fontSize={"2xl"}
                      className="mont-bold"
                      color={"#1776eb"}
                    >
                      +91 - 1234567890
                    </Text>
                  </Link>
                </Box>
              </Box>
            </Box>
          </Stack>
        </CustomContainer>
      </Box>
    </>
  );
};

export default PlansContainer;
