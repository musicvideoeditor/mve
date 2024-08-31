import { Button, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";

const TransactionItem = () => {
  return (
    <>
      <Tr>
        <Td>15 Aug, 2024</Td>
        <Td>₹150.00</Td>
        <Td>PAY4567NSU</Td>
        <Td textAlign={"center"}>
          <Button size={"xs"} colorScheme="teal">
            View
          </Button>
        </Td>
      </Tr>
    </>
  );
};

const Transactions = () => {
  return (
    <>
      <Table
        size={"xs"}
        fontSize={"xs"}
        variant={"unstyled"}
        style={{ borderCollapse: "separate", borderSpacing: "0 8px" }}
      >
        <Thead>
          <Tr>
            <Th>Date</Th>
            <Th>Amount</Th>
            <Th>Trnxn ID</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          <TransactionItem />
          <TransactionItem />
          <TransactionItem />
        </Tbody>
      </Table>
    </>
  );
};

export default Transactions;
