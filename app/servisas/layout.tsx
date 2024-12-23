import React from "react";

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
