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
              src="https://res.cloudinary.com/dep95zom7/image/upload/v1736040400/Hospedaje-AliciaRodriguez/23957ccf-cd3e-4d31-9419-1d58f00d0457_ktreco.jpg"
              alt="Vista principal del hospedaje"
              width={600}
              height={600}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Imágenes medianas */}
          <div className="group cursor-pointer overflow-hidden rounded-2xl">
            <Image
              src="https://res.cloudinary.com/dep95zom7/image/upload/v1736040400/Hospedaje-AliciaRodriguez/d9ca3d27-4275-4df9-864f-c96bc422941c_i6yzzo.jpg"
              alt="imagen hospedaje"
              width={300}
              height={300}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          <div className="group cursor-pointer overflow-hidden rounded-2xl">
            <Image
              src="https://res.cloudinary.com/dep95zom7/image/upload/v1736040400/Hospedaje-AliciaRodriguez/2cea4944-25cb-47b1-8dd3-225108f37e19_kqymxd.jpg"
              alt="Imagen hospedaje"
              width={300}
              height={300}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          <div className="group cursor-pointer overflow-hidden rounded-2xl">
            <Image
              src="https://res.cloudinary.com/dep95zom7/image/upload/v1736040400/Hospedaje-AliciaRodriguez/460cd618-735b-4c76-8684-428a7416a305_nltbqu.jpg"
              alt="Imagen hospedaje"
              width={300}
              height={300}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          <div className="group cursor-pointer overflow-hidden rounded-2xl">
            <Image
              src="https://res.cloudinary.com/dep95zom7/image/upload/v1736040400/Hospedaje-AliciaRodriguez/b6a9411f-c0bc-415a-a354-3d0627809c9b_umnsoi.jpg"
              alt="Imagen hospedaje"
              width={300}
              height={300}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Imagen panorámica */}
          <div className="col-span-2 group cursor-pointer overflow-hidden rounded-2xl">
            <Image
              src="https://res.cloudinary.com/dep95zom7/image/upload/v1736040400/Hospedaje-AliciaRodriguez/b533ad16-9920-488d-9173-3df8b97cd4ad_jyear6.jpg"
              alt="Imagen hospedaje"
              width={600}
              height={300}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Más imágenes pequeñas */}
          <div className="group cursor-pointer overflow-hidden rounded-2xl">
            <Image
              src="https://res.cloudinary.com/dep95zom7/image/upload/v1736040400/Hospedaje-AliciaRodriguez/276e87c5-d666-4728-ab5e-9abb7ecfdf32_ajrw6j.jpg"
              alt="imagen hospeadje"
              width={300}
              height={300}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          <div className="group cursor-pointer overflow-hidden rounded-2xl">
            <Image
              src="https://res.cloudinary.com/dep95zom7/image/upload/v1736040400/Hospedaje-AliciaRodriguez/2ddf1636-3d8a-4f9b-90c3-ab39cdf44d25_i1pqnv.jpg"
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
