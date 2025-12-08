import { z } from "zod";

export const summarizeSchema = z.object({
  message: z
    .string()
    .min(20, "The text is too short. Please enter at least 20 characters.")
    .max(50000, "The text is too long.")
});

export type SummarizeInput = z.infer<typeof summarizeSchema>;
