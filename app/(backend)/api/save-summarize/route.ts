import { NextRequest, NextResponse } from "next/server";
import { SummaryRepository } from "@/app/(backend)/repository/summary.repository";
import { Compose, Handler } from "@/app/(backend)/handlers";
import { HttpError } from "@/app/(backend)/errors";
import { SummaryInput } from "../../types";


async function action(req: NextRequest): Promise<NextResponse> {
  try {

    const body = await req.json();

    await SummaryRepository.create({
      originalText: body.originalText,
      summary: body.summary,
      createdAt: new Date()
    });

    return Compose("Summary saved successfully!", 200);

  } catch (error: any) {
    throw new HttpError(500, error?.message);
  }
}

export const POST = Handler(action);
