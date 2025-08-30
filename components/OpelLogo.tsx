"use client";
import React from "react";
import { FC } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useIsSSR } from "@react-aria/ssr";
import clsx from "clsx";

export interface U2LogoMainProps {
  className?: string;
}

export const OpelLogo: FC<U2LogoMainProps> = ({
  className,
}) => {
  const { theme } = useTheme();
  const isSSR = useIsSSR();
  
  // Naudojame tą pačią logiką kaip ThemeSwitch
  const isSelected = theme === "light" || isSSR;

  return (
    <div
      className={clsx(
        "w-16 h-10 relative",
        className,
      )}
    >
      {!isSelected ? (
        <Image
          src="/logo/OPEL_EMBLEM_2023_VERTICAL_WHITE_RGB.png"
          alt="Opel Logo"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain"
          priority={true}
        />
      ) : (
        <Image
          src="logo/OPEL-EMBLEM-2023-VERTICAL-BLACK-RGB.svg"
          alt="Opel Logo"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain"
          priority={false}
        />
      )}
    </div>
  );
};