import type { Metadata, Viewport } from "next";
import "./globals.css";
import { TrackingProvider } from "@/components/TrackingProvider";

export const viewport: Viewport = {
  themeColor: "#e6223d",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  title: {
    default: "EXICE - 5.000€ Finderlohn | Fitnessflächen gesucht",
    template: "%s | EXICE",
  },
  description: "EXICE sucht Fitnessflächen ab 1.500m² in Luxemburg, Saarbrücken, Wiesbaden und Mainz. 5.000€ Finderlohn für erfolgreiche Vermittlung!",
  metadataBase: new URL("https://standortsuche.exice.de"),
  openGraph: {
    title: "5.000€ Finderlohn | EXICE sucht Fitnessflächen",
    description: "Du kennst eine passende Fläche für ein EXICE Fitnessstudio? Sichere dir 5.000€ Finderlohn!",
    type: "website",
    locale: "de_DE",
    siteName: "EXICE",
  },
  twitter: {
    card: "summary_large_image",
    title: "5.000€ Finderlohn | EXICE sucht Fitnessflächen",
    description: "Du kennst eine passende Fläche für ein EXICE Fitnessstudio? Sichere dir 5.000€ Finderlohn!",
  },
  other: {
    "msapplication-TileColor": "#1a1a1a",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="antialiased">
        <TrackingProvider>
          {children}
        </TrackingProvider>
      </body>
    </html>
  );
}
