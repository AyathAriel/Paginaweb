"use client"

import { motion } from "framer-motion"
import { Users, Code, Award, Clock } from "lucide-react"

export default function StatsSection() {
  const stats = [
    {
      icon: <Users className="h-6 w-6" />,
      value: "100+",
      label: "Clientes satisfechos",
    },
    {
      icon: <Code className="h-6 w-6" />,
      value: "200+",
      label: "Proyectos completados",
    },
    {
      icon: <Award className="h-6 w-6" />,
      value: "10+",
      label: "Años de experiencia",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      value: "98%",
      label: "Entregas a tiempo",
    },
  ]

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/20 -z-10" />

      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-blue-sm h-full">
                <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full inline-flex text-primary mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-gradient-blue mb-1">{stat.value}</h3>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
