"use client";

import { Button } from "@/components/ui/button";
import { MapPin, Phone, MessageCircle } from "lucide-react";
import Image from "next/image";

interface ContactSectionProps {
  whatsappNumber: string;
  whatsappMessage: string;
}

export function ContactSection({
  whatsappNumber,
  whatsappMessage,
}: ContactSectionProps) {
  return (
    <section
      id="contacto"
      className="py-20 bg-gradient-to-b from-green-600 to-emerald-700 text-white"
    >
      <div className="container mx-auto px-5">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            ¿Listo para tu escapada?
          </h2>
          <p className="text-xl max-w-2xl mx-auto">
            Contactanos para reservar tu estadía en Lo de Alicia
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Información de Contacto
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 mr-3 text-green-300" />
                  <span>El Cadillal, Tucumán, Argentina</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 mr-3 text-green-300" />
                  <span>+54 9 381 5540275</span>
                </div>
                <div className="flex items-center">
                  <MessageCircle className="h-6 w-6 mr-3 text-green-300" />
                  <span>WhatsApp disponible 24/7</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6">Reservá Ahora</h3>
              <p className="mb-6">
                Hacé tu consulta directamente por WhatsApp y te responderemos
                con toda la información que necesites
              </p>
              <Button
                size="lg"
                className="bg-white text-green-700 hover:bg-green-50 px-8 py-4 text-lg"
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
                Contactar por WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
