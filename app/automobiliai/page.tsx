import React from "react";
import { title } from "@/components/primitives";
import AutoCards from "@/components/AutoCards";
import { autocards } from "@/constants/autoCards";

export default function AutoPage() {
  return (
    <>
    <div className="mt-8 mb-8">
      <h1 className={title()}>Automobiliai</h1>
    </div>
    <div className="container mx-auto max-w-7xl pt-16 px-2 lg:px-6 flex-grow mb-16">
      <AutoCards cards={autocards} />
    </div>
    </>
  );
}
