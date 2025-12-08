"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SummarizeInput, summarizeSchema } from "../../models/schemas/summarize.schema";

export default function () {
  return useForm<SummarizeInput>({
    resolver: zodResolver(summarizeSchema),
  });
}