"use client";
import React from "react";
import { useEffect } from "react";
export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container mx-auto max-w-xl p-6 my-16 text-center">
      <h2 className="text-2xl font-bold mb-4">Įvyko klaida</h2>
      <p className="mb-6">Atsiprašome, puslapio nepavyko įkelti.</p>
      <button
        className="px-6 py-2 text-white bg-blue-800 hover:bg-blue-900 rounded-md transition-colors"
        onClick={
          () => reset()
        }
      >
        Bandyti dar kartą
      </button>
    </div>
  );
}
