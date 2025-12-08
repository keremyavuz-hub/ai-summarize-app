import { NextRequest, NextResponse } from "next/server";
import Compose from "./compose";
import { HttpError } from "../errors";

type Handler = (req: NextRequest) => Promise<NextResponse> | NextResponse;

export default function (handler: Handler) {
  return async (req: NextRequest) => {
    try {
      return await handler(req);
    } catch (error: any) {

      // HttpError sınıfından miras alınan bir hata ise döndür
      if (error instanceof HttpError) {
        return Compose({
          message: error.message,
          code: error.code
        }, error.status, true);
      }

      // Beklenmeyen bir hata ise 500 hata kodunu döndür
      return Compose({
        message: error.message,
        code: "ERROR"
      }, 500, true);
    }
  }
}