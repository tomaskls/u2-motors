// components/CldImageWrapper.tsx
"use client";

import React from "react";
import { CldImage } from 'next-cloudinary';

interface CldImageWrapperProps {
  src: string;
  width: number;
  height: number;
  alt: string;
  className?: string;
}

export default function CldImageWrapper({
  src,
  width,
  height,
  alt,
  className
}: CldImageWrapperProps) {
  return (
    <CldImage
      src={src}
      width={width}
      height={height}
      alt={alt}
      className={className}
    />
  );
}