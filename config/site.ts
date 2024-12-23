export type NavItem = {
  label: string;
  href: string;
  isExternal?: boolean;
};

export type SiteConfig = {
  navItems: NavItem[];
  navMenuItems: NavItem[];
  links: {
    contact: string;
  };
};

export const siteConfig: SiteConfig = {
  navItems: [
    { label: "Pagrindinis", href: "/" },

    {
      label: "Naujienos",
      href: "https://www.opel.lt/experience-opel/opel-naujienos.html",
      isExternal: true,
    },

    { label: "Automobiliai", href: "/automobiliai" },
    {
      label: "Savininkams",
      href: "https://www.opel.lt/savininkams/myopel.html",
      isExternal: true,
    },
    { label: "Servisas", href: "/servisas" },
    { label: "Kontaktai", href: "kontaktai" },
  ],

  navMenuItems: [
    { label: "Pagrindinis", href: "/" },
    {
      label: "Naujienos",
      href: "https://www.opel.lt/experience-opel/opel-naujienos.html",
      isExternal: true,
    },
    { label: "Automobiliai", href: "/automobiliai" },
    {
      label: "Savininkams",
      href: "https://www.opel.lt/savininkams/myopel.html",
      isExternal: true,
    },
    { label: "Servisas", href: "/servisas" },
    { label: "Kontaktai", href: "kontaktai" },
  ],
  links: {
    contact: "/registracija",
  },
};
