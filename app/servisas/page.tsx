import RegistrationPage from "@/components/RegistrationPage";
import React from "react";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-7xl p-6 mt-10">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Kairė pusė (desktop) - viršus (mobile) */}
        <div className="space-y-6">
          {/* Nuotrauka */}
          <div className="relative aspect-video max-w-md rounded-lg overflow-hidden mb-14">
            <Image
              src="/images/2022-07-18.jpg"
              alt="Autocentras"
              fill
              className="object-cover"
            />
          </div>

          {/* Aprašymas */}
          <div className="prose dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-4">Veiklos aprašymas</h2>
            
            <ul className="mb-6 list-disc pl-5 space-y-1">
              <li>Automobilių remontas, autoservisas</li>
              <li>Visos OPEL teikiamos paslaugos</li>
              <li>OPEL automobilių visa naujausia diagnostika</li>
            </ul>

            <p>
              U2 Motors, UAB Minauta specializuojasi  OPEL  markės 
              automobilių remontu. Galime pasiūlyti įsigyti naujus bei naudotus 
              OPEL markės automobilius.
            </p>

            <p>
              Serviso kolektyvas - profesionalūs autoremontininkai, vadybininkai - 
              savo srities specialistai, operatyviai sprendžiantys iškilusias 
              klientų autotransporto priemonių problemas.
            </p>

            <p>
              Remonto darbai atliekami po išsamios techninio gedimo situacijos 
              analizės, specialistų konsultacijos ir tik gavus kliento sutikimą. 
              Dirbama su šiuolaikiška diagnostikos aparatūra.
            </p>

            <p>
              Tai leidžia pilnai išanalizuoti autotransporto priemonės gedimo 
              problemas, jas įvertinti ir pateikti kvalifikuotus techninių 
              problemų sprendimo būdus.
            </p>

            <p>
              Mūsų autoservise laikomasi „kaina - kokybė&quot; aptarnavimo standarto. 
              Esame tam, kad rastume alternatyvius ir patikimus sprendimo būdus!
            </p>

            <p className="font-semibold">„VIBER LES AUTOS&quot;</p>
          </div>
        </div>

        {/* Dešinė pusė (desktop) - apačia (mobile) */}
        <div>
          <RegistrationPage />
        </div>
      </div>
    </div>
  );
}