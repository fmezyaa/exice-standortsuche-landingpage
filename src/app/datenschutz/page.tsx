import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Datenschutzerklärung | EXICE',
  description: 'Datenschutzerklärung der EXICE Standortsuche',
};

export default function Datenschutz() {
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
          <h1 className="text-4xl font-bold text-white mb-12">Datenschutzerklärung</h1>

          <div className="prose prose-invert max-w-none space-y-8 text-gray-300">

            {/* 1. Verantwortlicher */}
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">1. Verantwortlicher</h2>
              <p>
                Verantwortlicher für die Datenverarbeitung auf dieser Website ist:
              </p>
              <p className="mt-4">
                we are 1 fitconsult GmbH<br />
                Hauptstraße 81<br />
                55743 Idar-Oberstein<br />
                Deutschland<br /><br />
                Geschäftsführer: Christian Müller<br />
                E-Mail: info@exice-fitness.de<br />
                Telefon: +49 651 4602626
              </p>
            </div>

            {/* 2. Überblick */}
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">2. Überblick der Verarbeitungen</h2>
              <p>
                Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und die Zwecke ihrer Verarbeitung zusammen und verweist auf die betroffenen Personen.
              </p>
              <h3 className="text-lg font-medium text-white mt-6 mb-2">Arten der verarbeiteten Daten</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Bestandsdaten (z.B. Namen, Adressen)</li>
                <li>Kontaktdaten (z.B. E-Mail, Telefonnummern)</li>
                <li>Inhaltsdaten (z.B. Eingaben in Formularen)</li>
                <li>Nutzungsdaten (z.B. besuchte Seiten, Zugriffszeit)</li>
                <li>Meta-/Kommunikationsdaten (z.B. IP-Adressen)</li>
              </ul>
              <h3 className="text-lg font-medium text-white mt-6 mb-2">Kategorien betroffener Personen</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Interessenten und Geschäftspartner</li>
                <li>Nutzer der Website</li>
              </ul>
              <h3 className="text-lg font-medium text-white mt-6 mb-2">Zwecke der Verarbeitung</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Kontaktanfragen und Kommunikation</li>
                <li>Bearbeitung von Standortvorschlägen</li>
                <li>Bereitstellung unseres Onlineangebotes</li>
              </ul>
            </div>

            {/* 3. Rechtsgrundlagen */}
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">3. Maßgebliche Rechtsgrundlagen</h2>
              <p>
                Im Folgenden erhalten Sie eine Übersicht der Rechtsgrundlagen der DSGVO, auf deren Basis wir personenbezogene Daten verarbeiten:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>
                  <strong className="text-white">Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO)</strong> - Die betroffene Person hat ihre Einwilligung in die Verarbeitung der sie betreffenden personenbezogenen Daten für einen spezifischen Zweck oder mehrere bestimmte Zwecke gegeben.
                </li>
                <li>
                  <strong className="text-white">Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO)</strong> - Die Verarbeitung ist für die Erfüllung eines Vertrags, dessen Vertragspartei die betroffene Person ist, oder zur Durchführung vorvertraglicher Maßnahmen erforderlich.
                </li>
                <li>
                  <strong className="text-white">Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO)</strong> - Die Verarbeitung ist zur Wahrung der berechtigten Interessen des Verantwortlichen oder eines Dritten erforderlich.
                </li>
              </ul>
            </div>

            {/* 4. Kontaktformular */}
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">4. Kontaktformular und Standortvorschläge</h2>
              <p>
                Bei der Nutzung unseres Formulars zur Einreichung von Standortvorschlägen verarbeiten wir folgende Daten:
              </p>
              <ul className="list-disc list-inside space-y-1 mt-4">
                <li>Name des Einreichenden</li>
                <li>E-Mail-Adresse</li>
                <li>Telefonnummer (optional)</li>
                <li>Angaben zur vorgeschlagenen Fläche (Adresse, Größe, Art)</li>
                <li>Kontaktdaten des Flächenansprechpartners (falls abweichend)</li>
              </ul>
              <p className="mt-4">
                <strong className="text-white">Zweck der Verarbeitung:</strong> Bearbeitung Ihres Standortvorschlags, Kontaktaufnahme bezüglich der vorgeschlagenen Fläche, ggf. Auszahlung des Finderlohns.
              </p>
              <p className="mt-4">
                <strong className="text-white">Rechtsgrundlage:</strong> Die Verarbeitung erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sowie zur Durchführung vorvertraglicher Maßnahmen (Art. 6 Abs. 1 lit. b DSGVO).
              </p>
              <p className="mt-4">
                <strong className="text-white">Speicherdauer:</strong> Ihre Daten werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer Erhebung nicht mehr erforderlich sind. Dies ist in der Regel der Fall, wenn die Kommunikation beendet ist und keine gegenseitigen Ansprüche mehr bestehen.
              </p>
            </div>

            {/* 5. Formspree */}
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">5. Formularverarbeitung durch Drittanbieter</h2>
              <p>
                Für die Verarbeitung der Formulardaten nutzen wir den Dienst Formspree (Formspree, Inc., USA). Bei Absenden des Formulars werden Ihre Daten an Server von Formspree übertragen.
              </p>
              <p className="mt-4">
                <strong className="text-white">Rechtsgrundlage:</strong> Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)
              </p>
              <p className="mt-4">
                Formspree ist unter dem EU-US Data Privacy Framework zertifiziert. Weitere Informationen finden Sie in der Datenschutzerklärung von Formspree:{' '}
                <a href="https://formspree.io/legal/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-[#72add9] hover:underline">
                  https://formspree.io/legal/privacy-policy/
                </a>
              </p>
            </div>

            {/* 6. Meta Pixel */}
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">6. Meta Pixel (Facebook)</h2>
              <p>
                Wir nutzen auf unserer Website das Meta Pixel (ehemals Facebook Pixel) der Meta Platforms Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland.
              </p>
              <p className="mt-4">
                Das Meta Pixel ermöglicht es uns, das Verhalten von Nutzern nachzuverfolgen, nachdem diese durch Klick auf eine Meta-Werbeanzeige auf unsere Website weitergeleitet wurden. So können wir die Wirksamkeit von Meta-Werbeanzeigen für statistische und Marktforschungszwecke erfassen.
              </p>
              <p className="mt-4">
                <strong className="text-white">Verarbeitete Daten:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>HTTP-Header-Informationen (IP-Adresse, Browser, Betriebssystem)</li>
                <li>Pixel-spezifische Daten (Pixel-ID, Facebook-Cookie)</li>
                <li>Button-Klick-Daten</li>
                <li>Optionale Werte (z.B. Conversion-Wert)</li>
                <li>Seitenaufrufe</li>
              </ul>
              <p className="mt-4">
                <strong className="text-white">Rechtsgrundlage:</strong> Berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO) an der Analyse und Optimierung unserer Werbemaßnahmen.
              </p>
              <p className="mt-4">
                <strong className="text-white">Datenübermittlung in Drittländer:</strong> Meta kann Daten auch in die USA übermitteln. Meta Platforms, Inc. ist unter dem EU-US Data Privacy Framework zertifiziert.
              </p>
              <p className="mt-4">
                Weitere Informationen finden Sie in der Datenschutzerklärung von Meta:{' '}
                <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer" className="text-[#72add9] hover:underline">
                  https://www.facebook.com/privacy/policy/
                </a>
              </p>
              <p className="mt-4">
                Sie können der Erfassung durch das Meta Pixel widersprechen:{' '}
                <a href="https://www.facebook.com/settings?tab=ads" target="_blank" rel="noopener noreferrer" className="text-[#72add9] hover:underline">
                  https://www.facebook.com/settings?tab=ads
                </a>
              </p>
            </div>

            {/* 7. Hosting */}
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">7. Hosting</h2>
              <p>
                Unser Hostinganbieter erhebt in sogenannten Logfiles folgende Daten, die Ihr Browser übermittelt:
              </p>
              <ul className="list-disc list-inside space-y-1 mt-4">
                <li>IP-Adresse</li>
                <li>Adresse der vorher besuchten Website (Referer)</li>
                <li>Datum und Uhrzeit der Anfrage</li>
                <li>Zeitzonendifferenz zur Greenwich Mean Time</li>
                <li>Inhalt der Anforderung</li>
                <li>HTTP-Statuscode</li>
                <li>Übertragene Datenmenge</li>
                <li>Browser und Betriebssystem</li>
              </ul>
              <p className="mt-4">
                Dies ist erforderlich, um unsere Website anzuzeigen und die Stabilität und Sicherheit zu gewährleisten. Dies entspricht unserem berechtigten Interesse im Sinne des Art. 6 Abs. 1 S. 1 lit. f DSGVO.
              </p>
            </div>

            {/* 8. Ihre Rechte */}
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">8. Ihre Rechte</h2>
              <p>Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li><strong className="text-white">Recht auf Auskunft</strong> (Art. 15 DSGVO)</li>
                <li><strong className="text-white">Recht auf Berichtigung</strong> (Art. 16 DSGVO)</li>
                <li><strong className="text-white">Recht auf Löschung</strong> (Art. 17 DSGVO)</li>
                <li><strong className="text-white">Recht auf Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO)</li>
                <li><strong className="text-white">Recht auf Datenübertragbarkeit</strong> (Art. 20 DSGVO)</li>
                <li><strong className="text-white">Recht auf Widerspruch</strong> (Art. 21 DSGVO)</li>
                <li><strong className="text-white">Recht auf Widerruf der Einwilligung</strong> (Art. 7 Abs. 3 DSGVO)</li>
              </ul>
              <p className="mt-4">
                Zur Ausübung Ihrer Rechte wenden Sie sich bitte an die oben genannten Kontaktdaten.
              </p>
            </div>

            {/* 9. Beschwerderecht */}
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">9. Beschwerderecht bei einer Aufsichtsbehörde</h2>
              <p>
                Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über unsere Verarbeitung personenbezogener Daten zu beschweren.
              </p>
              <p className="mt-4">
                Zuständige Aufsichtsbehörde:<br /><br />
                Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Rheinland-Pfalz<br />
                Postfach 30 40<br />
                55020 Mainz<br />
                Telefon: +49 6131 8920-0<br />
                E-Mail: poststelle@datenschutz.rlp.de<br />
                Website: <a href="https://www.datenschutz.rlp.de" target="_blank" rel="noopener noreferrer" className="text-[#72add9] hover:underline">www.datenschutz.rlp.de</a>
              </p>
            </div>

            {/* 10. Aktualität */}
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">10. Aktualität und Änderung dieser Datenschutzerklärung</h2>
              <p>
                Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Januar 2025.
              </p>
              <p className="mt-4">
                Durch die Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher beziehungsweise behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} EXICE Community Fitness Clubs</p>
          <div className="flex gap-6">
            <Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
