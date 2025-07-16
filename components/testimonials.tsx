"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "ADO CODE nos ayudó a mejorar nuestra eficiencia operativa con soluciones automatizadas. El nivel de servicio y compromiso es excepcional.",
      author: "Cliente Satisfecho",
      company: "Empresa A",
      initials: "CS",
    },
    {
      quote:
        "Gracias a su enfoque en IA, nuestra toma de decisiones ha sido mucho más precisa y rápida. Han transformado nuestra forma de trabajar.",
      author: "María González",
      company: "Industrias XYZ",
      initials: "MG",
    },
    {
      quote:
        "El equipo de ADO CODE entendió perfectamente nuestras necesidades y desarrolló una solución personalizada que superó nuestras expectativas.",
      author: "Juan Pérez",
      company: "Corporación ABC",
      initials: "JP",
    },
  ]

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 dark:dot-pattern-dark dot-pattern -z-10" />

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          className="flex flex-col items-center space-y-4 text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Lo que dicen nuestros clientes</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Testimonios de empresas que han confiado en nosotros para su transformación digital
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="glass-card rounded-2xl p-8 h-full shadow-blue-sm hover:shadow-blue transition-all duration-300">
                <Quote className="h-10 w-10 text-blue-300 dark:text-blue-700 mb-6" />
                <p className="text-lg italic mb-8">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-blue text-white flex items-center justify-center font-medium mr-3 shadow-sm">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
