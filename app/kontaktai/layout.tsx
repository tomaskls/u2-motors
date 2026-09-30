import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontaktai",
  description: "U2 Motors kontaktai: salonas, autoservisas, dalys ir aksesuarai. Serbentų g. 55, Šiauliai.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div>
        {children}
      </div>
    </section>
  );
}
