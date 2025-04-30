"use client";
import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Input,
  Stack,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useAppDispatch, useAppSelector } from "@/lib/redux/store";
import SlotCard from "@/components/dashboard/appointment/SlotCard";
import { fetchAppointmentSlots } from "@/lib/redux/features/appointment/appointment-slots-slice";
import { colors } from "@/lib/constants";
import { FaArrowRight } from "react-icons/fa6";
import VerticalSpacer from "@/components/extras/VerticalSpacer";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateAppointmentSchema } from "@/lib/schema/appointment-schema";
import { AppointmentSlotState } from "@/lib/api/types/appointment-types";
import { API } from "@/lib/api";
import { addAppointment } from "@/lib/redux/features/appointment/booked-appointments-slice";
import Link from "next/link";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];
const services = ["Video Editing", "Color Grading", "Complete Editing"];

const page = () => {
  const ref = useRef(false);
  const dispatch = useAppDispatch();
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [value, onChange] = useState<Value>();

  const slots = useAppSelector((state) => state.appointmentSlotsReducer.slots);
  const [selectedSlotIds, setSelectedSlotIds] = useState<Array<string>>([]);
  const [holidays, setHolidays] = useState<string[]>([]);
  const [unavailableSlots, setUnavailableSlots] = useState<
    AppointmentSlotState[]
  >([]);
  const [appointmentBooked, setAppointmentBooked] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    getValues,
    watch,
    formState: { errors },
  } = useForm<z.infer<typeof CreateAppointmentSchema>>({
    defaultValues: {
      purpose: "",
    },
    resolver: zodResolver(CreateAppointmentSchema),
  });

  const purpose = watch("purpose");
  const date = new Date(watch("date"));
  const firstCut = new Date(date.setDate(date.getDate() + 5));

  useEffect(() => {
    if (ref.current) return;
    dispatch(fetchAppointmentSlots());
    getUnavailableDates();
    ref.current = true;
  }, []);

  useEffect(() => {
    if (value) {
      // @ts-ignore
      setValue("date", new Date(value).toLocaleDateString("en-CA"));
      getUnavailableSlots();
    }
  }, [value]);

  useEffect(() => {
    if (selectedSlotIds) {
      setValue("slots", selectedSlotIds);
    }
  }, [selectedSlotIds]);

  const onSubmit = async (data: z.infer<typeof CreateAppointmentSchema>) => {
    setIsLoading(true);
    try {
      // Book appointment
      const res = await API.APPOINTMENT.bookAppointment({ data });
      dispatch(addAppointment(res.data));
      // @ts-ignore
      let preBookedSlots = unavailableSlots;
      preBookedSlots.push(res.data?.slot);
      setUnavailableSlots(preBookedSlots);
      toast({
        status: "success",
        description: "Appointment booked successfully",
      });
      setAppointmentBooked(true);
    } catch (error: any) {
      toast({
        status: "error",
        title: "Error fetching unavailable dates",
        description: error?.message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getUnavailableDates = async () => {
    try {
      const res = await API.APPOINTMENT.getUnavailableDates();
      setHolidays(res.data?.map((d: { date: string }) => d.date));
      // res.data = [{ date: "2023-06-01" }, { date: "2023-06-02" }]
    } catch (error: any) {
      toast({
        status: "error",
        title: "Error fetching unavailable dates",
        description: error?.message,
      });
    }
  };

  const getUnavailableSlots = async () => {
    try {
      if (!value) return;
      const res = await API.APPOINTMENT.getUnavailableSlots({
        date: getValues("date"),
      });
      setUnavailableSlots(res.data);
      // res.data = [{ from: "10:00:00", to: "11:00:00", documentId: "123" }]
    } catch (error: any) {
      toast({
        status: "error",
        title: "Error fetching unavailable slots",
        description: error?.message,
      });
    }
  };

  if (appointmentBooked) {
    return (
      <>
        <VStack
          w={["full"]}
          h={["80vh"]}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Text fontSize={"lg"} fontWeight={"semibold"} mb={4}>
            Your slot was booked successfully!
          </Text>
          <Text>
            Upload your files by{" "}
            <span style={{ fontWeight: "bold", color: "#1552bd" }}>
              {new Date(getValues("date")).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </span>
          </Text>
          <Text>
            Your <span style={{ fontWeight: "bold" }}>1st cut</span> will be
            delivered by{" "}
          </Text>
          <Text fontSize={"xl"} fontWeight={"semibold"} color={"#1552bd"}>
            {firstCut.toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </Text>
          <br />
          <Link href={"/dashboard/new-project"}>
            <Button
              rightIcon={<FaArrowRight />}
              colorScheme="orange"
              bgColor={colors.orange}
            >
              Go to Upload
            </Button>
          </Link>
        </VStack>
      </>
    );
  }

  return (
    <>
      <Text fontSize={"lg"} fontWeight={"semibold"} mb={4}>
        Book New Appointment
      </Text>
      <br />

      <Box>
        <Text fontSize={"md"} mb={4}>
          Select Service
        </Text>
        <Stack direction={["column", "row"]} gap={4}>
          {services.map((s, i) => (
            <Button
              key={i}
              onClick={() => setValue("purpose", s)}
              colorScheme={purpose == s ? "orange" : "gray"}
              border={"1px solid #DADADA"}
            >
              {s}
            </Button>
          ))}
          <Button
            onClick={() => setValue("purpose", "other")}
            colorScheme={
              purpose == ""
                ? "gray"
                : purpose == "other" || !services.includes(purpose)
                ? "orange"
                : "gray"
            }
            border={"1px solid #DADADA"}
          >
            Other
          </Button>
        </Stack>

        {services.includes(purpose) || purpose == "" ? null : (
          <Input
            mt={4}
            placeholder="Type here..."
            variant={"flushed"}
            fontWeight={"semibold"}
            borderBottom={"1px"}
            {...register("purpose")}
          />
        )}
        {errors.purpose && (
          <Text fontSize={"xs"} color={"red.500"}>
            {errors.purpose.message}
          </Text>
        )}
      </Box>

      <VerticalSpacer h={"10vh"} />

      <Stack
        gap={8}
        direction={["column", "row"]}
        alignItems={"flex-start"}
        justifyContent={"flex-start"}
      >
        <Box>
          <Box mb={4}>
            <Text fontSize={"md"}>Select Date</Text>

            {errors.date && (
              <Text fontSize={"xs"} color={"red.500"}>
                {errors.date.message}
              </Text>
            )}
          </Box>

          <Calendar
            onChange={onChange}
            value={value}
            tileDisabled={({ date }) =>
              holidays.includes(new Date(date).toLocaleDateString("en-CA")) ||
              date < new Date()
            }
          />
        </Box>

        <Box>
          <Box mb={4}>
            <Text fontSize={"md"}>Select Slot</Text>
            {errors.slots && (
              <Text fontSize={"xs"} color={"red.500"}>
                {errors.slots.message}
              </Text>
            )}
          </Box>

          <Grid
            templateColumns={["repeat(1,1fr)", "repeat(2,1fr)"]}
            gap={4}
            h={"60"}
          >
            {slots.map((slot, i) => (
              <GridItem key={i}>
                <SlotCard
                  from={slot.from}
                  to={slot.to}
                  isDisabled={unavailableSlots
                    .map((slot) => slot.documentId)
                    .includes(slot?.documentId)}
                  isSelected={selectedSlotIds.includes(slot?.documentId)}
                  onClick={() => {
                    setSelectedSlotIds([slot?.documentId]);
                  }}
                />
              </GridItem>
            ))}
          </Grid>
          {selectedSlotIds.length > 0 && (
            <Button
              w={"full"}
              rightIcon={<FaArrowRight />}
              colorScheme="orange"
              bgColor={colors.orange}
              isLoading={isLoading}
              onClick={() => handleSubmit(onSubmit)()}
            >
              Book Now & Gto Upload
            </Button>
          )}
        </Box>
      </Stack>
    </>
  );
};

export default page;
