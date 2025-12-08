import { Configuration } from "../config";
import { compose, fail } from "../handlers/response";
import { ApiResponse } from "../types";

/**
 * Bir URL'den veri almak için kullanılır.
 * @param {string} url - İstek yapılacak URL.
 * @param {RequestInit} [options] - Fetch fonksiyonuna iletilecek seçenekler.
 * @returns {Promise<ApiResponse<T | string>>} - Bir ApiResponse nesnesi ile çözümlenen bir promise döner.
 */
export default async function fetcher<T = any>(
  url: string,
  options: RequestInit = {}
): Promise<ApiResponse<T | string>> {

  // Default
  let data: ApiResponse<T | string> = fail("Unknown error", 500);

  try {
    const res = await fetch(url, {
      ...options,
      headers: {
        ...Configuration.headers,
        ...(options.headers ?? {}),
      }
    });

    data = await res.json();

  } catch (err: any) {
    data = fail(err.message);
  }

  return data;
}
