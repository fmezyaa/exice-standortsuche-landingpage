'use client';

import { useState, useEffect, useCallback } from 'react';
import { MetaPixel } from './MetaPixel';
import { CookieConsent } from './CookieConsent';

const CONSENT_KEY = 'exice_cookie_consent';

export function TrackingProvider({ children }: { children: React.ReactNode }) {
  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    // Check if consent was previously given
    const savedConsent = localStorage.getItem(CONSENT_KEY);
    if (savedConsent === 'accepted') {
      setConsentGiven(true);
    }
  }, []);

  const handleAccept = useCallback(() => {
    setConsentGiven(true);
  }, []);

  return (
    <>
      <MetaPixel enabled={consentGiven} />
      <CookieConsent onAccept={handleAccept} />
      {children}
    </>
  );
}
