import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Twoje Imię | Portfolio 3D",
  description: "Developer React & Next.js - Projekty 3D i interaktywne mapy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={geistSans.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}