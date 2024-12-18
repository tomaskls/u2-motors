export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "U2 Motors",
  description: "Opel atstovybe ir servisas",
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
    { label: "Savininkams", href: "https://www.opel.lt/savininkams/myopel.html" },
    { label: "Servisas", href: "/servisas" },
    { label: "Kontaktai", href: "kontaktai" },
  ],
  links: {
    contact: "/contact"
  },
};