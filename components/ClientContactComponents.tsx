'use client';
import React from "react";
import { Card } from "@nextui-org/card";
import GoogleMap from "@/components/GoogleMap";

export function ClientGoogleMap() {
  return (
    <Card className="bg-white dark:bg-blue-900 p-0">
      <GoogleMap />
    </Card>
  );
}

export function ClientContactLink({ href, children, className }: { 
  href: string; 
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}