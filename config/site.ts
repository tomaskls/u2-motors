export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "U2 Motors | Opel",
  description: "cia reikia parasyt ka nori",
  url: "https://www.u2motors.lt/",
  navItems: [
    { label: "Pagrindinis", href: "/" },
    { label: "Naujienos", href: "/naujienos" },
    { label: "Automobiliai", href: "/automobiliai" },
    { 
      label: "Savininkams", 
      href: "https://www.opel.lt/savininkams/myopel.html",
      isExternal: true 
    },
    { label: "Servisas", href: "/servisas" },
    { label: "Kontaktai", href: "kontaktai" },
  ],
  
  navMenuItems: [
    { label: "Pagrindinis", href: "/" },
    { label: "Naujienos", href: "/naujienos" },
    { label: "Automobiliai", href: "/automobiliai" },
    { 
      label: "Savininkams", 
      href: "https://www.opel.lt/savininkams/myopel.html",
      isExternal: true 
    },
    { label: "Servisas", href: "/servisas" },
    { label: "Kontaktai", href: "kontaktai" },
  ],
  links: {
    contact: "/registracija"
  },
};