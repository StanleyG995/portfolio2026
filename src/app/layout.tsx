import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stanisław | Portfolio 2026",
  description: "Creative Developer - 3D Experiences & React Engineering",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={`${geistSans.variable} scroll-smooth`}>
      <body className="antialiased bg-black text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}