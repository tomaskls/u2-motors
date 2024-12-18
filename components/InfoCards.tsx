'use client'
import React from "react";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import Link from "next/link";
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
    <div className="flex flex-wrap gap-8 p-4 justify-center lg:justify-between">
      {cards.map((card, index) => (
        <Card 
          key={index} 
          className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)] bg-white dark:bg-blue-950"
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
          <CardFooter className="flex justify-end">
            <Button 
              as={Link}
              href={card.ctaUrl}
              className=" bg-indigo-500 dark:bg-fuchsia-500 text-white hover:bg-indigo-600 dark:hover:bg-fuchsia-600"
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