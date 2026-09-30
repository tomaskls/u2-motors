import React from "react";
import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { Providers } from "./providers";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/Footer";
import Script from "next/script";
import { GoogleAnalytics } from '@next/third-parties/google'
import CookieConsent from '@/components/CookieConsent';

export const metadata: Metadata = {
  metadataBase: new URL("https://www.u2motors.lt"),
  title: {
    default: "U2 Motors | Opel",
    template: "%s | U2 Motors",
  },
  description: "U2 Motors - oficialus Opel atstovas Šiauliuose. Profesionalus automobilių servisas, originalios dalys, nauji ir naudoti automobiliai. Opel pardavimas ir aptarnavimas.",
  keywords: ["Opel", "U2 Motors", "Automobilių servisas", "Opel Šiauliai", "Automobilių pardavimas", "Opel pardavimas", "Automobilių remontas"],
  authors: [{ name: "U2 Motors" }],
  creator: "U2 Motors",
  icons: {
    icon: "/logo/OPEL-EMBLEM-2023-VERTICAL-BLACK-RGB.svg",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "lt_LT",
    url: "https://www.u2motors.lt",
    title: "U2 Motors | Opel",
    description: "U2 Motors - oficialus Opel atstovas Šiauliuose. Profesionalus automobilių servisas, originalios dalys, nauji ir naudoti automobiliai. Opel pardavimas ir aptarnavimas.",
    siteName: "U2 Motors | Opel",
    images: [
      {
        url: "/logo/u2meta.png",
        width: 1200,
        height: 430,
        alt: "U2 Motors | Opel",
      },
    ],
  },
};
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="lt">
      <head>
        {/* Consent Mode numatytosios reikšmės turi būti nustatytos prieš įkeliant GA */}
        <Script id="consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            var c = null;
            try { c = localStorage.getItem('cookieConsent'); } catch (e) {}
            gtag('consent', 'default', {
              'analytics_storage': c === 'all' || c === 'analytics' ? 'granted' : 'denied',
              'ad_storage': c === 'all' ? 'granted' : 'denied',
              'ad_user_data': c === 'all' ? 'granted' : 'denied',
              'ad_personalization': c === 'all' ? 'granted' : 'denied'
            });
          `}
        </Script>
      </head>
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light", enableSystem: true }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className=" flex-grow">
              {children}
            </main>
            <GoogleAnalytics gaId="G-CTZSL5TZ8M" />
            <footer>
              <Footer />
            </footer>
          </div>
          <CookieConsent />
        </Providers>
      </body>
    </html>
  );
}
