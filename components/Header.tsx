"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  whatsappNumber: string;
  whatsappMessage: string;
}

export function Header({ whatsappNumber, whatsappMessage }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-green-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href={"#inicio"} className="flex items-center space-x-2">
            <Image
              src={"/logos/logo.png"}
              alt="Lo de alicia - Hospedaje"
              width={1000}
              height={1000}
              className="h-8 w-8"
            ></Image>
            <h1 className="text-2xl font-bold text-green-800">Lo de Alicia</h1>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link
              href="#inicio"
              className="text-green-700 hover:text-green-600 transition-colors font-semibold"
            >
              Inicio
            </Link>
            <Link
              href="#galeria"
              className="text-green-700 hover:text-green-600 transition-colors font-semibold"
            >
              Galería
            </Link>
            <Link
              href="#detalles"
              className="text-green-700 hover:text-green-600 transition-colors font-semibold"
            >
              Detalles
            </Link>
            <Link
              href="#comentarios"
              className="text-green-700 hover:text-green-600 transition-colors font-semibold"
            >
              Comentarios
            </Link>
            <Link
              href="#contacto"
              className="text-green-700 hover:text-green-600 transition-colors font-semibold"
            >
              Contacto
            </Link>
          </nav>
          <Button
            className="bg-green-600 hover:bg-green-700 text-white"
            onClick={() =>
              window.open(
                `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  whatsappMessage
                )}`,
                "_blank"
              )
            }
          >
            <Image
              src={"/logos/wp.png"}
              alt="Lo de alicia - Hospedaje"
              width={1000}
              height={1000}
              className="h-5 w-5"
            ></Image>{" "}
            Consultar
          </Button>
        </div>
      </div>
    </header>
  );
}
