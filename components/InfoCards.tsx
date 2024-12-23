'use client'
import React from "react";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { CardItem, InfoCard, VideoCard } from "@/types/cards";

const InfoCardComponent = ({ card }: { card: InfoCard }) => (
  <Card className="w-full bg-white dark:bg-blue-950">
    <CardHeader className="p-0">
      <div className="relative w-full h-48">
        <Image
          src={card.imageUrl}
          alt={card.imageAlt}
          fill
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
      >
        Daugiau
      </Button>
    </CardFooter>
  </Card>
);

const VideoCardComponent = ({ card }: { card: VideoCard }) => (
  <Card className="w-full bg-white dark:bg-blue-950">
    <CardHeader className="p-0">
      <div className="relative w-full h-60">
        <iframe
          src={`https://www.youtube.com/embed/${card.videoId}`}
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>
    </CardHeader>
  </Card>
);

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
      <div className="hidden lg:grid grid-cols-3 gap-8 p-4 mb-16"> {/* Pakeista į grid-cols-3 */}
        {cards.map((card) => (
          <div key={card.id}>
            {renderCard(card)}
          </div>
        ))}
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-col gap-8 ">
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