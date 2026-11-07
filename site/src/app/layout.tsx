import type { Metadata } from "next";
import localFont from "next/font/local";
import { Barlow_Condensed } from "next/font/google";
import "./globals.css";

const oswald = localFont({
  src: [
    {
      path: "./fonts/GeistVF.woff",
      weight: "100 900",
    },
  ],
  variable: "--font-body-fallback",
});

const headingFont = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-heading",
  display: "swap",
});

const bodyFont = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Reaper HQ | Muay Thai & Brazilian Jiu-Jitsu in West Palm Beach, FL",
  description:
    "Community-focused martial arts academy in West Palm Beach. Kids martial arts, beginner Muay Thai, adult BJJ, MMA, and homeschool PE. Book a trial class.",
  openGraph: {
    title: "Reaper HQ | Muay Thai & Brazilian Jiu-Jitsu in West Palm Beach, FL",
    description:
      "Community-focused martial arts academy in West Palm Beach. Kids martial arts, beginner Muay Thai, adult BJJ, MMA, and homeschool PE. Book a trial class.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${headingFont.variable} ${bodyFont.variable} ${oswald.variable} font-body antialiased grain`}
      >
        {children}
      </body>
    </html>
  );
}
