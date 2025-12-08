"use client";

import { SummarizeInput } from "@/app/(ui)/models/schemas/summarize.schema";
import SummaryAPI from "@/app/(ui)/services/summary.api";
import { BookText, Check, ScrollText, ThumbsDown } from "lucide-react";
import { useState } from "react";
import { useSummaryForm } from "@/app/(ui)/components/hooks";
import { UIButton, UITextarea } from "@/app/(ui)/components/form";;
import LoaderText from "@/app/(ui)/components/loader-text";
import { ErrorMessage, SuccessMessage } from "@/app/(ui)/components/messages";
import ErrorBoundary from "@/app/(ui)/components/error-boundary";
import { saveLocalSummary } from "@/app/(ui)/services/local-summary.api";

export default function SummarizePage() {
  const [summarizedResult, setSummarizedResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [saveMessage, setSaveMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { register, handleSubmit, formState: { errors }, getValues, reset } = useSummaryForm();

  const onSummarizeAction = (formData: SummarizeInput) => {
    const { message } = formData;
    sendAction(message);
  };

  const sendAction = async (message: string) => {
    try {
      setIsLoading(true);
      const { success, data } = await SummaryAPI.summarize(message);
      if (success) {
        setSummarizedResult(data);
      } else {
        setErrorMessage(data);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const saveSummarizeAction = async () => {
    const response = await SummaryAPI.saveSummarize({
      originalText: getValues("message"),
      summary: summarizedResult
    });

    // Veritabanına kaydet
    setSaveMessage(response.data);
    // Local Storage'da kaydet
    saveLocalSummary(summarizedResult);
    // Formu sıfırla
    reset();

    // Diğer sıfırlama islemleri
    setErrorMessage("");
    setSummarizedResult("");

    setTimeout(() => setSaveMessage(""), 3000);
  };

  const rejectAction = () => {
    sendAction(getValues("message"));
  };

  return (
    <>
      <ErrorBoundary>
        <LoaderText isLoading={isLoading} />
        {!summarizedResult && !isLoading && (
          <form onSubmit={handleSubmit(onSummarizeAction)} className="main-form">
            <div className="input-area">
              <UITextarea
                {...register("message")}
                className="input-box"
                placeholder="Enter a long piece of text you want summarized. You can paste articles, reports, essays, or notes here. The AI will analyze the content and provide a clear, concise summary that captures the main ideas while removing unnecessary details."
                disabled={isLoading}
              ></UITextarea>
            </div>

            <div className="controls">
              <UIButton icon={BookText} className="footer-btn" isLoading={isLoading}>
                Summarize
              </UIButton>

              <ErrorMessage message={errors.message?.message || errorMessage} />
              <SuccessMessage message={saveMessage} />
            </div>
          </form>
        )}

        {summarizedResult && !isLoading && (
          <div className="result-section">
            <h2 className="result-title">
              <ScrollText /> Summarized Result
            </h2>

            <div className="result-content">
              <p>{summarizedResult}</p>
            </div>

            <div className="controls">
              <UIButton
                icon={Check}
                className="footer-btn approve"
                onClick={saveSummarizeAction}
              >
                Approve & Save
              </UIButton>

              <UIButton
                icon={ThumbsDown}
                className="footer-btn reject"
                onClick={rejectAction}
              >
                I didn't like it, Try again
              </UIButton>
            </div>
          </div>
        )}
      </ErrorBoundary>
    </>
  );
}
