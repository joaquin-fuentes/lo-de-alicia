"use client";

import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { DetailsSection } from "@/components/DetailsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { GallerySection } from "@/components/GalerySection";

export default function HomePage() {
  const whatsappNumber = "543815540275";
  const whatsappMessage =
    "Hola! Me interesa consultar sobre disponibilidad en Lo de Alicia";

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-emerald-50">
      <Header
        whatsappNumber={whatsappNumber}
        whatsappMessage={whatsappMessage}
      />
      <HeroSection
        whatsappNumber={whatsappNumber}
        whatsappMessage={whatsappMessage}
      />
      <GallerySection />
      <DetailsSection
        whatsappNumber={whatsappNumber}
        whatsappMessage={whatsappMessage}
      />
      <TestimonialsSection />
      <ContactSection
        whatsappNumber={whatsappNumber}
        whatsappMessage={whatsappMessage}
      />
      <Footer />
    </div>
  );
}
