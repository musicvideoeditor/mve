"use client";
import { BookedAppointmentState } from "@/lib/api/types/appointment-types";
import { fetchBookedAppointments } from "@/lib/redux/features/appointment/booked-appointments-slice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/store";
import { Box, Button, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";

const MeetingStatus = ({
  meetingStatus,
  date,
  slot,
  postponedDate,
  meetingUrl,
}: Omit<BookedAppointmentState, "purpose">) => {
  if (meetingStatus == "upcoming" && date)
    return (
      <Text fontSize={"xs"}>
        Scheduled for{" "}
        <span style={{ fontWeight: "bold", color: "GrayText" }}>
          {date.toDateString()} ({slot?.from?.slice(0, 5)}-
          {slot?.to?.slice(0, 5)})
        </span>
      </Text>
    );

  if (meetingStatus == "ongoing") {
    if (meetingUrl) {
      return (
        <Button
          as={"a"}
          href={meetingUrl}
          target="_blank"
          colorScheme="blue"
          rounded={"full"}
          size={"xs"}
        >
          Join Meeting
        </Button>
      );
    }
    return (
      <Text fontSize={"xs"}>
        Ongoing till{" "}
        <span style={{ fontWeight: "bold", color: "GrayText" }}>
          {date?.toDateString()} ({slot?.to?.slice(0, 5)})
        </span>
      </Text>
    );
  }

  if (meetingStatus == "postponed" && postponedDate)
    return (
      <Text fontSize={"xs"}>
        Postponed till{" "}
        <span style={{ fontWeight: "bold", color: "GrayText" }}>
          {postponedDate?.toDateString()}
        </span>
      </Text>
    );

  if (meetingStatus == "canceled")
    return (
      <Text fontSize={"xs"}>
        Canceled on{" "}
        <span style={{ fontWeight: "bold", color: "GrayText" }}>
          {date?.toDateString()}
        </span>
      </Text>
    );

  if (meetingStatus == "finished")
    return (
      <Text fontSize={"xs"}>
        Finished on{" "}
        <span style={{ fontWeight: "bold", color: "GrayText" }}>
          {date?.toDateString()}
        </span>
      </Text>
    );

  return null;
};

const AppointmentCard = ({
  purpose,
  meetingStatus,
  date,
  slot,
  meetingUrl,
  postponedDate,
}: BookedAppointmentState) => {
  return (
    <>
      <Box
        p={4}
        w={"full"}
        bgColor={"#FFF"}
        border={"1px solid"}
        borderColor={"#DADADA"}
        rounded={4}
      >
        <Text fontSize={"sm"} fontWeight={"semibold"}>
          {purpose}
        </Text>
        <MeetingStatus
          date={new Date(date)}
          slot={slot}
          meetingStatus={meetingStatus}
          postponedDate={postponedDate}
          meetingUrl={meetingUrl}
        />
      </Box>
    </>
  );
};

const BookedAppointments = () => {
  const ref = useRef(false);
  const dispatch = useAppDispatch();
  const appointments = useAppSelector(
    (state) => state.bookedAppointmentsReducer.appointments
  );

  useEffect(() => {
    if (ref.current) return;
    dispatch(fetchBookedAppointments());
    ref.current = true;
  }, []);

  return (
    <>
      <VStack
        w={["full"]}
        alignItems={"center"}
        justifyContent={"flex-start"}
        gap={4}
        h={"lg"}
        overflow={"scroll"}
      >
        {appointments?.map((a: BookedAppointmentState, i) => (
          <AppointmentCard key={i} {...a} />
        ))}
      </VStack>
    </>
  );
};

export default BookedAppointments;
