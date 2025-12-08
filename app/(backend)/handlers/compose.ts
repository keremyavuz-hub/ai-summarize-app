import { NextResponse } from "next/server";


/**
 * API genelinde döndürülecek tüm mesajlar için kullanılır
 */
export default function <T>(data: T, status: number, isError: boolean = false) {
  return NextResponse.json({
    success: !isError,
    data
  },
    { status }
  );
}