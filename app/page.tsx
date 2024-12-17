import React from "react";
import  FullScreenCarousel  from "@/components/FullScreenCarousel";
import InfoCards from "@/components/InfoCards";

export default function Home() {
  
  const images = [
    {
      src: "/images/GrandlandGoGrand_2880x1235_LIT.avif",
      alt: "First image"
    },
    {
      src: "/images/LCV_21x9_LIT.avif",
      alt: "Second image"
    },
    {
      src: "/images/Zafira_21x9_LIT.avif",
      alt: "Third image"
    }
  ];
  
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
      title: "Automobiliai",
      ctaUrl: "/antras"
    },
    {
      imageUrl: "/images/2022-11-14.jpg",
      imageAlt: "Trečia kortelė",
      title: "Servisas",
      ctaUrl: "/trecias"
    }
  ];
  
  return (
    <>
<FullScreenCarousel images={images} />
<div className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
<InfoCards cards={cards} />
</div>
<p className="mt-20 text-center">cia dar kazka prideti galim</p>
<p className="text-center">cia dar kazka prideti galim</p>
<p className="text-center">cia dar kazka prideti galim</p>
<p className="text-center">cia dar kazka prideti galim</p>
<p className="text-center">cia dar kazka prideti galim</p>
<p className="text-center">cia dar kazka prideti galim</p>
<p className="text-center">cia dar kazka prideti galim</p>
<p className="text-center">cia dar kazka prideti galim</p>
<p className="text-center">cia dar kazka prideti galim</p>
<p className="text-center">cia dar kazka prideti galim</p>
<p className="text-center">cia dar kazka prideti galim</p>
<p className="text-center">cia dar kazka prideti galim</p>
    </>
  );
}
