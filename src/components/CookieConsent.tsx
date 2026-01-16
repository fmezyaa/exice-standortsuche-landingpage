'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const CONSENT_KEY = 'exice_cookie_consent';

type ConsentStatus = 'pending' | 'accepted' | 'rejected';

export function CookieConsent({ onAccept }: { onAccept: () => void }) {
  const [status, setStatus] = useState<ConsentStatus>('pending');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const savedConsent = localStorage.getItem(CONSENT_KEY);
    if (savedConsent === 'accepted') {
      setStatus('accepted');
      onAccept();
    } else if (savedConsent === 'rejected') {
      setStatus('rejected');
    } else {
      // Kurze Verzögerung bevor der Banner erscheint
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, [onAccept]);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    setStatus('accepted');
    setIsVisible(false);
    onAccept();
  };

  const handleReject = () => {
    localStorage.setItem(CONSENT_KEY, 'rejected');
    setStatus('rejected');
    setIsVisible(false);
  };

  if (status !== 'pending' || !isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6">
      <div className="max-w-4xl mx-auto bg-[#1a1a1a] border border-white/10 rounded-2xl p-6 shadow-2xl">
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <div className="flex-1">
            <h3 className="text-white font-semibold mb-2">Cookie-Einstellungen</h3>
            <p className="text-gray-400 text-sm">
              Wir nutzen Cookies und das Meta Pixel, um unsere Werbung zu optimieren und dir relevante Inhalte zu zeigen.
              Mehr dazu in unserer{' '}
              <Link href="/datenschutz" className="text-[#72add9] hover:underline">
                Datenschutzerklärung
              </Link>.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleReject}
              className="px-6 py-3 text-sm font-medium text-gray-400 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all"
            >
              Nur notwendige
            </button>
            <button
              onClick={handleAccept}
              className="px-6 py-3 text-sm font-medium text-white bg-[#e6223d] rounded-xl hover:bg-[#c91d34] transition-all"
            >
              Alle akzeptieren
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Hook um Consent-Status abzufragen
export function useConsentStatus(): ConsentStatus {
  const [status, setStatus] = useState<ConsentStatus>('pending');

  useEffect(() => {
    const savedConsent = localStorage.getItem(CONSENT_KEY);
    if (savedConsent === 'accepted') {
      setStatus('accepted');
    } else if (savedConsent === 'rejected') {
      setStatus('rejected');
    }
  }, []);

  return status;
}
