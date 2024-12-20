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
            <h2 className="text-2xl font-bold mb-4">MINAUTA, UAB (U2 Motors)</h2>


            <p>
              MINAUTA, UAB yra oficialus„Opel” atstovas.
            </p>
            <p>
              Įmonė dirba pagal gamintojo keliamus reikalavimus ir standartus automobilių bei atsarginių dalių ir aksesuarų prekybai, automobilių priežiūros bei serviso paslaugoms.
            </p>

            <p>
              Serviso kolektyvas - profesionalūs autoremontininkai, vadybininkai - savo srities specialistai, operatyviai sprendžiantys iškilusias klientų autotransporto priemonių problemas.Remonto darbai atliekami po išsamios techninio gedimo situacijos analizės.
            </p>

            <p>
              Mūsų autoservise laikomasi „kaina - kokybė&quot; aptarnavimo standarto. Esame tam, kad rastume alternatyvius ir patikimus sprendimo būdus!
            </p>

            <p>
              Vertybės (galima šiuos pabrėžti)
              Taktiškas ir pagarbus klientų aptarnavimas
              Siekiame maksimaliai patenkinti kliento poreikius.
            </p>

            <p>
              Pasitikėjimas ir sąžiningumas
              Kuriame ryšius su klientais ir partneriais, grįstus korektiškumu, skaidrumu ir pagarba.
            </p>
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