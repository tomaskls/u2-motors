import React from "react";

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
