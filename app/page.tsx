"use client"
import React from "react";
import Script from "next/script";
import FullScreenCarousel from "@/components/FullScreenCarousel";
import { CAROUSEL_IMAGES } from "@/constants/carousel-images";
import { cardsData } from "@/constants/infoCards";
import MixedCards from "@/components/InfoCards";

export default function Home() {
  return (
    <>
      <FullScreenCarousel images={CAROUSEL_IMAGES} />
      <div id="autobahn-webshop" data-config-uuid="6adb2686-e54b-41fa-915f-73a2f87c180f"></div>
      <Script
        src="https://webshop.abahn.net/startup.js"
        strategy="afterInteractive"
        onError={(e) => {
          console.error('Script failed to load', e);
        }}
      />
      <Script id="abahn-event-listener" strategy="afterInteractive">
        {`
          window.addEventListener('message', function (event) {
            if (event.origin !== 'https://webshop.abahn.net') {
              console.warn('Blocked cross-origin message from:', event.origin);
              return;
            }
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push(event.data);
          }, false);
        `}
      </Script>
      <div className="container mx-auto max-w-7xl pt-16 px-4 lg:px-6 flex-grow">
        <MixedCards cards={cardsData} />
      </div>
    </>
  );
}