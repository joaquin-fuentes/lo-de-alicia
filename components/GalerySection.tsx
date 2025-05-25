"use client";

import Image from "next/image";

export function GallerySection() {
  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
            Galería
          </h2>
          <p className="text-xl text-green-600 max-w-2xl mx-auto">
            Descubrí la belleza natural que te espera en cada rincón de nuestro
            hospedaje
          </p>
        </div>

        {/* Grid complejo de galería */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {/* Imagen grande principal */}
          <div className="col-span-2 row-span-2 group cursor-pointer overflow-hidden rounded-2xl">
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Vista principal del hospedaje"
              width={600}
              height={600}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Imágenes medianas */}
          <div className="group cursor-pointer overflow-hidden rounded-2xl">
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="Habitación principal"
              width={300}
              height={300}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          <div className="group cursor-pointer overflow-hidden rounded-2xl">
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="Vista de las montañas"
              width={300}
              height={300}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          <div className="group cursor-pointer overflow-hidden rounded-2xl">
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="Área de descanso"
              width={300}
              height={300}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          <div className="group cursor-pointer overflow-hidden rounded-2xl">
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="Cocina equipada"
              width={300}
              height={300}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Imagen panorámica */}
          <div className="col-span-2 group cursor-pointer overflow-hidden rounded-2xl">
            <Image
              src="/placeholder.svg?height=300&width=600"
              alt="Vista panorámica"
              width={600}
              height={300}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Más imágenes pequeñas */}
          <div className="group cursor-pointer overflow-hidden rounded-2xl">
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="Baño completo"
              width={300}
              height={300}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          <div className="group cursor-pointer overflow-hidden rounded-2xl">
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="Jardín"
              width={300}
              height={300}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
