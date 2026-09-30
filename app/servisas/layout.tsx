import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servisas",
  description: "Oficialus Opel autoservisas Šiauliuose – priežiūra, remontas, originalios dalys.",
};

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div >
        {children}
      </div>
    </section>
  );
}
