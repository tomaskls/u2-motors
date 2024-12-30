"use client";
import React from "react";
import { FC, useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import clsx from "clsx";

export interface U2LogoMainProps {
  className?: string;
}

export const U2LogoMain: FC<U2LogoMainProps> = ({
  className,
}) => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Render placeholder iki kol neužsikrovė
  if (!mounted) {
    return <div className={clsx("w-32 h-10 relative lg:mr-4", className)} />;
  }

  const isSelected = theme === "light";

  return (
    <div
      className={clsx(
        "w-32 h-10 relative lg:mr-4",
        className,
      )}
    >
      {!isSelected ? (
        <Image
          src="/logo/u2maindark.png"
          alt="U2 Motors Logo"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain"
          priority
        />
      ) : (
        <Image
          src="/logo/u2mainlight.png" 
          alt="U2 Motors Logo"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain"
          priority
        />
      )}
    </div>
  );
};