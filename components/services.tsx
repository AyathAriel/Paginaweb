"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// Componentes SVG personalizados
const AutomationIcon = () => (
  <svg className="h-8 w-8" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 8C18.745 8 8 18.745 8 32s10.745 24 24 24 24-10.745 24-24S45.255 8 32 8z" fill="currentColor" fillOpacity="0.1"/>
    <path d="M32 12c11.046 0 20 8.954 20 20s-8.954 20-20 20-20-8.954-20-20 8.954-20 20-20z" stroke="currentColor" strokeWidth="2"/>
    <path d="M24 28h16v8H24z" fill="currentColor" fillOpacity="0.2"/>
    <path d="M28 24v4M36 24v4M28 36v4M36 36v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="32" cy="32" r="3" fill="currentColor"/>
    <path d="M20 20l4 4M44 20l-4 4M20 44l4-4M44 44l-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

const CodeIcon = () => (
  <svg className="h-8 w-8" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="12" width="48" height="40" rx="4" fill="currentColor" fillOpacity="0.1"/>
    <rect x="8" y="12" width="48" height="40" rx="4" stroke="currentColor" strokeWidth="2"/>
    <path d="M8 20h48" stroke="currentColor" strokeWidth="2"/>
    <circle cx="14" cy="16" r="2" fill="currentColor" fillOpacity="0.3"/>
    <circle cx="20" cy="16" r="2" fill="currentColor" fillOpacity="0.3"/>
    <circle cx="26" cy="16" r="2" fill="currentColor" fillOpacity="0.3"/>
    <path d="M18 28l6 6-6 6M30 40h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const OptimizationIcon = () => (
  <svg className="h-8 w-8" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 48h48v4H8zM12 44V24M20 44V32M28 44V20M36 44V28M44 44V16M52 44V36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M8 48L20 32L28 20L36 28L44 16L56 36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="20" cy="32" r="3" fill="currentColor"/>
    <circle cx="28" cy="20" r="3" fill="currentColor"/>
    <circle cx="36" cy="28" r="3" fill="currentColor"/>
    <circle cx="44" cy="16" r="3" fill="currentColor"/>
    <path d="M48 8l4 4-4 4-4-4z" fill="currentColor"/>
  </svg>
)

const AIIcon = () => (
  <svg className="h-8 w-8" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="20" fill="currentColor" fillOpacity="0.1"/>
    <circle cx="32" cy="32" r="20" stroke="currentColor" strokeWidth="2"/>
    <path d="M24 24h16v16H24z" fill="currentColor" fillOpacity="0.2"/>
    <path d="M28 28h8v8h-8z" stroke="currentColor" strokeWidth="2"/>
    <circle cx="32" cy="32" r="2" fill="currentColor"/>
    <path d="M32 16v8M32 40v8M16 32h8M40 32h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M22.6 22.6l5.7 5.7M35.7 35.7l5.7 5.7M22.6 41.4l5.7-5.7M35.7 28.3l5.7-5.7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

export default function Services() {
  const services = [
    {
      icon: <AutomationIcon />,
      title: "Automatización Inteligente",
      description:
        "Acelera tus procesos empresariales con IA y elimina tareas manuales para aumentar la productividad.",
    },
    {
      icon: <CodeIcon />,
      title: "Desarrollo de Software a Medida",
      description:
        "Soluciones tecnológicas que se adaptan a tus necesidades específicas, desde aplicaciones web hasta sistemas empresariales.",
    },
    {
      icon: <OptimizationIcon />,
      title: "Optimización de Procesos",
      description:
        "Mejora la productividad y reduce costos mediante la implementación de tecnologías avanzadas en tus procesos de negocio.",
    },
    {
      icon: <AIIcon />,
      title: "Consultoría en IA y Big Data",
      description:
        "Transforma tu negocio con datos inteligentes y estrategias de implementación de tecnologías emergentes.",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 dark:dot-pattern-dark dot-pattern -z-10" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-4 text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ofrecemos soluciones tecnológicas avanzadas para transformar tu empresa
            </p>
          </motion.div>
        </div>

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item}>
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
        </motion.div>

        <div className="flex justify-center mt-12">
          <Button asChild variant="outline" className="rounded-full border-blue-300 dark:border-blue-800">
            <Link href="/servicios">Ver todos los servicios</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
