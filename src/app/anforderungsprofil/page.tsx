import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Anforderungsprofil | EXICE Standortsuche',
  description: 'Anforderungen an neue EXICE Fitness-Standorte: Fläche, Lage, Ausstattung und mehr.',
};

const requirements = [
  {
    icon: (
      <svg className="w-8 h-8 text-[#72add9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
      </svg>
    ),
    title: 'Größe',
    value: 'ab 1.300 m²',
    description: 'Mindestfläche für ein vollwertiges EXICE Fitnessstudio mit allen Bereichen.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-[#72add9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    title: 'Anbindung an den ÖPNV',
    value: 'Fußläufig erreichbar',
    description: 'Gute Erreichbarkeit mit öffentlichen Verkehrsmitteln für unsere Member.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-[#72add9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Deckenhöhe',
    value: 'Mindestens 3 m',
    description: 'Ausreichende Raumhöhe für Trainingsgeräte, Functional-Bereich und ein angenehmes Raumgefühl.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-[#72add9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: 'Verkehrsfrequenz',
    value: 'ab 10.000 Fahrzeuge / Tag',
    description: 'Im Umkreis von Hauptverkehrsstraßen mit hoher täglicher Verkehrsfrequenz.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-[#72add9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Mietdauer',
    value: 'Mind. 10 Jahre + 2x5 Jahre Option',
    description: 'Mindestens 10 Jahre Mietlaufzeit zuzüglich zweimaliger Verlängerungsoption um jeweils 5 Jahre.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-[#72add9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Öffnungszeiten',
    value: 'Min. 18h / Tag, 365 Tage',
    description: 'Mindestens 18 Stunden pro Tag geöffnet, an allen Tagen im Jahr.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-[#72add9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    title: 'Sichtbarkeit',
    value: 'Große Fensterfronten',
    description: 'Vorzugsweise große Fensterfronten für eine gute Sichtbarkeit und Werbemöglichkeit.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-[#72add9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
    title: 'Parkplätze',
    value: 'Ab 80 exklusive Stellplätze',
    description: 'Mindestens 80 exklusive Stellplätze für unsere Member direkt am Standort.',
  },
];

export default function Anforderungsprofil() {
  return (
    <main className="min-h-screen bg-[#1a1a1a]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <Image
              src="/images/logo-weiss-rot.png"
              alt="EXICE"
              width={120}
              height={30}
              className="h-8 w-auto"
            />
          </Link>
          <Link href="/#formular" className="hidden md:flex items-center gap-2 text-sm text-[#e6223d] hover:text-white transition-colors">
            <span className="w-2 h-2 bg-[#e6223d] rounded-full animate-pulse"></span>
            5.000€ Finderlohn
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-[#111]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#72add9]/20 rounded-full text-sm text-[#72add9] mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Standort-Kriterien
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            Unser <span className="text-[#e6223d]">Anforderungsprofil</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Diese Kriterien sollte ein Standort erfüllen, damit er für einen neuen EXICE Club in Frage kommt.
          </p>
        </div>
      </section>

      {/* Requirements Grid */}
      <section className="py-20 px-6 bg-[#1a1a1a]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {requirements.map((req) => (
              <div
                key={req.title}
                className="group p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-[#72add9]/50 transition-all"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#72add9]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {req.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{req.title}</h3>
                    <p className="text-[#72add9] font-semibold text-lg mb-2">{req.value}</p>
                    <p className="text-gray-400 text-sm">{req.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-[#111]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Passende Fläche?
          </h2>
          <p className="text-gray-400 mb-8">
            Du kennst eine Fläche, die diese Kriterien erfüllt? Schlag sie uns vor und sichere dir <span className="text-white font-semibold">5.000€ Finderlohn</span>!
          </p>
          <Link
            href="/#formular"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#e6223d] text-white font-bold text-lg rounded-full hover:scale-105 transition-transform shadow-lg shadow-[#e6223d]/30"
          >
            Fläche vorschlagen
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
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
