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
  title: "Agoroo Athens Apartment | Stylish Stay in Kerameikos",
  description:
    "Stay at Agoroo, a stylish Athens apartment in Kerameikos with self check-in, Wi-Fi, balcony, elevator access and easy walks to the historic center.",
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
