export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + NextUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    { label: "Pagrindinis", href: "/" },
    { label: "Automobiliai", href: "/automobiliai" },
    { label: "Savininkams", href: "https://www.opel.lt/savininkams/myopel.html" },
    { label: "Servisas", href: "/servisas" },
    { label: "Kontaktai", href: "kontaktai" },
  ],
  
  navMenuItems: [
    { label: "Pagrindinis", href: "/" },
    { label: "Automobiliai", href: "/automobiliai" },
    { label: "Savininkams", href: "/savininkams" },
    { label: "Servisas", href: "/servisas" },
    { label: "Kontaktai", href: "kontaktai" },
  ],
  links: {
    contact: "/contact"
  },
};