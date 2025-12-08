import { NextRequest, NextResponse } from "next/server";
import { Handler, Compose } from "@/app/(backend)/handlers";
import { HttpError } from "@/app/(backend)/errors";
import { SummaryAI } from "@/app/(backend)/services/ai";

async function action(req: NextRequest): Promise<NextResponse> {
  try {

    const body = await req.json();
    const summary = await SummaryAI.summarize(body.message);

    return Compose(summary, 200);

  } catch (error: any) {
    throw new HttpError(500, error?.message);
  }
}

export const POST = Handler(action);
