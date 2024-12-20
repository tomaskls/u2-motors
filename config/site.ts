export type NavItem = {
  label: string;
  href: string;
  isExternal?: boolean;
};

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage?: string;
  navItems: NavItem[];
  navMenuItems: NavItem[];
  links: {
    contact: string;
  };
};

export const siteConfig: SiteConfig = {
  name: "U2 Motors | Opel",
  description: "U2 Motors - oficialus Opel atstovas Šiauliuose. Profesionalus automobilių servisas, originalios dalys, nauji ir naudoti automobiliai. Opel pardavimas ir aptarnavimas.",
  url: "https://www.u2motors.lt",
  ogImage: "https://u2-motors.vercel.app/logo/u2meta.jpg", // čia reikės pridėti jūsų OG paveiksliuką
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