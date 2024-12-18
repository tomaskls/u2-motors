import React from "react";
import Link from "next/link";

export default function Footer() {
    return (
      <footer className="bg-gray-100 dark:bg-gray-900 mt-auto">
        <div className="container mx-auto text-center px-4 py-4">
          {/* Pagrindinė informacija */}
          <div className="text-sm mb-3">
            <p>
              UAB &quot;MINAUTA&quot; | 
              Įmonės kodas: 303410025 | 
              PVM kodas: LT100008888112 | 
              Serbentų g. 55, LT-77124 Šiauliai
            </p>
          </div>
   
          {/* Copyright */}
          <div className="border-t border-gray-200 dark:border-gray-700 pt-3 text-sm text-gray-600 dark:text-gray-400">
            <p>Sukurta <Link href="https://www.tmh.lt" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Tomorrow&apos;s Media House</Link>. © 2024 UAB &quot;Minauta&quot;. Visos teisės saugomos.</p>
          </div>
        </div>
      </footer>
    );
}