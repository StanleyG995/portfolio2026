import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Stanisław G. | Creative Developer & Designer",
  description: "8 years of design, 6 years of web dev. Now building high-end interfaces with Next.js and Three.js.",
  openGraph: {
    title: "Stanisław G. | Creative Developer",
    description: "Bridging the gap between precise design and modern code.",
    images: [{ url: '/og-image.png' }],
  },
}

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

