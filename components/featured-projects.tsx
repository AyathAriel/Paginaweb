"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

export default function FeaturedProjects() {
  const projects = [
    {
      title: "MercaliaPTY",
      description: "Plataforma de comercio electrónico que conecta a vendedores verificados con compradores en Panamá.",
      image: "/Captura de pantalla 2025-10-14 190018.png",
      tags: ["E-commerce", "Marketplace", "Seguridad"],
    },
    {
      title: "Aplicación de Gestión para Gimnasios",
      description: "Solución integral para la administración de gimnasios, incluyendo control de acceso, miembros y pagos.",
      image: "/Captura de pantalla 2025-10-14 185836.png",
      tags: ["Fitness", "Gestión", "App Móvil"],
    },
    {
      title: "Plataforma de RRHH con IA",
      description: "Herramienta de RRHH que utiliza IA para optimizar la selección de personal y la gestión de talento.",
      image: "/Captura de pantalla 2025-10-14 185816.png",
      tags: ["Recursos Humanos", "IA", "Automatización"],
    },
  ]

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center space-y-4 text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Proyectos Destacados</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conoce algunos de nuestros casos de éxito y cómo hemos ayudado a nuestros clientes
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="group h-full glass-card rounded-2xl overflow-hidden shadow-blue-sm hover:shadow-blue transition-all duration-300">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900/30 px-2.5 py-0.5 text-xs font-medium text-blue-700 dark:text-blue-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button asChild variant="outline" className="rounded-full border-blue-300 dark:border-blue-800">
            <Link href="/proyectos">Ver todos los proyectos</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
