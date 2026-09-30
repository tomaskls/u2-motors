import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automobiliai",
  description: "Opel lengvieji ir komerciniai automobiliai, ypatingi pasiūlymai ir automobiliai salone – U2 Motors Šiauliuose.",
};

export default function AutoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center ">
      <div className=" text-center justify-center">
        {children}
      </div>
    </section>
  );
}
