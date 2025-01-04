import * as z from "zod";


export const SignupSchema = z.object({
  name: z.string().min(1, { message: "Please enter your name" }),
  email: z.string().email({ message: "Email is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export const LoginSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
  password: z.string().min(1, { message: "Password is required" }),
})

export const ForgotPasswordSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
});

export const ResetPasswordSchema = z
  .object({
    code: z.string().nullable(),
    password: z.string().min(1, { message: "Password is required" }),
    passwordConfirmation: z
      .string()
      .min(1, { message: "Confirmation Password is required" }),
  })
  .superRefine((data, ctx) => {
    if (data?.password !== data?.passwordConfirmation) {
      ctx.addIssue({
        code: "custom",
        message: "Password and Confirmation Password do not match",
        path: ["passwordConfirmation"],
      });
    }
  });
