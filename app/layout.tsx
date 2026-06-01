import type { Metadata } from "next";
import { Instrument_Serif, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cryptoandcoffee.show"),
  title: {
    default: "Crypto & Coffee — Meaningful conversations with the builders shaping tomorrow",
    template: "%s — Crypto & Coffee",
  },
  description:
    "A Web3 culture & conversation platform. Meaningful conversations with the builders, thinkers, and creators shaping tomorrow — hosted by Phil.",
  openGraph: {
    type: "website",
    siteName: "Crypto & Coffee",
    title: "Crypto & Coffee — A Web3 culture & conversation platform",
    description:
      "Meaningful conversations with the builders shaping tomorrow. No hype. No noise. Just good conversation.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@CryptoNCoffee_",
  },
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Ctext y='26' font-size='26'%3E%E2%98%95%3C/text%3E%3C/svg%3E",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
      <body className="font-sans text-base leading-relaxed">{children}</body>
    </html>
  );
}
