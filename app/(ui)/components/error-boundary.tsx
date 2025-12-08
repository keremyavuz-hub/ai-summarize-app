"use client";

import React from "react";

type Props = {
  children: React.ReactNode;
};

type State = {
  hasError: boolean;
  error: any;
};

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }

  componentDidCatch(error: any, info: any) {
    console.error("UI Error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex-1 w-full flex items-center justify-center">

          <div className="bg-[linear-gradient(180deg,#3f3f52,#ac3333)] backdrop-blur-md border border-[#666] 
                  rounded-xl p-8 max-w-md w-full text-center shadow-lg">

            <h2 className="text-2xl font-semibold text-white mb-3">
              Something went wrong
            </h2>

            <p className="text-white text-sm whitespace-pre-wrap mb-6">
              A technical error has occurred while loading this page.<br />
              Please reach out to the technical support team so we can resolve the issue as soon as possible.
            </p>

            <button
              onClick={() => location.reload()}
              className="px-5 py-2.5 text-white rounded-lg 
                 transition shadow-sm btn"
            >
              Refresh Page
            </button>
          </div>
        </div>

      );
    }

    return this.props.children;
  }
}
