import fetcher from "./models/fetcher";
import { ApiResponse, MessageInputType } from "./types";
import { Urls } from "./urls";

export default class SummaryAPI {
  /**
   * API'den mesajı özetle
   * @param {string} message
   * @returns
   */
  static async summarize(message: string): Promise<ApiResponse<string>> {
    return await fetcher(Urls.summarize, {
      method: "POST",
      body: JSON.stringify({ message })
    })
  }

  static async saveSummarize(message: MessageInputType): Promise<ApiResponse<string>> {
    return await fetcher(Urls.saveSummarize, {
      method: 'POST',
      body: JSON.stringify(message)
    })
  }
}