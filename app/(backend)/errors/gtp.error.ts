export default class GPTError extends Error {
  status: number;
  code: string;

  constructor(raw: any) {
    const err = raw?.error || raw;
    const message = err?.message ?? "AI service error occurred.";

    super(message);

    this.name = "GPTError";

    const { status, code } = GPTError.normalize(err);

    this.status = status;
    this.code = code;
  }

  static normalize(err: any) {
    const type = err?.type;

    if (type === "insufficient_quota") {
      return {
        status: 429,
        code: "insufficient_quota"
      };
    }

    if (type === "rate_limit_exceeded") {
      return {
        status: 429,
        code: "rate_limit_exceeded"
      };
    }

    if (type === "context_length_exceeded") {
      return {
        status: 400,
        code: "context_length_exceeded"
      };
    }

    if (type === "authentication_error") {
      return {
        status: 401,
        code: "authentication_error"
      };
    }

    if (type === "invalid_request_error") {
      return {
        status: 400,
        code: "invalid_request"
      };
    }

    if (type === "api_connection_error" || type === "timeout") {
      return {
        status: 503,
        code: "api_connection_error"
      };
    }

    return {
      status: 500,
      code: type || "gpt_unknown_error"
    };
  }
}
