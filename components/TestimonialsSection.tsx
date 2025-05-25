"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section id="comentarios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
            Lo que dicen nuestros huéspedes
          </h2>
          <p className="text-xl text-green-600 max-w-2xl mx-auto">
            Experiencias reales de quienes ya disfrutaron de hospedaje Lo de
            Alicia
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Comentario 1 */}
          <Card className="border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                {`"Un lugar increíble para desconectar. La vista a las montañas es espectacular y Alicia nos recibió con una calidez única. Volveremos sin dudas."`}
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-800 font-semibold">MR</span>
                </div>
                <div>
                  <p className="font-semibold text-green-800">
                    María Rodriguez
                  </p>
                  <p className="text-sm text-gray-600">Febrero 2024</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Comentario 2 */}
          <Card className="border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                {`"Perfecto para familias. Los chicos disfrutaron mucho del espacio y nosotros de la tranquilidad. La casa tiene todo lo necesario y más."`}
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-800 font-semibold">JL</span>
                </div>
                <div>
                  <p className="font-semibold text-green-800">Juan López</p>
                  <p className="text-sm text-gray-600">Enero 2024</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Comentario 3 */}
          <Card className="border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                {`"La ubicación es ideal para explorar El Cadillal. La casa es muy cómoda y limpia. Alicia siempre estuvo disponible para cualquier consulta."`}
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-800 font-semibold">AS</span>
                </div>
                <div>
                  <p className="font-semibold text-green-800">Ana Silva</p>
                  <p className="text-sm text-gray-600">Diciembre 2023</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
