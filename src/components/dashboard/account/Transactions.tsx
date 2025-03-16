"use client";
import { fetchTransactions } from "@/lib/redux/features/account/transaction-slice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/store";
import { Button, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import {TransactionType} from '@/lib/types/account'

const TransactionItem = (props: TransactionType) => {
  return (
    <>
      <Tr>
        <Td>{props?.updatedAt || props?.createdAt}</Td>
        <Td>₹{props?.amount}</Td>
        <Td>{props?.refId}</Td>
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
  const ref = useRef(false);
  const dispatch = useAppDispatch();
  const transactions = useAppSelector(
    (state) => state.transactionReducer.transactions
  );

  useEffect(() => {
    if (ref.current) return;
    dispatch(fetchTransactions());
    ref.current = true;
  }, []);

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
          {transactions?.map((item, i) => (
            <TransactionItem key={i} {...item} />
          ))
          }
        </Tbody>
      </Table>
    </>
  );
};

export default Transactions;
