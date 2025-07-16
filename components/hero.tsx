"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
// Importar el componente de animación del logo
import HeroLogoAnimation from "./hero-logo-animation"

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    {
      title: "Transforma tu empresa con soluciones tecnológicas avanzadas",
      subtitle: "Innovación tecnológica al alcance de tu empresa",
    },
    {
      title: "Automatización inteligente para tu negocio",
      subtitle: "Optimiza tus procesos y maximiza tu eficiencia",
    },
    {
      title: "Desarrollo de software a medida",
      subtitle: "Soluciones tecnológicas adaptadas a tus necesidades",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <section className="relative overflow-hidden pt-10 pb-20 md:pt-16 md:pb-32">
      {/* Background patterns */}
      <div className="absolute inset-0 dark:grid-pattern-dark grid-pattern z-0" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-0" />

      {/* Animated shapes */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl opacity-70 animate-float-slow z-0" />
      <div className="absolute bottom-1/3 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-50 animate-float z-0" />
      <div className="absolute top-2/3 left-1/3 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl opacity-30 animate-float-fast z-0" />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-6 items-center">
          <div className="flex flex-col space-y-8 text-center lg:text-left order-2 lg:order-1">
            <motion.div
              key={`content-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                <span className="text-gradient">{slides[currentSlide].title}</span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">{slides[currentSlide].subtitle}</p>
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="rounded-full h-12 text-base bg-gradient-blue shadow-blue-sm">
                <Link href="/servicios">
                  Descubre nuestras soluciones
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full h-12 text-base border-blue-300 dark:border-blue-800"
              >
                <Link href="/contacto">Contáctanos</Link>
              </Button>
            </div>

            <div className="flex justify-center lg:justify-start space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index ? "bg-primary w-8" : "bg-primary/30"
                  }`}
                  aria-label={`Ver slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Animación del logo */}
              <HeroLogoAnimation />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
