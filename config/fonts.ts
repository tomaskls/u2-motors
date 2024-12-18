import { Fira_Code as FontMono, Open_Sans as FontSans } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});