import React from "react";

export default function ServisasLayout({
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
