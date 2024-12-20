import React from "react";
import FullScreenCarousel from "@/components/FullScreenCarousel";
import { CAROUSEL_IMAGES } from "@/constants/carousel-images";
import { cardsData } from "@/constants/infoCards";
import MixedCards from "@/components/InfoCards";

export default function Home() {
  return (
    <>
      <FullScreenCarousel images={CAROUSEL_IMAGES} />
      <div className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
      <MixedCards cards={cardsData} />
      </div>
    </>
  );
}