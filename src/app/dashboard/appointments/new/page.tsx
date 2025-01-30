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

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const page = () => {
  const ref = useRef(false);
  const dispatch = useAppDispatch();
  const toast = useToast();
  const [value, onChange] = useState<Value>();

  const slots = useAppSelector((state) => state.appointmentSlotsReducer.slots);
  const [selectedSlotIds, setSelectedSlotIds] = useState<Array<string>>([]);
  const [holidays, setHolidays] = useState<string[]>([]);
  const [unavailableSlots, setUnavailableSlots] = useState<
    AppointmentSlotState[]
  >([]);

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<z.infer<typeof CreateAppointmentSchema>>({
    resolver: zodResolver(CreateAppointmentSchema),
  });

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
    if (selectedSlotIds) {
      setValue("slots", selectedSlotIds);
    }
  }, [value, selectedSlotIds]);

  const onSubmit = (data: z.infer<typeof CreateAppointmentSchema>) => {
    try {
      // Book appointment
    } catch (error: any) {
      toast({
        status: "error",
        title: "Error fetching unavailable dates",
        description: error?.message,
      });
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

  useEffect(() => {
    console.log(holidays);
  }, [holidays]);

  return (
    <>
      <Stack direction={["column", "row"]} gap={8}>
        <Box flex={4} p={4}>
          <Text fontSize={"lg"} fontWeight={"semibold"} mb={4}>
            Book New Appointment
          </Text>
          <br />

          <Box>
            <Text fontSize={"md"} mb={4}>
              Purpose
            </Text>
            <Input
              placeholder="Type here..."
              variant={"flushed"}
              fontWeight={"semibold"}
              borderBottom={"1px"}
              {...register("purpose")}
            />
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
                  holidays.includes(new Date(date).toLocaleDateString("en-CA"))
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
              >
                {slots.map((slot, i) => (
                  <SlotCard
                    key={i}
                    from={slot.from}
                    to={slot.to}
                    isDisabled={unavailableSlots
                      .map((slot) => slot.documentId)
                      .includes(slot?.documentId)}
                    isSelected={selectedSlotIds.includes(slot?.documentId)}
                    // onClick={() => {
                    //   if (selectedSlotIds.includes(slot?.documentId)) {
                    //     setSelectedSlotIds((prev) =>
                    //       prev.filter((id) => id !== slot?.documentId)
                    //     );
                    //   } else {
                    //     setSelectedSlotIds([
                    //       ...selectedSlotIds,
                    //       slot?.documentId,
                    //     ]);
                    //   }
                    // }}
                    onClick={() => {
                      setSelectedSlotIds([slot?.documentId]);
                    }}
                  />
                ))}

                {selectedSlotIds.length > 0 && (
                  <GridItem colSpan={2}>
                    <Button
                      w={"full"}
                      rightIcon={<FaArrowRight />}
                      colorScheme="orange"
                      bgColor={colors.orange}
                      onClick={handleSubmit(onSubmit)}
                    >
                      Book Now
                    </Button>
                  </GridItem>
                )}
              </Grid>
            </Box>
          </Stack>
        </Box>
        <Box flex={2} p={4}>
          <Text fontSize={"lg"} fontWeight={"semibold"} mb={4}>
            Recent Appointments
          </Text>
        </Box>
      </Stack>
    </>
  );
};

export default page;
