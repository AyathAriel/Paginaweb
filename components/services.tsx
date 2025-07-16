"use client"

import { Brain, Code, LineChart, Lightbulb } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Services() {
  const services = [
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Automatización Inteligente",
      description:
        "Acelera tus procesos empresariales con IA y elimina tareas manuales para aumentar la productividad.",
    },
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Desarrollo de Software a Medida",
      description:
        "Soluciones tecnológicas que se adaptan a tus necesidades específicas, desde aplicaciones web hasta sistemas empresariales.",
    },
    {
      icon: <LineChart className="h-8 w-8 text-primary" />,
      title: "Optimización de Procesos",
      description:
        "Mejora la productividad y reduce costos mediante la implementación de tecnologías avanzadas en tus procesos de negocio.",
    },
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
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
