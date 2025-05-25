import { Mountain } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-green-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <Mountain className="h-8 w-8 text-green-300 mr-2" />
            <h3 className="text-2xl font-bold">Lo de Alicia</h3>
          </div>
          <p className="text-green-200 mb-4">
            Tu refugio en El Cadillal - Tucumán, Argentina
          </p>
          <p className="text-sm text-green-300">
            © 2024 Lo de Alicia. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
