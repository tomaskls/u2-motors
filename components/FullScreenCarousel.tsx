'use client'
import React from "react";
import { CldImage } from "next-cloudinary";
import { Button } from "@nextui-org/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselImage {
  desktop: {
    src: string;
    alt: string;
  };
  mobile: {
    src: string;
    alt: string;
  };
}

interface FullScreenCarouselProps {
  images: CarouselImage[];
}

const FullScreenCarousel = ({ images }: FullScreenCarouselProps) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [touchStart, setTouchStart] = React.useState<number | null>(null);
  const [touchEnd, setTouchEnd] = React.useState<number | null>(null);
  const [isPaused, setIsPaused] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);
  const autoPlayInterval = React.useRef<NodeJS.Timeout | null>(null);

  const minSwipeDistance = 50;

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  React.useEffect(() => {
    const startAutoPlay = () => {
      autoPlayInterval.current = setInterval(() => {
        if (!isPaused) {
          setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          );
        }
      }, 2000);
    };

    startAutoPlay();

    return () => {
      if (autoPlayInterval.current) {
        clearInterval(autoPlayInterval.current);
      }
    };
  }, [isPaused, images.length]);

  const pauseAutoPlay = () => setIsPaused(true);
  const resumeAutoPlay = () => setIsPaused(false);

  const handlePrevious = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation();
    pauseAutoPlay();
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setTimeout(resumeAutoPlay, 5000);
  };

  const handleNext = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation();
    pauseAutoPlay();
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(resumeAutoPlay, 5000);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    pauseAutoPlay();
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext({ stopPropagation: () => { } } as React.TouchEvent);
    }
    if (isRightSwipe) {
      handlePrevious({ stopPropagation: () => { } } as React.TouchEvent);
    }
    setTimeout(resumeAutoPlay, 5000);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    pauseAutoPlay();
    if (e.key === 'ArrowLeft') {
      handlePrevious({ stopPropagation: () => { } } as React.MouseEvent);
    } else if (e.key === 'ArrowRight') {
      handleNext({ stopPropagation: () => { } } as React.MouseEvent);
    }
    setTimeout(resumeAutoPlay, 5000);
  };

  const handleDotClick = (index: number) => {
    pauseAutoPlay();
    setCurrentIndex(index);
    setTimeout(resumeAutoPlay, 5000);
  };

  React.useEffect(() => {
    return () => {
      if (autoPlayInterval.current) {
        clearInterval(autoPlayInterval.current);
      }
    };
  }, []);

  if (!images || images.length === 0) return null;

  const currentImage = isMobile ? images[currentIndex].mobile : images[currentIndex].desktop;

  return (
    <div
      className="relative w-full h-screen"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onKeyDown={onKeyDown}
      onMouseEnter={pauseAutoPlay}
      onMouseLeave={resumeAutoPlay}
      tabIndex={0}
    >
      <div className="absolute inset-0">
        <CldImage
          src={currentImage.src}
          alt={currentImage.alt}
          fill
          className="object-contain"
          priority
          sizes="100vw"
          quality={85}
          draggable={false}
        />
      </div>

      <div className="absolute inset-0 flex items-center justify-between p-4">
        <Button
          isIconOnly
          className="bg-black/50 text-white hover:bg-black/70 sm:w-12 sm:h-12 w-8 h-8 touch-manipulation"
          onClick={handlePrevious}
          onTouchEnd={handlePrevious}
          size="lg"
          aria-label="Previous image"
        >
          <ChevronLeft className="sm:w-6 sm:h-6 w-4 h-4" />
        </Button>

        <Button
          isIconOnly
          className="bg-black/50 text-white hover:bg-black/70 sm:w-12 sm:h-12 w-8 h-8 touch-manipulation"
          onClick={handleNext}
          onTouchEnd={handleNext}
          size="lg"
          aria-label="Next image"
        >
          <ChevronRight className="sm:w-6 sm:h-6 w-4 h-4" />
        </Button>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all touch-manipulation ${
              index === currentIndex ? "bg-white w-4" : "bg-white/50"
            }`}
            onClick={() => handleDotClick(index)}
            onTouchEnd={(e) => {
              e.stopPropagation();
              handleDotClick(index);
            }}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FullScreenCarousel;