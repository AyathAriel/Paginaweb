"use client"

import type React from "react"

import { useRef, useState, useEffect } from "react"
import { motion, AnimatePresence, useAnimation, useMotionValue, useTransform } from "framer-motion"
import ColorChangingLogo from "./ColorChangingLogo"

interface Section {
  id: string
  title: string
  subtitle: string
  colorScheme: "default" | "rainbow" | "brand" | "sunset"
  bgClass: string
  content: React.ReactNode
  transitionType?: "fade" | "slide" | "zoom" | "flip" | "rotate"
}

export default function TransitionScrollSections() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeSection, setActiveSection] = useState(0)
  const [previousSection, setPreviousSection] = useState(0)
  const [isMounted, setIsMounted] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [transitionDirection, setTransitionDirection] = useState<"up" | "down">("down")
  const controls = useAnimation()
  const scrollY = useMotionValue(0)
  const opacity = useTransform(scrollY, [0, 100], [1, 0])

  // Define our sections with their properties
  const sections: Section[] = [
    {
      id: "section-1",
      title: "Soluciones Tecnológicas",
      subtitle: "Transformando empresas con tecnología avanzada",
      colorScheme: "default",
      bgClass: "bg-blue-50 dark:bg-blue-950/30",
      transitionType: "fade",
      content: (
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-6 items-center">
          <div className="flex flex-col space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                <span className="text-gradient">Transformamos empresas</span> con tecnología avanzada
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
                Soluciones tecnológicas innovadoras para impulsar el crecimiento y la eficiencia de tu negocio
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="rounded-full px-6 py-3 text-base bg-gradient-blue shadow-blue-sm text-white">
                Descubre nuestras soluciones
              </button>
              <button className="rounded-full px-6 py-3 text-base border border-blue-300 dark:border-blue-800">
                Contáctanos
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <ColorChangingLogo size="xl" colorScheme="default" />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "section-2",
      title: "Innovación Constante",
      subtitle: "Creando el futuro con ideas disruptivas",
      colorScheme: "rainbow",
      bgClass: "bg-gradient-to-br from-red-50 to-purple-50 dark:from-red-950/30 dark:to-purple-950/30",
      transitionType: "slide",
      content: (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
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
                  className="h-8 w-8"
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
              title: "Automatización Inteligente",
              description:
                "Acelera tus procesos empresariales con IA y elimina tareas manuales para aumentar la productividad.",
            },
            {
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
                  className="h-8 w-8"
                >
                  <path d="m18 16 4-4-4-4" />
                  <path d="m6 8-4 4 4 4" />
                  <path d="m14.5 4-5 16" />
                </svg>
              ),
              title: "Desarrollo de Software",
              description:
                "Soluciones tecnológicas que se adaptan a tus necesidades específicas, desde aplicaciones web hasta sistemas empresariales.",
            },
            {
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
                  className="h-8 w-8"
                >
                  <path d="M3 3v18h18" />
                  <path d="m19 9-5 5-4-4-3 3" />
                </svg>
              ),
              title: "Optimización de Procesos",
              description:
                "Mejora la productividad y reduce costos mediante la implementación de tecnologías avanzadas en tus procesos de negocio.",
            },
            {
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
                  className="h-8 w-8"
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
              title: "Consultoría en IA",
              description:
                "Transforma tu negocio con datos inteligentes y estrategias de implementación de tecnologías emergentes.",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="glass-card rounded-2xl p-8 h-full shadow-blue-sm hover:shadow-blue transition-all duration-300 group">
                <div className="bg-gradient-blue p-4 rounded-xl inline-flex mb-6 text-white shadow-sm">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      ),
    },
    {
      id: "section-3",
      title: "Desarrollo a Medida",
      subtitle: "Software personalizado para tus necesidades",
      colorScheme: "brand",
      bgClass: "bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30",
      transitionType: "zoom",
      content: (
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">Quiénes Somos</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                En ADO CODE Technologies, somos un equipo de expertos apasionados por la tecnología y la innovación. Nos
                especializamos en ofrecer soluciones tecnológicas avanzadas que ayudan a las empresas a optimizar sus
                procesos, aumentar su eficiencia y mantenerse competitivas en la era digital.
              </p>
              <p>
                Fundada con la visión de transformar la forma en que las empresas utilizan la tecnología, hemos
                desarrollado un enfoque único que combina la automatización inteligente, la inteligencia artificial y el
                desarrollo de software a medida para crear soluciones que realmente marcan la diferencia.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <ColorChangingLogo size="xl" colorScheme="brand" />
          </div>
        </div>
      ),
    },
    {
      id: "section-4",
      title: "Resultados Excepcionales",
      subtitle: "Comprometidos con la excelencia",
      colorScheme: "sunset",
      bgClass: "bg-gradient-to-br from-orange-50 to-pink-50 dark:from-orange-950/30 dark:to-pink-950/30",
      transitionType: "flip",
      content: (
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="glass-card rounded-2xl p-8 shadow-blue-sm">
              <h3 className="text-xl font-bold mb-6">Envíanos un mensaje</h3>
              <form className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nombre completo
                    </label>
                    <input
                      id="name"
                      name="name"
                      placeholder="Tu nombre"
                      required
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-slate-800"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Correo electrónico
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="tu@email.com"
                      required
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-slate-800"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="¿En qué podemos ayudarte?"
                    rows={5}
                    required
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-slate-800"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full px-6 py-3 text-base bg-gradient-blue shadow-blue-sm text-white"
                >
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-6">Información de contacto</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
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
                      className="h-6 w-6"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Teléfono</h4>
                    <p className="text-muted-foreground">+507 6644-8655</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
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
                      className="h-6 w-6"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Correo electrónico</h4>
                    <p className="text-muted-foreground">contacto@adocode.com</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
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
                      className="h-6 w-6"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Dirección</h4>
                    <p className="text-muted-foreground">Ciudad de Panamá, Panamá</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <ColorChangingLogo size="lg" colorScheme="sunset" />
            </div>
          </div>
        </div>
      ),
    },
  ]

  // Get transition variants based on transition type and direction
  const getTransitionVariants = (type: Section["transitionType"], direction: "up" | "down") => {
    switch (type) {
      case "fade":
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          transition: { duration: 0.5 },
        }
      case "slide":
        return {
          initial: { x: direction === "down" ? "100%" : "-100%", opacity: 0 },
          animate: { x: 0, opacity: 1 },
          exit: { x: direction === "down" ? "-100%" : "100%", opacity: 0 },
          transition: { type: "tween", ease: "easeInOut", duration: 0.5 },
        }
      case "zoom":
        return {
          initial: { scale: 0.8, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          exit: { scale: 1.2, opacity: 0 },
          transition: { type: "spring", stiffness: 300, damping: 30 },
        }
      case "flip":
        return {
          initial: { rotateY: direction === "down" ? 90 : -90, opacity: 0 },
          animate: { rotateY: 0, opacity: 1 },
          exit: { rotateY: direction === "down" ? -90 : 90, opacity: 0 },
          transition: { type: "spring", stiffness: 100, damping: 20 },
        }
      case "rotate":
        return {
          initial: { rotate: direction === "down" ? 90 : -90, opacity: 0, scale: 0.8 },
          animate: { rotate: 0, opacity: 1, scale: 1 },
          exit: { rotate: direction === "down" ? -90 : 90, opacity: 0, scale: 0.8 },
          transition: { type: "spring", stiffness: 200, damping: 30 },
        }
      default:
        return {
          initial: { opacity: 0, y: direction === "down" ? 50 : -50 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: direction === "down" ? -50 : 50 },
          transition: { duration: 0.5 },
        }
    }
  }

  // Handle manual navigation between sections
  const navigateToSection = (index: number) => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setPreviousSection(activeSection)
    setTransitionDirection(index > activeSection ? "down" : "up")
    setActiveSection(index)

    // After transition is complete, scroll to the section
    setTimeout(() => {
      const sectionElement = document.getElementById(sections[index].id)
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "auto" })
      }
      setIsTransitioning(false)
    }, 500) // Match this with the transition duration
  }

  // Set up intersection observer to detect active section when not transitioning
  useEffect(() => {
    setIsMounted(true)

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.7, // Section is considered active when 70% visible
    }

    const observerCallback: IntersectionObserverCallback = (entries) => {
      if (isTransitioning) return

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id
          const sectionIndex = sections.findIndex((section) => section.id === sectionId)
          if (sectionIndex !== -1 && sectionIndex !== activeSection) {
            setPreviousSection(activeSection)
            setTransitionDirection(sectionIndex > activeSection ? "down" : "up")
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
  }, [activeSection, isTransitioning])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isTransitioning) return

      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault()
        const nextSection = Math.min(sections.length - 1, activeSection + 1)
        if (nextSection !== activeSection) {
          navigateToSection(nextSection)
        }
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault()
        const prevSection = Math.max(0, activeSection - 1)
        if (prevSection !== activeSection) {
          navigateToSection(prevSection)
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [activeSection, isTransitioning, sections.length])

  if (!isMounted) return null

  return (
    <div className="relative h-screen overflow-hidden">
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
      <div className="fixed top-6 left-6 z-50">
        <ColorChangingLogo size="md" colorScheme={sections[activeSection].colorScheme} />
      </div>

      {/* Section indicator */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg hidden md:block">
        <span className="text-sm font-medium">
          {activeSection + 1} / {sections.length}
        </span>
      </div>

      {/* Transition overlay */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          />
        )}
      </AnimatePresence>

      {/* Main content with transitions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          className={`h-screen w-full flex flex-col items-center justify-center ${sections[activeSection].bgClass}`}
          {...getTransitionVariants(sections[activeSection].transitionType, transitionDirection)}
        >
          <div className="container px-4 md:px-6">
            <div className="text-center mb-8">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold mb-2"
              >
                {sections[activeSection].title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-lg text-muted-foreground"
              >
                {sections[activeSection].subtitle}
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {sections[activeSection].content}
            </motion.div>
          </div>

          {/* Navigation buttons */}
          <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-50 flex gap-4">
            <button
              onClick={() => navigateToSection(Math.max(0, activeSection - 1))}
              disabled={activeSection === 0 || isTransitioning}
              className={`p-3 rounded-full ${
                activeSection === 0 || isTransitioning
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
              onClick={() => navigateToSection(Math.min(sections.length - 1, activeSection + 1))}
              disabled={activeSection === sections.length - 1 || isTransitioning}
              className={`p-3 rounded-full ${
                activeSection === sections.length - 1 || isTransitioning
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
      </AnimatePresence>

      {/* Hidden scroll snap container for keyboard navigation */}
      <div className="absolute inset-0 -z-10 opacity-0 pointer-events-none">
        {sections.map((section) => (
          <div key={section.id} id={section.id} className="h-screen w-full" />
        ))}
      </div>
    </div>
  )
}
