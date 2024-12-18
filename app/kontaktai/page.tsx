import { Card, CardBody, CardHeader } from "@nextui-org/card";
import Image from "next/image";
import { contactSections, workingHours } from "@/constants/contactSection";
import { ClientGoogleMap, ClientContactLink } from "@/components/ClientContactComponents";
import React from "react";

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-6xl p-6">
      <h1 className="text-3xl font-bold mb-8">Mūsų kontaktai</h1>

      <div className="grid lg:grid-cols-2 gap-6 lg:gap-24">
        <div className="grid gap-6 order-2 lg:order-1">
          <Card className="bg-white dark:bg-blue-900 p-0 hidden lg:block">
            <div className="relative aspect-square w-full">
              <Image
                src="/images/2022-07-18.jpg"
                alt="Autocentras"
                fill
                className="object-cover"
              />
            </div>
          </Card>

          <ClientGoogleMap />
        </div>

        <div className="grid gap-6 order-1 lg:order-2">
          <Card className="bg-white dark:bg-blue-950">
            <CardHeader className="pb-0 pt-4 px-4 flex-col items-start">
              <h2 className="text-xl font-bold">Mūsų adresas</h2>
            </CardHeader>
            <CardBody className="py-4">
              <p>Serbentų g. 55, LT-77124 Šiauliai</p>
            </CardBody>
          </Card>

          {contactSections.map((section, index) => (
            <Card key={index} className="bg-white dark:bg-blue-950">
              <CardHeader className="pb-0 pt-4 px-4 flex-col items-start">
                <h2 className="text-xl font-bold">{section.title}</h2>
              </CardHeader>
              <CardBody className="py-4">
                <ClientContactLink 
                  href={`mailto:${section.email}`}
                  className="text-indigo-500 dark:text-fuchsia-400 hover:underline"
                >
                  {section.email}
                </ClientContactLink>
                {section.phones.map((phone, phoneIndex) => (
                  <ClientContactLink 
                    key={phoneIndex}
                    href={`tel:${phone}`}
                    className="block mt-2 hover:underline"
                  >
                    {phone}
                  </ClientContactLink>
                ))}
              </CardBody>
            </Card>
          ))}

          <Card className="bg-white dark:bg-blue-950">
            <CardHeader className="pb-0 pt-4 px-4 flex-col items-start">
              <h2 className="text-xl font-bold">Darbo laikas</h2>
            </CardHeader>
            <CardBody>
              <div className="space-y-2">
                {workingHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="font-medium">{schedule.days}</span>
                    <span>{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}