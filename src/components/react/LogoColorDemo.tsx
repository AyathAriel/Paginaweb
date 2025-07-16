"use client"

import { useState } from "react"
import ColorChangingLogo from "./ColorChangingLogo"

export default function LogoColorDemo() {
  const [activeScheme, setActiveScheme] = useState<"default" | "rainbow" | "brand" | "sunset">("default")

  const colorSchemes = [
    { id: "default", name: "Default Blue" },
    { id: "rainbow", name: "Rainbow" },
    { id: "brand", name: "Brand Colors" },
    { id: "sunset", name: "Sunset" },
  ] as const

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Logo Interactivo</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nuestro logo cambia de color mientras navegas por la página. Prueba diferentes esquemas de color.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="mb-8">
            <ColorChangingLogo size="xl" colorScheme={activeScheme} />
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {colorSchemes.map((scheme) => (
              <button
                key={scheme.id}
                onClick={() => setActiveScheme(scheme.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeScheme === scheme.id
                    ? "bg-blue-500 text-white shadow-lg"
                    : "bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700"
                }`}
              >
                {scheme.name}
              </button>
            ))}
          </div>

          <div className="mt-12 max-w-2xl text-center">
            <p className="text-muted-foreground">
              Desplázate por la página para ver cómo el logo cambia de color automáticamente según tu posición de
              desplazamiento. Esta interactividad añade un elemento dinámico a la experiencia del usuario.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
