import React from "react";
import { title } from "@/components/primitives";
import InfoCards from "@/components/InfoCards";


export default function AboutPage() {
  const cards = [
    {
      imageUrl: "/images/2022-11-14.jpg",
      imageAlt: "Pirma kortelė",
      title: "Ypatingi Pasiūlymai",
      ctaUrl: "/pirmas"
    },
    {
      imageUrl: "/images/2022-11-14.jpg",
      imageAlt: "Antra kortelė",
      title: "Lengvieji Automobiliai",
      ctaUrl: "/antras"
    },
    {
      imageUrl: "/images/2022-11-14.jpg",
      imageAlt: "Trečia kortelė",
      title: "Komerciniai Automobiliai",
      ctaUrl: "/trecias"
    }
  ];
  
  return (
    
    <>
    <div className="mt-8 mb-8">
      <h1 className={title()}>Automobiliai</h1>
    </div>
    <div>
      <InfoCards cards={cards} />
    </div>
    </>
  );
}
