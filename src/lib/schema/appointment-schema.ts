import * as z from "zod";

export const CreateAppointmentSchema = z.object({
  purpose: z.string().min(1, { message: "Please enter appointment purpose" }),
  date: z
    .string({ message: "Please select date" })
    .min(1, { message: "Please select date" }),
  slots: z.array(
    z
      .string({ message: "Please select time-slot" })
  ),
});
