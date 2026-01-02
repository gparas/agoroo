import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Footer from "./footer";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Agoroo - Urban Comfort in Athens",
  description:
    "Experience modern living at Agoroo, your urban retreat in the heart of Athens. Enjoy stylish accommodations, top-notch amenities, and easy access to the city's vibrant culture and attractions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} text-zinc-900 antialiased`}>
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
