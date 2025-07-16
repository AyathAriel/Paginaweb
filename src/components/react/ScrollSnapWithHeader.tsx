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

export default function ScrollSnapWithHeader() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeSection, setActiveSection] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  // Define our sections with their properties
  const sections: Section[] = [
    {
      id: "home-section",
      title: "ADO CODE",
      subtitle: "Soluciones tecnológicas avanzadas",
      colorScheme: "default",
      bgClass: "bg-blue-50 dark:bg-blue-950/30",
    },
    {
      id: "services-section",
      title: "Nuestros Servicios",
      subtitle: "Soluciones personalizadas para tu empresa",
      colorScheme: "rainbow",
      bgClass: "bg-gradient-to-br from-red-50 to-purple-50 dark:from-red-950/30 dark:to-purple-950/30",
    },
    {
      id: "about-section",
      title: "Quiénes Somos",
      subtitle: "Expertos en transformación digital",
      colorScheme: "brand",
      bgClass: "bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30",
    },
    {
      id: "contact-section",
      title: "Contacto",
      subtitle: "Estamos aquí para ayudarte",
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

  // Handle navigation between sections
  const navigateToSection = (index: number) => {
    const sectionElement = document.getElementById(sections[index].id)
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (!isMounted) return null

  return (
    <div className="relative">
      {/* Fixed header that changes color based on active section */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300">
        <div
          className={`w-full backdrop-blur-md ${
            activeSection === 0
              ? "bg-blue-50/80 dark:bg-blue-950/80"
              : activeSection === 1
                ? "bg-purple-50/80 dark:bg-purple-950/80"
                : activeSection === 2
                  ? "bg-blue-50/80 dark:bg-blue-950/80"
                  : "bg-orange-50/80 dark:bg-orange-950/80"
          }`}
        >
          <div className="container mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ColorChangingLogo size="sm" colorScheme={sections[activeSection].colorScheme} />
              <span className="font-display font-bold text-lg">ADO CODE</span>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              {sections.map((section, index) => (
                <button
                  key={`nav-${section.id}`}
                  onClick={() => navigateToSection(index)}
                  className={`text-sm font-medium transition-colors relative ${
                    activeSection === index ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {section.title.split(" ")[0]}
                  {activeSection === index && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </nav>

            <button className="md:hidden p-2 rounded-full bg-white/80 dark:bg-slate-800/80">
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
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

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
            className={`h-screen w-full snap-start flex flex-col items-center justify-center pt-16 ${section.bgClass} ${
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
