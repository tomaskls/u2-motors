import React from "react";
import FullScreenCarousel from "@/components/FullScreenCarousel";
import InfoCards from "@/components/InfoCards";
import { CAROUSEL_IMAGES } from "@/constants/carousel-images";
import { INFO_CARDS } from "@/constants/infoCards";

export default function Home() {
  return (
    <>
      <FullScreenCarousel images={CAROUSEL_IMAGES} />
      <div className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
        <InfoCards cards={INFO_CARDS} />
      </div>
    </>
  );
}