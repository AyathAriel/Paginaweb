"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import ColorChangingLogo from "./ColorChangingLogo"
import Link from "next/link"

interface TransitionOption {
  id: string
  name: string
  description: string
  type: "fade" | "slide" | "zoom" | "flip" | "rotate" | "cube" | "carousel" | "perspective" | "fold"
  colorScheme: "default" | "rainbow" | "brand" | "sunset"
  url: string
}

export default function TransitionSelector() {
  const [selectedTransition, setSelectedTransition] = useState<TransitionOption | null>(null)

  const transitions: TransitionOption[] = [
    {
      id: "fade",
      name: "Fade",
      description: "Transición suave con desvanecimiento entre secciones",
      type: "fade",
      colorScheme: "default",
      url: "/transition-sections",
    },
    {
      id: "slide",
      name: "Slide",
      description: "Deslizamiento horizontal entre secciones",
      type: "slide",
      colorScheme: "rainbow",
      url: "/transition-sections",
    },
    {
      id: "zoom",
      name: "Zoom",
      description: "Efecto de zoom al cambiar entre secciones",
      type: "zoom",
      colorScheme: "brand",
      url: "/transition-sections",
    },
    {
      id: "flip",
      name: "Flip",
      description: "Efecto de volteo en 3D entre secciones",
      type: "flip",
      colorScheme: "sunset",
      url: "/transition-sections",
    },
    {
      id: "rotate",
      name: "Rotate",
      description: "Rotación entre secciones",
      type: "rotate",
      colorScheme: "default",
      url: "/transition-sections",
    },
    {
      id: "cube",
      name: "Cube",
      description: "Efecto de cubo 3D entre secciones",
      type: "cube",
      colorScheme: "rainbow",
      url: "/advanced-transitions",
    },
    {
      id: "carousel",
      name: "Carousel",
      description: "Efecto de carrusel entre secciones",
      type: "carousel",
      colorScheme: "brand",
      url: "/advanced-transitions",
    },
    {
      id: "perspective",
      name: "Perspective",
      description: "Transición con efecto de perspectiva",
      type: "perspective",
      colorScheme: "sunset",
      url: "/advanced-transitions",
    },
    {
      id: "fold",
      name: "Fold",
      description: "Efecto de plegado entre secciones",
      type: "fold",
      colorScheme: "default",
      url: "/advanced-transitions",
    },
  ]

  return (
    <div className="container px-4 md:px-6 py-20">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Transiciones entre Secciones</h1>

      <div className="max-w-3xl mx-auto">
        <p className="text-muted-foreground text-center mb-12">
          Explora diferentes tipos de transiciones entre secciones. Selecciona una transición para ver una demostración.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {transitions.map((transition) => (
            <motion.div
              key={transition.id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className={`relative cursor-pointer rounded-xl overflow-hidden ${
                selectedTransition?.id === transition.id ? "ring-2 ring-primary" : ""
              }`}
              onClick={() => setSelectedTransition(transition)}
            >
              <div className="p-6 bg-white dark:bg-slate-800 shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-primary/10">
                    <ColorChangingLogo size="sm" colorScheme={transition.colorScheme} />
                  </div>
                  <h2 className="text-xl font-bold">{transition.name}</h2>
                </div>
                <p className="text-muted-foreground mb-4">{transition.description}</p>
                <div className="flex justify-end">
                  <Link href={transition.url} className="inline-flex items-center text-primary hover:underline">
                    Ver demo
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
                      className="ml-1 h-4 w-4"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/scroll-demos" className="inline-flex items-center text-primary hover:underline">
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
              className="mr-1 h-4 w-4"
            >
              <path d="m12 19-7-7 7-7"></path>
              <path d="M19 12H5"></path>
            </svg>
            Volver a demos de scroll
          </Link>
        </div>
      </div>
    </div>
  )
}
