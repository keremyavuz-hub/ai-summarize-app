
import { ApiResponse } from "../types";

export function compose<T>(data: T, status: number = 200): ApiResponse<T> {
  return {
    success: true,
    status,
    data
  };
}

export function fail(message: string, status: number = 400): ApiResponse<string> {
  return {
    success: false,
    status,
    data: message
  };
}
