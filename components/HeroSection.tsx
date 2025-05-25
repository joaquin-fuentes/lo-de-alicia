"use client";

import { Button } from "@/components/ui/button";
import { Trees, MessageCircle } from "lucide-react";

interface HeroSectionProps {
  whatsappNumber: string;
  whatsappMessage: string;
}

export function HeroSection({
  whatsappNumber,
  whatsappMessage,
}: HeroSectionProps) {
  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-emerald-800/70 z-10"></div>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
        }}
      ></div>

      <div className="relative z-20 text-center text-white px-4 animate-fade-in">
        <div className="mb-6 animate-bounce">
          <Trees className="h-16 w-16 mx-auto text-green-300" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
          Lo de Alicia
        </h1>
        <p className="text-xl md:text-2xl mb-4 animate-slide-up animation-delay-200">
          Tu refugio en El Cadillal
        </p>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-slide-up animation-delay-400">
          Desconectá de la rutina y conectá con la naturaleza en nuestro
          acogedor hospedaje rodeado de montañas y aire puro
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animation-delay-600">
          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg"
            onClick={() =>
              document
                .getElementById("galeria")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Ver Galería
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white text-green-800 hover:bg-gray-200 px-8 py-3 text-lg"
            onClick={() =>
              window.open(
                `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  whatsappMessage
                )}`,
                "_blank"
              )
            }
          >
            <MessageCircle className="h-5 w-5 mr-2" />
            Consultar Disponibilidad
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
