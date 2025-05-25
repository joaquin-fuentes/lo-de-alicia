"use client";

import { Button } from "@/components/ui/button";
import { Mountain } from "lucide-react";
import { MessageCircle } from "lucide-react";

interface HeaderProps {
  whatsappNumber: string;
  whatsappMessage: string;
}

export function Header({ whatsappNumber, whatsappMessage }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-green-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Mountain className="h-8 w-8 text-green-600" />
            <h1 className="text-2xl font-bold text-green-800">Lo de Alicia</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a
              href="#inicio"
              className="text-green-700 hover:text-green-600 transition-colors"
            >
              Inicio
            </a>
            <a
              href="#galeria"
              className="text-green-700 hover:text-green-600 transition-colors"
            >
              Galería
            </a>
            <a
              href="#detalles"
              className="text-green-700 hover:text-green-600 transition-colors"
            >
              Detalles
            </a>
            <a
              href="#comentarios"
              className="text-green-700 hover:text-green-600 transition-colors"
            >
              Comentarios
            </a>
            <a
              href="#contacto"
              className="text-green-700 hover:text-green-600 transition-colors"
            >
              Contacto
            </a>
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
            <MessageCircle className="h-4 w-4 mr-2" />
            Consultar
          </Button>
        </div>
      </div>
    </header>
  );
}
