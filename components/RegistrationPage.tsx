import { Card } from "@nextui-org/card";
import { ServiceRegistrationForm } from "@/components/ServiceRegistrationForm";
import React from "react";

export default function RegistrationPage() {
  return (
    <div className="container mx-auto max-w-4xl p-6">
      <h1 className="text-3xl font-bold mb-8">Registracija į servisą</h1>
      <div className="mb-8 text-left">
        <p className="text-xl">
          Skambinkite telefonu <a href="tel:+37068677855" className="text-primary hover:underline">+370 686 77855</a> arba užpildykite formą
        </p>
      </div>
      <Card className="p-6 bg-white dark:bg-blue-950">
        <ServiceRegistrationForm />
      </Card>
    </div>
  );
}