"use client"

import { useScroll } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import ColorChangingLogo from "./ColorChangingLogo"

interface Section {
  id: string
  colorScheme: "default" | "rainbow" | "brand" | "sunset"
}

export default function SectionAwareLogo() {
  const ref = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false)
  const [activeSection, setActiveSection] = useState(0)

  // Define sections with different color schemes
  const sections: Section[] = [
    { id: "section1", colorScheme: "default" },
    { id: "section2", colorScheme: "rainbow" },
    { id: "section3", colorScheme: "brand" },
    { id: "section4", colorScheme: "sunset" },
  ]

  // Get scroll progress
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  // Update active section based on scroll position
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      // Calculate which section we're in based on scroll progress
      const sectionIndex = Math.min(Math.floor(latest * sections.length), sections.length - 1)
      setActiveSection(sectionIndex)
    })

    return () => unsubscribe()
  }, [scrollYProgress, sections.length])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <div ref={ref} className="min-h-screen">
      <div className="fixed top-4 left-4 z-50">
        <ColorChangingLogo size="md" colorScheme={sections[activeSection].colorScheme} />
      </div>

      {sections.map((section, index) => (
        <div
          key={section.id}
          id={section.id}
          className="min-h-screen flex items-center justify-center"
          style={{
            backgroundColor:
              section.colorScheme === "default"
                ? "rgba(239, 246, 255, 0.6)"
                : section.colorScheme === "rainbow"
                  ? "rgba(254, 242, 242, 0.6)"
                  : section.colorScheme === "brand"
                    ? "rgba(237, 233, 254, 0.6)"
                    : "rgba(255, 251, 235, 0.6)",
          }}
        >
          <div className="text-center p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Sección {index + 1}</h2>
            <p className="text-muted-foreground">
              Desplázate para ver cómo cambia el color del logo en la esquina superior izquierda.
            </p>
            <div className="mt-8">
              <ColorChangingLogo size="lg" colorScheme={section.colorScheme} />
            </div>
            <p className="mt-4 font-medium">Esquema de color: {section.colorScheme}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
