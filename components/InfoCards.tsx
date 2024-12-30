'use client'
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { CardItem, InfoCard, VideoCard } from "@/types/cards";
import { Play } from "lucide-react";

const InfoCardComponent = ({ card }: { card: InfoCard }) => {
  const linkProps = card.isExternal 
    ? { target: "_blank", rel: "noopener noreferrer" } 
    : {};

  return (
    <Card className="w-full bg-white dark:bg-blue-950">
      <CardHeader className="p-0">
        <div className="relative w-full h-48">
          <Image
            src={card.imageUrl}
            alt={card.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      </CardHeader>
      <CardBody>
        <h2 className="text-2xl font-bold">{card.title}</h2>
      </CardBody>
      <CardFooter className="flex justify-end">
        <Button
          as={Link}
          href={card.ctaUrl}
          color="primary"
          {...linkProps}
        >
          Daugiau
        </Button>
      </CardFooter>
    </Card>
  );
};

const VideoCardComponent = ({ card }: { card: VideoCard }) => {
  const [showVideo, setShowVideo] = useState(false);
  const thumbnailUrl = `https://img.youtube.com/vi/${card.videoId}/maxresdefault.jpg`;

  return (
    <Card className="w-full bg-white dark:bg-blue-950">
      <CardHeader className="p-0">
        <div className="relative w-full h-60">
          {!showVideo ? (
            <>
              <Image
                src={thumbnailUrl}
                alt="Video thumbnail"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity hover:bg-black/40">
                <Button
                  isIconOnly
                  className="bg-red-600 text-white hover:bg-red-700 w-16 h-16"
                  onPress={() => setShowVideo(true)}
                  aria-label="Play video"
                >
                  <Play className="w-8 h-8" />
                </Button>
              </div>
            </>
          ) : (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${card.videoId}?autoplay=1`}
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            />
          )}
        </div>
      </CardHeader>
    </Card>
  );
};

interface MixedCardsProps {
  cards: CardItem[];
}

const MixedCards = ({ cards }: MixedCardsProps) => {
  const renderCard = (card: CardItem) => {
    switch (card.variant) {
      case 'info':
        return <InfoCardComponent card={card} />;
      case 'video':
        return <VideoCardComponent card={card} />;
    }
  };

  return (
    <div className="container mx-auto">
      {/* Desktop Layout */}
      <div className="hidden lg:grid grid-cols-3 gap-8 p-4 mb-16">
        {cards.map((card) => (
          <div key={card.id}>
            {renderCard(card)}
          </div>
        ))}
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-col gap-8">
        {cards.map((card) => (
          <div key={card.id}>
            {renderCard(card)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MixedCards;