"use client";
import { useAppSelector } from "@/lib/redux/store";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { FaPlusCircle } from "react-icons/fa";

const FaqsContainer = () => {
  const faqs = useAppSelector((state) => state.configReducer.data?.faqs) ?? [];

  return (
    <>
      <Accordion allowToggle>
        {faqs?.map((faq, i) => (
        <AccordionItem key={i} border={"none"} mb={2}>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                {faq?.question}
              </Box>
              <AccordionIcon as={FaPlusCircle} />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {faq?.answer}
          </AccordionPanel>
        </AccordionItem>
          
        ))
}
      </Accordion>
    </>
  );
};

export default FaqsContainer;
