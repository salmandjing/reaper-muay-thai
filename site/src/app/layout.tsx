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
  title: "REAPER | Muay Thai / MMA / BJJ",
  description:
    "No shortcuts. No excuses. Step into Reaper and earn every round.",
  openGraph: {
    title: "REAPER | Muay Thai / MMA / BJJ",
    description:
      "No shortcuts. No excuses. Step into Reaper and earn every round.",
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
