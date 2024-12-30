"use client";
import React from "react";
import { FC, useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import clsx from "clsx";

export interface U2LogoMainProps {
  className?: string;
}

export const OpelLogo: FC<U2LogoMainProps> = ({
  className,
}) => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Render placeholder iki kol neužsikrovė
  if (!mounted) {
    return <div className={clsx("w-16 h-10 relative", className)} />;
  }

  const isSelected = theme === "light";

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
          src="/logo/OPEL_EMBLEM_2023_VERTICAL_BLACK_RGB.png"
          alt="Opel Logo"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain"
          priority={true}
        />
      )}
    </div>
  );
};