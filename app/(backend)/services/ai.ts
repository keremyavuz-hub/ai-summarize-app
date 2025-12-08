import OpenAI from "openai";


export class SummaryAI {
  private static _instance: OpenAI | null = null;

  /**
   * OpenAI istemci örneği.
   * Eğer örnek henüz oluşturulmamışsa, OpenAI API anahtarıyla yeni bir örnek oluşturur.
   * @returns {OpenAI} 
   */

  static get client() {
    if (!SummaryAI._instance) {
      SummaryAI._instance = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY!,
      });
    }
    return SummaryAI._instance;
  }


  static async message(text: string): Promise<string> {
    const response = await SummaryAI.client.responses.create({
      model: process.env.OPENAI_MODEL!,
      input: text,
      prompt_cache_retention: null
    });

    const summarizedMessage = (response as any).output_text ?? "";

    return summarizedMessage;
  }

  static async summarize(text: string): Promise<string> {
    const message = `${process.env.OPENAI_PROMPT}\n\n${text}`;
    return await SummaryAI.message(message);
  }
}
