import React from "react";
export default function AboutLayout({
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
