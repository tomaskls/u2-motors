import React from "react";
import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["Opel", "U2 Motors", "Automobilių servisas", "Opel Šiauliai", "Automobilių pardavimas", "Opel pardavimas", "Automobilių remontas"],
  authors: [{ name: "U2 Motors" }],
  creator: "U2 Motors",
  icons: {
    icon: "/OPEL-EMBLEM-2023-VERTICAL-BLACK-RGB.svg",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "lt_LT",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage ,
        width: 1320,
        height: 370,
        alt: siteConfig.name,
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
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "system", enableSystem: true }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className=" flex-grow">
              {children}
            </main>
            <footer>
           <Footer />
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
