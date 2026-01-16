import type { Metadata } from "next";
import "./globals.css";
import { TrackingProvider } from "@/components/TrackingProvider";

export const metadata: Metadata = {
  title: "EXICE - 5.000€ Finderlohn | Fitnessflächen gesucht",
  description: "EXICE sucht Fitnessflächen ab 1.500m² in Luxemburg, Saarbrücken, Wiesbaden und Mainz. 5.000€ Finderlohn für erfolgreiche Vermittlung!",
  openGraph: {
    title: "5.000€ Finderlohn | EXICE sucht Fitnessflächen",
    description: "Du kennst eine passende Fläche für ein EXICE Fitnessstudio? Sichere dir 5.000€ Finderlohn!",
    type: "website",
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
