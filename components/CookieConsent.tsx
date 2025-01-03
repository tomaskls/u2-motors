'use client';

import React from 'react';
import Script from 'next/script';
import { useEffect, useState } from 'react';

interface ConsentPreferences {
  analytics_storage: 'granted' | 'denied';
  ad_storage: 'granted' | 'denied';
  ad_user_data: 'granted' | 'denied';
  ad_personalization: 'granted' | 'denied';
}

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const hasConsent = localStorage.getItem('cookieConsent');
    if (!hasConsent) {
      setShowConsent(true);
    }
  }, []);

  const updateConsent = (preferences: ConsentPreferences) => {
    window.gtag('consent', 'update', preferences);
  };

  const handleAcceptAll = () => {
    const preferences: ConsentPreferences = {
      analytics_storage: 'granted',
      ad_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted'
    };
    updateConsent(preferences);
    localStorage.setItem('cookieConsent', 'all');
    setShowConsent(false);
  };

  const handleAcceptAnalytics = () => {
    const preferences: ConsentPreferences = {
      analytics_storage: 'granted',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied'
    };
    updateConsent(preferences);
    localStorage.setItem('cookieConsent', 'analytics');
    setShowConsent(false);
  };

  const handleDecline = () => {
    const preferences: ConsentPreferences = {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied'
    };
    updateConsent(preferences);
    localStorage.setItem('cookieConsent', 'declined');
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <>
      <Script id="gtm-consent" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            'analytics_storage': 'denied',
            'ad_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied'
          });
        `}
      </Script>

      <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-100 border-t border-gray-200">
        <div className="max-w-7xl mx-auto p-4">
          {!showDetails ? (
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex-1">
                <p className="text-gray-600">
                  Mes naudojame slapukus svetainės analitikai ir reklamai. 
                  Jūs galite pasirinkti su kuriais slapukais sutinkate.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                <button
                  onClick={() => setShowDetails(true)}
                  className="w-full sm:w-auto px-6 py-3 sm:py-2 text-gray-600 bg-gray-200 hover:bg-gray-300 rounded-md transition-colors text-sm"
                >
                  Daugiau informacijos
                </button>
                <button
                  onClick={handleDecline}
                  className="w-full sm:w-auto px-6 py-3 sm:py-2 text-gray-600 bg-gray-200 hover:bg-gray-300 rounded-md transition-colors text-sm"
                >
                  Atmesti visus
                </button>
                <button
                  onClick={handleAcceptAnalytics}
                  className="w-full sm:w-auto px-6 py-3 sm:py-2 text-gray-600 bg-gray-200 hover:bg-gray-300 rounded-md transition-colors text-sm"
                >
                  Tik analitika
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="w-full sm:w-auto px-6 py-3 sm:py-2 text-white bg-blue-800 hover:bg-blue-900 rounded-md transition-colors text-sm"
                >
                  Sutinku su visais
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg p-4 max-w-2xl mx-auto">
              <div className="mb-4">
                <h2 className="text-lg font-semibold mb-2">Apie slapukus</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-1">Būtinieji slapukai</h3>
                    <p className="text-sm text-gray-600">
                      Šie slapukai yra būtini svetainės veikimui ir negali būti išjungti.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Analitiniai slapukai</h3>
                    <p className="text-sm text-gray-600">
                      Padeda mums suprasti, kaip lankytojai naudojasi svetaine. 
                      Naudojame Google Analytics.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Reklaminiai slapukai</h3>
                    <p className="text-sm text-gray-600">
                      Naudojami rodyti jums pritaikytą reklamą. 
                      Šie slapukai seka jūsų naršymą skirtingose svetainėse.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-end gap-2 pt-4 border-t">
                <button
                  onClick={() => setShowDetails(false)}
                  className="w-full sm:w-auto px-6 py-3 sm:py-2 text-gray-600 bg-gray-200 hover:bg-gray-300 rounded-md transition-colors text-sm"
                >
                  Grįžti
                </button>
                <button
                  onClick={handleDecline}
                  className="w-full sm:w-auto px-6 py-3 sm:py-2 text-gray-600 bg-gray-200 hover:bg-gray-300 rounded-md transition-colors text-sm"
                >
                  Atmesti visus
                </button>
                <button
                  onClick={handleAcceptAnalytics}
                  className="w-full sm:w-auto px-6 py-3 sm:py-2 text-gray-600 bg-gray-200 hover:bg-gray-300 rounded-md transition-colors text-sm"
                >
                  Tik analitika
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="w-full sm:w-auto px-6 py-3 sm:py-2 text-white bg-blue-800 hover:bg-blue-900 rounded-md transition-colors text-sm"
                >
                  Sutinku su visais
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}