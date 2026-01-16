import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Impressum | EXICE',
  description: 'Impressum der EXICE Standortsuche',
};

export default function Impressum() {
  return (
    <main className="min-h-screen bg-[#1a1a1a]">
      {/* Header */}
      <header className="py-6 px-6 border-b border-white/5">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/">
            <Image
              src="/images/logo-weiss-rot.png"
              alt="EXICE"
              width={120}
              height={30}
              className="h-8 w-auto"
            />
          </Link>
          <Link href="/" className="text-gray-400 hover:text-white transition-colors">
            Zurück zur Startseite
          </Link>
        </div>
      </header>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-12">Impressum</h1>

          <div className="prose prose-invert max-w-none space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Angaben gemäß § 5 TMG</h2>
              <p className="text-gray-300">
                we are 1 fitconsult GmbH<br />
                Hauptstraße 81<br />
                55743 Idar-Oberstein<br />
                Deutschland
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Vertreten durch</h2>
              <p className="text-gray-300">
                Geschäftsführer: Christian Müller
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Kontakt</h2>
              <p className="text-gray-300">
                Telefon: +49 651 4602626<br />
                E-Mail: info@exice-fitness.de
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Registereintrag</h2>
              <p className="text-gray-300">
                Eintragung im Handelsregister<br />
                Registergericht: Amtsgericht Bad Kreuznach<br />
                Registernummer: HRB 23834
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Umsatzsteuer-ID</h2>
              <p className="text-gray-300">
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                DE 352245896
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
              <p className="text-gray-300">
                Christian Müller<br />
                Hauptstraße 81<br />
                55743 Idar-Oberstein
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">EU-Streitschlichtung</h2>
              <p className="text-gray-300">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#72add9] hover:underline"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
                <br /><br />
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
              <p className="text-gray-300">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} we are 1 fitconsult GmbH</p>
          <div className="flex gap-6">
            <Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
