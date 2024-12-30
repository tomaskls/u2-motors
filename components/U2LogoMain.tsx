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

export const U2LogoMain: FC<U2LogoMainProps> = ({
 className,
}) => {
 const { theme } = useTheme();
 const isSSR = useIsSSR();
 
 const isSelected = theme === "light" || isSSR;

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