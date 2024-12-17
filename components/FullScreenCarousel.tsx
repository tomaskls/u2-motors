'use client'

import React from "react";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselImage {
  src: string;
  alt: string;
}

interface FullScreenCarouselProps {
  images: CarouselImage[];
}

const FullScreenCarousel = ({ images }: FullScreenCarouselProps) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0">
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          fill
          className="object-contain"
          priority
        />
      </div>
      
      {/* Navigation Buttons */}
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <Button
          isIconOnly
          className="bg-black/50 text-white hover:bg-black/70"
          onClick={handlePrevious}
          size="lg"
        >
          <ChevronLeft size={24} />
        </Button>
        
        <Button
          isIconOnly
          className="bg-black/50 text-white hover:bg-black/70"
          onClick={handleNext}
          size="lg"
        >
          <ChevronRight size={24} />
        </Button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? "bg-white w-4" : "bg-white/50"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FullScreenCarousel;