import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import "../styles/globals.css";
import Header from "../components/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Eddie Wynman — iOS & Full-Stack Developer",
  description:
    "Eddie Wynman builds mobile and web software with attention to reliability, performance, and craft. iOS Developer at Geico, founder of Spot.",
  openGraph: {
    title: "Eddie Wynman — iOS & Full-Stack Developer",
    description:
      "Mobile and web developer focused on reliable, well-crafted software.",
    url: "https://www.meeteddie.tech",
    siteName: "Eddie Wynman",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <head>
        <link rel="icon" href="/favicon.jpeg" type="image/jpeg" />
      </head>
      <body suppressHydrationWarning>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
      </body>
    </html>
  );
}
