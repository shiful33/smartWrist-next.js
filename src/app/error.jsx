"use client";
import React, { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error("Critical App Error:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-base-200">
      <div className="max-w-lg p-10 bg-white shadow-2xl rounded-3xl">
        <div className="mb-4 text-6xl">⚠️</div>
        <h2 className="mb-2 text-2xl font-bold text-secondary">
          Something went wrong!
        </h2>
        <p className="mb-6 text-gray-500">
          {error.message ||
            "A technical error occurred while loading this page."}
        </p>

        <div className="flex justify-center gap-4">
          <button onClick={() => reset()} className="px-6 btn btn-primary">
            Try Again
          </button>
          <button
            onClick={() => (window.location.href = "/")}
            className="px-6 btn btn-outline"
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
}
