import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CallToAction() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 -z-10" />

      {/* Animated shapes */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl opacity-30 animate-float z-0" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl opacity-20 animate-float animation-delay-2000 z-0" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">¿Listo para transformar tu empresa?</h2>
          <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto">
            Contáctanos hoy para descubrir cómo nuestras soluciones tecnológicas pueden impulsar tu negocio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="rounded-full h-12 text-base shadow-lg" asChild>
              <Link href="/contacto">Solicita una consulta</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full h-12 text-base bg-transparent text-white border-white hover:bg-white hover:text-blue-600 shadow-lg"
              asChild
            >
              <Link href="/servicios">Conoce nuestros servicios</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
