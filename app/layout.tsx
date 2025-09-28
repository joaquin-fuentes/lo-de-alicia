import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lo de Alicia - Hospedaje en El Cadillal",
  description:
    "Escapate a la tranquilidad de las montañas en Lo de Alicia, hospedaje en El Cadillal, Tucumán.",
  icons: {
    icon: "/logos/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        {children}
        <Link
          href="https://wa.me/5493815540275?text=Hola!%20Me%20interesa%20consultar%20sobre%20disponibilidad%20en%20Lo%20de%20Alicia"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50"
        >
          <Image
            src={"/logos/wp.png"}
            alt="Lo de alicia - Hospedaje"
            width={1000}
            height={1000}
            className="h-14 w-14"
          ></Image>
        </Link>
      </body>
    </html>
  );
}
