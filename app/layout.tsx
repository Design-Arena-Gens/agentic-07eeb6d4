import type { Metadata } from "next";
import { Figtree, Inter } from "next/font/google";
import "./globals.css";

const persona = Figtree({
  subsets: ["latin"],
  variable: "--font-persona",
  weight: ["400", "500", "600", "700"]
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Persona Legacy | P1-2L.jp",
  description:
    "Experience the definitive Persona 1 and Persona 2: Innocent Sin / Eternal Punishment remakes. Persona Legacy reimagines classics with modern artistry.",
  openGraph: {
    title: "Persona Legacy",
    description:
      "Experience the definitive Persona 1 and Persona 2: Innocent Sin / Eternal Punishment remakes. Persona Legacy reimagines classics with modern artistry.",
    url: "https://p1-2l.jp",
    siteName: "Persona Legacy",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Persona Legacy | P1-2L.jp",
    description:
      "Experience the definitive Persona 1 and Persona 2: Innocent Sin / Eternal Punishment remakes. Persona Legacy reimagines classics with modern artistry.",
    site: "@Atlus_West"
  },
  metadataBase: new URL("https://p1-2l.jp")
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${persona.variable} ${body.variable}`}>
      <body className="relative min-h-screen overflow-x-hidden bg-midnight text-gray-100">
        <div className="noise-overlay pointer-events-none fixed inset-0" aria-hidden />
        {children}
      </body>
    </html>
  );
}
