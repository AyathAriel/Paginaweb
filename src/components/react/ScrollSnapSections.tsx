"use client"

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
}

export default function ScrollSnapSections() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeSection, setActiveSection] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  // Define our sections with their properties
  const sections: Section[] = [
    {
      id: "section-1",
      title: "Soluciones Tecnológicas",
      subtitle: "Transformando empresas con tecnología avanzada",
      colorScheme: "default",
      bgClass: "bg-blue-50 dark:bg-blue-950/30",
    },
    {
      id: "section-2",
      title: "Innovación Constante",
      subtitle: "Creando el futuro con ideas disruptivas",
      colorScheme: "rainbow",
      bgClass: "bg-gradient-to-br from-red-50 to-purple-50 dark:from-red-950/30 dark:to-purple-950/30",
    },
    {
      id: "section-3",
      title: "Desarrollo a Medida",
      subtitle: "Software personalizado para tus necesidades",
      colorScheme: "brand",
      bgClass: "bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30",
    },
    {
      id: "section-4",
      title: "Resultados Excepcionales",
      subtitle: "Comprometidos con la excelencia",
      colorScheme: "sunset",
      bgClass: "bg-gradient-to-br from-orange-50 to-pink-50 dark:from-orange-950/30 dark:to-pink-950/30",
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
                    <ColorChangingLogo size="xl" colorScheme={section.colorScheme} />

                    <div className="space-y-4">
                      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">{section.title}</h2>
                      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{section.subtitle}</p>
                    </div>

                    <div className="flex justify-center gap-4">
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
