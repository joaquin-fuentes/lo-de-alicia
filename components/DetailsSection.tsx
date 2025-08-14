"use client";

// import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
// import { Separator } from "@/components/ui/separator";
import {
  Bed,
  Bath,
  MapPin,
  Coffee,
  Wifi,
  Car,
  Utensils,
  Tv,
  Wind,
  Sun,
  // Trees,
  // Moon,
  // Calendar,
  Users,
} from "lucide-react";
// import Image from "next/image";

interface DetailsSectionProps {
  whatsappNumber: string;
  whatsappMessage: string;
}

export function DetailsSection({
  // whatsappNumber,
  // whatsappMessage,
}: DetailsSectionProps) {
  return (
    <section
      id="detalles"
      className="py-20 bg-gradient-to-b from-green-50 to-emerald-100"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
            Detalles del Hospedaje
          </h2>
          <p className="text-xl text-green-600 max-w-2xl mx-auto">
            Todo lo que necesitás saber para tu estadía perfecta
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Información general */}
          <Card className="border-green-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="bg-green-600 text-white">
              <CardTitle className="flex items-center text-2xl">
                <Bed className="h-6 w-6 mr-2" />
                Información General
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="flex items-center text-green-700">
                    <Users className="h-5 w-5 mr-2" />
                    Capacidad
                  </span>
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-800"
                  >
                    Hasta 10 personas
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center text-green-700">
                    <Bed className="h-5 w-5 mr-2" />
                    Habitaciones
                  </span>
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-800"
                  >
                    2 habitaciones
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center text-green-700">
                    <Bath className="h-5 w-5 mr-2" />
                    Baños
                  </span>
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-800"
                  >
                    2 baños
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center text-green-700">
                    <MapPin className="h-5 w-5 mr-2" />
                    Ubicación
                  </span>
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-800"
                  >
                    El Cadillal, Tucumán
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Comodidades */}
          <Card className="border-green-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="bg-green-600 text-white">
              <CardTitle className="flex items-center text-2xl">
                <Coffee className="h-6 w-6 mr-2" />
                Comodidades
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center text-green-700">
                  <Wifi className="h-5 w-5 mr-2" />
                  WiFi
                </div>
                <div className="flex items-center text-green-700">
                  <Car className="h-5 w-5 mr-2" />
                  Estacionamiento
                </div>
                <div className="flex items-center text-green-700">
                  <Utensils className="h-5 w-5 mr-2" />
                  Cocina equipada
                </div>
                <div className="flex items-center text-green-700">
                  <Tv className="h-5 w-5 mr-2" />
                  TV por cable
                </div>
                <div className="flex items-center text-green-700">
                  <Wind className="h-5 w-5 mr-2" />
                  Aire acondicionado
                </div>
                <div className="flex items-center text-green-700">
                  <Sun className="h-5 w-5 mr-2" />
                  Pileta
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Precios
          <Card className="border-green-200 shadow-lg hover:shadow-xl transition-shadow duration-300 md:col-span-2">
            <CardHeader className="bg-green-600 text-white">
              <CardTitle className="flex items-center text-2xl">
                <Calendar className="h-6 w-6 mr-2" />
                Tarifas y Disponibilidad
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Sun className="h-8 w-8 mx-auto text-yellow-500 mb-2" />
                  <h3 className="font-semibold text-green-800 mb-2">
                    Temporada Alta
                  </h3>
                  <p className="text-2xl font-bold text-green-600 mb-1">
                    $12.000
                  </p>
                  <p className="text-sm text-green-600">por noche</p>
                  <p className="text-xs text-gray-600 mt-2">Dic - Feb / Jul</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Trees className="h-8 w-8 mx-auto text-green-500 mb-2" />
                  <h3 className="font-semibold text-green-800 mb-2">
                    Temporada Media
                  </h3>
                  <p className="text-2xl font-bold text-green-600 mb-1">
                    $10.000
                  </p>
                  <p className="text-sm text-green-600">por noche</p>
                  <p className="text-xs text-gray-600 mt-2">
                    Mar - Jun / Ago - Nov
                  </p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Moon className="h-8 w-8 mx-auto text-blue-500 mb-2" />
                  <h3 className="font-semibold text-green-800 mb-2">
                    Estadías Largas
                  </h3>
                  <p className="text-2xl font-bold text-green-600 mb-1">
                    10% OFF
                  </p>
                  <p className="text-sm text-green-600">descuento</p>
                  <p className="text-xs text-gray-600 mt-2">+5 noches</p>
                </div>
              </div>
              <Separator className="my-6" />
              <div className="text-center">
                <p className="text-green-700 mb-4">
                  ¿Querés consultar disponibilidad para fechas específicas?
                </p>
                <Button
                  size="lg"
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
                  Consultar por WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card> */}
        </div>
      </div>
    </section>
  );
}
