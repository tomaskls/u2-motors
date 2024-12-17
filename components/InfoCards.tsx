'use client'

import React from "react";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";

interface InfoCard {
  imageUrl: string;
  imageAlt: string;
  title: string;
  ctaUrl: string;
}

interface InfoCardsProps {
  cards: InfoCard[];
}

const InfoCards = ({ cards }: InfoCardsProps) => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 p-4">
      {cards.map((card, index) => (
        <Card 
          key={index} 
          className="flex-1"
        >
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
          <CardFooter>
            <Button 
              href={card.ctaUrl}
              color="primary"
              variant="solid"
              className="w-full"
            >
              Daugiau
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default InfoCards;