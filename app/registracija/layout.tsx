import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Registracija į servisą",
  description: "Registruokitės į oficialų Opel autoservisą Šiauliuose telefonu arba internetu.",
};

export default function RegLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        {children}
      </div>
    </section>
  );
}
