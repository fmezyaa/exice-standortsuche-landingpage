'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { trackMetaEvent } from '@/components/MetaPixel';

export default function Home() {
  const [isSameContact, setIsSameContact] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const campaignImages = [
    '/images/kampagne-1.jpg',
    '/images/kampagne-2.jpg',
    '/images/kampagne-3.jpg',
    '/images/kampagne-4.jpg',
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('https://formspree.io/f/mreeegkk', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        // Meta Pixel Lead Event
        trackMetaEvent('Lead', {
          content_name: 'Standortvorschlag',
          content_category: 'Fitnessfläche',
        });
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error('Fehler beim Senden:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const targetCities = ['Luxemburg', 'Saarbrücken', 'Wiesbaden', 'Mainz'];

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-[#e6223d] flex flex-col items-center justify-center p-8 relative overflow-hidden">
        <div className="relative z-10 text-center max-w-lg">
          <Image
            src="/images/logo-weiss-rot.png"
            alt="EXICE"
            width={200}
            height={50}
            className="mx-auto mb-8"
          />
          <div className="mb-8">
            <svg className="w-24 h-24 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Perfekt!
          </h1>
          <p className="text-xl text-white/90 mb-4">
            Dein Standortvorschlag ist eingegangen.
          </p>
          <p className="text-lg text-white/80 mb-8">
            Wir prüfen die Fläche und melden uns innerhalb von 48h bei dir.
            Bei Erfolg winken dir <span className="font-bold text-white">5.000€ Finderlohn!</span>
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#1a1a1a]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Image
            src="/images/logo-weiss-rot.png"
            alt="EXICE"
            width={120}
            height={30}
            className="h-8 w-auto"
          />
          <div className="hidden md:flex items-center gap-2 text-sm text-[#72add9]">
            <span className="w-2 h-2 bg-[#72add9] rounded-full animate-pulse"></span>
            Community Fitness Clubs
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        {/* Red Background Side */}
        <div className="absolute inset-0 flex">
          <div className="w-full lg:w-1/2 bg-[#1a1a1a]"></div>
          <div className="hidden lg:block w-1/2 bg-[#e6223d]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 lg:py-0 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#e6223d] rounded-full text-sm text-white mb-6">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Aus Trier & Saarland
              </div>

              <h1 className="text-5xl md:text-7xl font-black text-white mb-4 leading-none">
                5.000€
              </h1>
              <h2 className="text-4xl md:text-6xl font-black text-[#e6223d] mb-8 leading-none">
                FINDERLOHN
              </h2>

              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Wir suchen <span className="text-white font-semibold">Fitnessflächen ab 1.500m²</span> in:
              </p>

              {/* Target Cities */}
              <div className="flex flex-wrap gap-3 mb-10">
                {targetCities.map((city) => (
                  <span
                    key={city}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white font-medium hover:bg-[#72add9]/20 hover:border-[#72add9]/50 transition-all cursor-default"
                  >
                    {city}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 md:gap-6 mb-10">
                <div className="text-center p-3 md:p-4 bg-white/5 rounded-2xl border border-white/10">
                  <div className="text-2xl md:text-4xl font-black text-[#72add9]">5</div>
                  <div className="text-xs md:text-sm text-gray-400 mt-1">wunderschöne Clubs</div>
                </div>
                <div className="text-center p-3 md:p-4 bg-white/5 rounded-2xl border border-white/10">
                  <div className="text-2xl md:text-4xl font-black text-[#e6223d]">15k+</div>
                  <div className="text-xs md:text-sm text-gray-400 mt-1">zufriedene Mitglieder</div>
                </div>
                <div className="text-center p-3 md:p-4 bg-white/5 rounded-2xl border border-white/10">
                  <div className="text-2xl md:text-4xl font-black text-white">125+</div>
                  <div className="text-xs md:text-sm text-gray-400 mt-1">glückliche Mitarbeiter</div>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href="#formular"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#e6223d] text-white font-bold text-lg rounded-full hover:scale-105 transition-transform shadow-lg shadow-[#e6223d]/30"
              >
                Fläche vorschlagen
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Right Content - Kettlebell Pig */}
            <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none">
                <div className="absolute inset-0 bg-[#e6223d] rounded-3xl lg:rounded-none lg:bg-transparent"></div>
                {campaignImages.map((src, index) => (
                  <Image
                    key={src}
                    src={src}
                    alt="5.000€ Finderlohn - EXICE Kampagne"
                    fill
                    className={`object-cover rounded-3xl lg:rounded-none transition-opacity duration-1000 ${
                      index === currentImage ? 'opacity-100' : 'opacity-0'
                    }`}
                    priority={index === 0}
                  />
                ))}
                {/* Image indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {campaignImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImage ? 'bg-white w-6' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why EXICE Section */}
      <section className="py-20 px-6 bg-[#111]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Warum <span className="text-[#e6223d]">EXICE</span>?
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Wir sind keine anonyme Kette. Wir sind Community Fitness Clubs aus der Region - mit starken Partnern im Rücken.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-[#72add9]/50 transition-all">
              <div className="w-16 h-16 rounded-2xl bg-[#72add9]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-[#72add9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Lokal verwurzelt</h3>
              <p className="text-gray-400">
                Gegründet in der Region Trier & Saarland. Wir kennen den Markt und unsere Members persönlich.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-[#e6223d]/50 transition-all">
              <div className="w-16 h-16 rounded-2xl bg-[#e6223d]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-[#e6223d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Starke Investoren</h3>
              <p className="text-gray-400">
                Finanzstarke Partner mit viel Eigenkapital. Wir haben die Mittel für schnelle Expansion.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-[#72add9]/50 transition-all">
              <div className="w-16 h-16 rounded-2xl bg-[#72add9]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-[#72add9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Echte Community</h3>
              <p className="text-gray-400">
                Über 15.000 zufriedene Mitglieder in 5 wunderschönen Clubs. Bei uns trainiert man nicht alleine - man gehört dazu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Club Impressions - Placeholder */}
      <section className="py-20 px-6 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Unsere <span className="text-[#72add9]">Clubs</span>
          </h2>
          <p className="text-gray-400 text-center mb-16">
            Premium Equipment. Einzigartige Atmosphäre. Community Spirit.
          </p>

          {/* Image Grid Placeholder */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className={`relative aspect-square bg-gradient-to-br from-white/5 to-white/10 rounded-2xl overflow-hidden group ${
                  i === 1 || i === 4 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-12 h-12 mx-auto text-white/20 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-white/30 text-sm">Club Foto {i}</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="formular" className="py-20 px-6 bg-[#111]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-[#e6223d]/20 text-[#e6223d] rounded-full text-sm font-medium mb-4">
              5.000€ Finderlohn
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Fläche vorschlagen
            </h2>
            <p className="text-gray-400">
              Du kennst eine passende Fläche? Füll das Formular aus und sichere dir deinen Finderlohn!
            </p>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center justify-center gap-4 mb-12">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <button
                  onClick={() => setCurrentStep(step)}
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                    currentStep >= step
                      ? 'bg-[#e6223d] text-white'
                      : 'bg-white/5 text-gray-500 border border-white/10'
                  }`}
                >
                  {currentStep > step ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    step
                  )}
                </button>
                {step < 3 && (
                  <div className={`w-12 md:w-20 h-1 mx-2 rounded-full transition-all duration-500 ${
                    currentStep > step ? 'bg-[#e6223d]' : 'bg-white/10'
                  }`}></div>
                )}
              </div>
            ))}
          </div>

          {/* Form Card */}
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10">
            <form onSubmit={handleSubmit}>

              {/* Step 1: Flächendaten */}
              <div className={`space-y-6 ${currentStep === 1 ? 'block' : 'hidden'}`}>
                <h3 className="text-2xl font-bold text-white mb-2">Die Fläche</h3>
                <p className="text-gray-400 mb-8">Wo befindet sich die Location?</p>

                <div>
                  <label htmlFor="adresse" className="block text-sm font-medium text-gray-300 mb-2">
                    Adresse / Standort *
                  </label>
                  <input
                    type="text"
                    id="adresse"
                    name="adresse"
                    required
                    placeholder="Straße, PLZ, Stadt"
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#e6223d] focus:ring-2 focus:ring-[#e6223d]/20 transition-all"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="flaeche" className="block text-sm font-medium text-gray-300 mb-2">
                      Fläche in m² *
                    </label>
                    <input
                      type="text"
                      id="flaeche"
                      name="flaeche"
                      required
                      placeholder="mind. 1.500"
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#e6223d] focus:ring-2 focus:ring-[#e6223d]/20 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="art" className="block text-sm font-medium text-gray-300 mb-2">
                      Art der Immobilie *
                    </label>
                    <select
                      id="art"
                      name="art"
                      required
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#e6223d] focus:ring-2 focus:ring-[#e6223d]/20 transition-all appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-[#2d2d2d]">Bitte wählen</option>
                      <option value="bestandsgebaeude" className="bg-[#2d2d2d]">Bestandsgebäude</option>
                      <option value="neubau" className="bg-[#2d2d2d]">Neubau</option>
                      <option value="rohbau" className="bg-[#2d2d2d]">Rohbau</option>
                      <option value="sonstiges" className="bg-[#2d2d2d]">Sonstiges</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="stadt" className="block text-sm font-medium text-gray-300 mb-2">
                    Zielstadt *
                  </label>
                  <select
                    id="stadt"
                    name="stadt"
                    required
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#e6223d] focus:ring-2 focus:ring-[#e6223d]/20 transition-all appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-[#2d2d2d]">Bitte wählen</option>
                    {targetCities.map((city) => (
                      <option key={city} value={city.toLowerCase()} className="bg-[#2d2d2d]">{city}</option>
                    ))}
                    <option value="andere" className="bg-[#2d2d2d]">Andere Stadt</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="verfuegbar" className="block text-sm font-medium text-gray-300 mb-2">
                    Verfügbar ab
                  </label>
                  <input
                    type="date"
                    id="verfuegbar"
                    name="verfuegbar"
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#e6223d] focus:ring-2 focus:ring-[#e6223d]/20 transition-all"
                  />
                </div>
              </div>

              {/* Step 2: Einreicher-Daten */}
              <div className={`space-y-6 ${currentStep === 2 ? 'block' : 'hidden'}`}>
                <h3 className="text-2xl font-bold text-white mb-2">Deine Daten</h3>
                <p className="text-gray-400 mb-8">Damit wir uns bei dir melden können.</p>

                <div>
                  <label htmlFor="einreicher_name" className="block text-sm font-medium text-gray-300 mb-2">
                    Dein Name *
                  </label>
                  <input
                    type="text"
                    id="einreicher_name"
                    name="einreicher_name"
                    required
                    placeholder="Max Mustermann"
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#e6223d] focus:ring-2 focus:ring-[#e6223d]/20 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="einreicher_email" className="block text-sm font-medium text-gray-300 mb-2">
                    Deine E-Mail *
                  </label>
                  <input
                    type="email"
                    id="einreicher_email"
                    name="einreicher_email"
                    required
                    placeholder="max@beispiel.de"
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#e6223d] focus:ring-2 focus:ring-[#e6223d]/20 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="einreicher_telefon" className="block text-sm font-medium text-gray-300 mb-2">
                    Deine Telefonnummer
                  </label>
                  <input
                    type="tel"
                    id="einreicher_telefon"
                    name="einreicher_telefon"
                    placeholder="+49 123 456789"
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#e6223d] focus:ring-2 focus:ring-[#e6223d]/20 transition-all"
                  />
                </div>

                <label className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 cursor-pointer hover:bg-white/10 transition-all group">
                  <input
                    type="checkbox"
                    id="same_contact"
                    name="same_contact"
                    checked={isSameContact}
                    onChange={(e) => setIsSameContact(e.target.checked)}
                    className="w-5 h-5 rounded bg-white/10 border-white/20 text-[#e6223d] focus:ring-[#e6223d] focus:ring-offset-0"
                  />
                  <div>
                    <span className="text-white font-medium">Ich bin der Ansprechpartner für die Fläche</span>
                    <p className="text-sm text-gray-500">Du kannst Schritt 3 überspringen</p>
                  </div>
                </label>
              </div>

              {/* Step 3: Kontaktperson */}
              <div className={`space-y-6 ${currentStep === 3 ? 'block' : 'hidden'}`}>
                {isSameContact ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#e6223d] flex items-center justify-center">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Alles bereit!</h3>
                    <p className="text-gray-400">Du bist der Ansprechpartner. Jetzt nur noch absenden!</p>
                  </div>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold text-white mb-2">Ansprechpartner</h3>
                    <p className="text-gray-400 mb-8">Wer ist zuständig für die Fläche?</p>

                    <div>
                      <label htmlFor="kontakt_name" className="block text-sm font-medium text-gray-300 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="kontakt_name"
                        name="kontakt_name"
                        required={!isSameContact}
                        placeholder="Name des Ansprechpartners"
                        className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#e6223d] focus:ring-2 focus:ring-[#e6223d]/20 transition-all"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="kontakt_email" className="block text-sm font-medium text-gray-300 mb-2">
                          E-Mail *
                        </label>
                        <input
                          type="email"
                          id="kontakt_email"
                          name="kontakt_email"
                          required={!isSameContact}
                          placeholder="email@beispiel.de"
                          className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#e6223d] focus:ring-2 focus:ring-[#e6223d]/20 transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="kontakt_telefon" className="block text-sm font-medium text-gray-300 mb-2">
                          Telefon
                        </label>
                        <input
                          type="tel"
                          id="kontakt_telefon"
                          name="kontakt_telefon"
                          placeholder="+49 123 456789"
                          className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#e6223d] focus:ring-2 focus:ring-[#e6223d]/20 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="kontakt_rolle" className="block text-sm font-medium text-gray-300 mb-2">
                        Rolle
                      </label>
                      <select
                        id="kontakt_rolle"
                        name="kontakt_rolle"
                        className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#e6223d] focus:ring-2 focus:ring-[#e6223d]/20 transition-all appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-[#2d2d2d]">Bitte wählen</option>
                        <option value="eigentuemer" className="bg-[#2d2d2d]">Eigentümer</option>
                        <option value="makler" className="bg-[#2d2d2d]">Makler</option>
                        <option value="verwalter" className="bg-[#2d2d2d]">Verwalter</option>
                        <option value="sonstiges" className="bg-[#2d2d2d]">Sonstiges</option>
                      </select>
                    </div>
                  </>
                )}
              </div>

              {/* Datenschutz-Einwilligung - nur in Step 3 */}
              {currentStep === 3 && (
                <label className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 cursor-pointer hover:bg-white/10 transition-all mt-6">
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacy"
                    checked={privacyAccepted}
                    onChange={(e) => setPrivacyAccepted(e.target.checked)}
                    className="w-5 h-5 mt-0.5 rounded bg-white/10 border-white/20 text-[#e6223d] focus:ring-[#e6223d] focus:ring-offset-0"
                    required
                  />
                  <div className="text-sm">
                    <span className="text-white">
                      Ich habe die{' '}
                      <Link href="/datenschutz" target="_blank" className="text-[#72add9] hover:underline">
                        Datenschutzerklärung
                      </Link>
                      {' '}gelesen und stimme der Verarbeitung meiner Daten zur Bearbeitung meines Standortvorschlags zu. *
                    </span>
                  </div>
                </label>
              )}

              {/* Navigation */}
              <div className="flex gap-4 mt-6">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex-1 py-4 px-8 bg-white/5 text-white font-medium rounded-xl border border-white/10 hover:bg-white/10 transition-all"
                  >
                    Zurück
                  </button>
                )}
                {currentStep < 3 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="flex-1 py-4 px-8 bg-[#e6223d] text-white font-bold rounded-xl hover:bg-[#c91d34] transition-all"
                  >
                    Weiter
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting || !privacyAccepted}
                    className="flex-1 py-4 px-8 bg-[#e6223d] text-white font-bold rounded-xl hover:bg-[#c91d34] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                        </svg>
                        Wird gesendet...
                      </span>
                    ) : (
                      '5.000€ sichern!'
                    )}
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Trust Badge */}
          <p className="text-center text-gray-500 text-sm mt-8">
            Deine Daten werden vertraulich behandelt. Mehr dazu in unserer{' '}
            <Link href="/datenschutz" className="text-[#72add9] hover:underline">
              Datenschutzerklärung
            </Link>.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Image
              src="/images/logo-weiss-rot.png"
              alt="EXICE"
              width={100}
              height={25}
              className="h-6 w-auto opacity-60"
            />
            <div className="flex items-center gap-6 text-sm">
              <Link href="/impressum" className="text-gray-500 hover:text-white transition-colors">
                Impressum
              </Link>
              <Link href="/datenschutz" className="text-gray-500 hover:text-white transition-colors">
                Datenschutz
              </Link>
            </div>
          </div>
          <p className="text-gray-600 text-sm text-center mt-6">
            &copy; {new Date().getFullYear()} we are 1 fitconsult GmbH. Alle Rechte vorbehalten.
          </p>
        </div>
      </footer>
    </main>
  );
}
