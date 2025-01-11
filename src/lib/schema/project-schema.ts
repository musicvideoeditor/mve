import * as zod from "zod";

export const CreateProjectSchema = zod.object({
    name: zod.string().min(1, { message: "Please enter project name" }),
    description: zod.string(),
});