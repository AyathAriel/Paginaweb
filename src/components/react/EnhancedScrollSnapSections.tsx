"use client"

import type React from "react"

import { useRef, useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ColorChangingLogo from "./ColorChangingLogo"

interface Section {
  id: string
  title: string
  subtitle: string
  colorScheme: "default" | "rainbow" | "brand" | "sunset"
  bgClass: string
  textClass?: string
  icon?: React.ReactNode
  features?: string[]
}

export default function EnhancedScrollSnapSections() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeSection, setActiveSection] = useState(0)
  const [isMounted, setIsMounted] = useState(false)
  const [showScrollHint, setShowScrollHint] = useState(true)

  // Define our sections with their properties
  const sections: Section[] = [
    {
      id: "section-1",
      title: "Soluciones Tecnológicas",
      subtitle: "Transformando empresas con tecnología avanzada",
      colorScheme: "default",
      bgClass: "bg-blue-50 dark:bg-blue-950/30",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-12 w-12"
        >
          <path d="M12 2H2v10h10V2Z" />
          <path d="M22 12h-4v10h4V12Z" />
          <path d="M12 12h-4v10h4V12Z" />
          <path d="M22 2h-6v6h6V2Z" />
        </svg>
      ),
      features: [
        "Automatización de procesos",
        "Desarrollo de software a medida",
        "Consultoría tecnológica",
        "Integración de sistemas",
      ],
    },
    {
      id: "section-2",
      title: "Innovación Constante",
      subtitle: "Creando el futuro con ideas disruptivas",
      colorScheme: "rainbow",
      bgClass: "bg-gradient-to-br from-red-50 to-purple-50 dark:from-red-950/30 dark:to-purple-950/30",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-12 w-12"
        >
          <path d="M12 2v8" />
          <path d="m4.93 10.93 1.41 1.41" />
          <path d="M2 18h2" />
          <path d="M20 18h2" />
          <path d="m19.07 10.93-1.41 1.41" />
          <path d="M22 22H2" />
          <path d="M16 6 8 14" />
          <path d="M16 14 8 6" />
        </svg>
      ),
      features: [
        "Inteligencia artificial",
        "Machine learning",
        "Internet de las cosas (IoT)",
        "Blockchain y tecnologías emergentes",
      ],
    },
    {
      id: "section-3",
      title: "Desarrollo a Medida",
      subtitle: "Software personalizado para tus necesidades",
      colorScheme: "brand",
      bgClass: "bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-12 w-12"
        >
          <path d="m18 16 4-4-4-4" />
          <path d="m6 8-4 4 4 4" />
          <path d="m14.5 4-5 16" />
        </svg>
      ),
      features: [
        "Aplicaciones web y móviles",
        "Sistemas de gestión empresarial",
        "Plataformas de comercio electrónico",
        "Aplicaciones SaaS",
      ],
    },
    {
      id: "section-4",
      title: "Resultados Excepcionales",
      subtitle: "Comprometidos con la excelencia",
      colorScheme: "sunset",
      bgClass: "bg-gradient-to-br from-orange-50 to-pink-50 dark:from-orange-950/30 dark:to-pink-950/30",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-12 w-12"
        >
          <path d="M12 2v4" />
          <path d="m6.41 6.41-2.83-2.83" />
          <path d="M2 12h4" />
          <path d="m6.41 17.59-2.83 2.83" />
          <path d="M12 18v4" />
          <path d="m17.59 17.59 2.83 2.83" />
          <path d="M18 12h4" />
          <path d="m17.59 6.41 2.83-2.83" />
          <path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
        </svg>
      ),
      features: [
        "Optimización de procesos",
        "Aumento de productividad",
        "Reducción de costos",
        "Mejora de la experiencia del cliente",
      ],
    },
  ]

  // Set up intersection observer to detect active section
  useEffect(() => {
    setIsMounted(true)

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.7, // Section is considered active when 70% visible
    }

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id
          const sectionIndex = sections.findIndex((section) => section.id === sectionId)
          if (sectionIndex !== -1) {
            setActiveSection(sectionIndex)
            setShowScrollHint(false) // Hide scroll hint once user starts scrolling
          }
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Observe all section elements
    sections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [sections])

  // Handle manual navigation between sections
  const navigateToSection = (index: number) => {
    const sectionElement = document.getElementById(sections[index].id)
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (!isMounted) return null

  return (
    <div className="relative">
      {/* Fixed navigation dots */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden md:flex flex-col gap-3">
        {sections.map((section, index) => (
          <button
            key={`nav-${section.id}`}
            onClick={() => navigateToSection(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSection === index
                ? "bg-primary scale-125 shadow-lg shadow-primary/30"
                : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
            }`}
            aria-label={`Navigate to ${section.title}`}
          />
        ))}
      </div>

      {/* Fixed logo that changes color based on active section */}
      <div className="fixed top-6 left-6 z-50 hidden md:block">
        <ColorChangingLogo size="md" colorScheme={sections[activeSection].colorScheme} />
      </div>

      {/* Section indicator */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg hidden md:block">
        <span className="text-sm font-medium">
          {activeSection + 1} / {sections.length}
        </span>
      </div>

      {/* Scroll hint */}
      <AnimatePresence>
        {showScrollHint && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="fixed bottom-12 left-1/2 transform -translate-x-1/2 z-50 text-center"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm text-muted-foreground">Desplázate hacia abajo</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 animate-bounce"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll snap container */}
      <div
        ref={containerRef}
        className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth"
        style={{ scrollbarWidth: "none" }}
      >
        {/* Hide scrollbar for Chrome, Safari and Opera */}
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {sections.map((section, index) => (
          <section
            key={section.id}
            id={section.id}
            className={`h-screen w-full snap-start flex flex-col items-center justify-center ${section.bgClass} ${
              section.textClass || ""
            }`}
          >
            <div className="container px-4 md:px-6 text-center">
              <AnimatePresence mode="wait">
                {activeSection === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-8"
                  >
                    <div className="flex flex-col items-center gap-6">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
                        className={`p-4 rounded-full bg-white/80 dark:bg-slate-800/80 shadow-lg text-primary`}
                      >
                        {section.icon}
                      </motion.div>

                      <ColorChangingLogo size="lg" colorScheme={section.colorScheme} />
                    </div>

                    <div className="space-y-4">
                      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">{section.title}</h2>
                      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{section.subtitle}</p>
                    </div>

                    {section.features && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="max-w-2xl mx-auto"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                          {section.features.map((feature, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.5 + i * 0.1 }}
                              className="flex items-center gap-2"
                            >
                              <div className="rounded-full bg-primary/10 p-1">
                                <svg
                                  className="h-3 w-3 text-primary"
                                  fill="none"
                                  height="24"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="3"
                                  viewBox="0 0 24 24"
                                  width="24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <polyline points="20 6 9 17 4 12" />
                                </svg>
                              </div>
                              <span>{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    <div className="flex justify-center gap-4 pt-4">
                      <button
                        onClick={() => navigateToSection(Math.max(0, index - 1))}
                        disabled={index === 0}
                        className={`p-2 rounded-full ${
                          index === 0
                            ? "opacity-50 cursor-not-allowed"
                            : "bg-white/80 dark:bg-slate-800/80 shadow-sm hover:shadow"
                        }`}
                        aria-label="Previous section"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5"
                        >
                          <path d="m15 18-6-6 6-6" />
                        </svg>
                      </button>

                      <button
                        onClick={() => navigateToSection(Math.min(sections.length - 1, index + 1))}
                        disabled={index === sections.length - 1}
                        className={`p-2 rounded-full ${
                          index === sections.length - 1
                            ? "opacity-50 cursor-not-allowed"
                            : "bg-white/80 dark:bg-slate-800/80 shadow-sm hover:shadow"
                        }`}
                        aria-label="Next section"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5"
                        >
                          <path d="m9 18 6-6-6-6" />
                        </svg>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
