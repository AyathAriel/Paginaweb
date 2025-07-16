"use client"

import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"

export default function LogoReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [isMounted, setIsMounted] = useState(false)

  // Get scroll progress relative to the component
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Transform values for reveal effect
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <div ref={ref} className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900/50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestro Enfoque</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Combinamos tecnología avanzada con un profundo entendimiento de los procesos empresariales
          </p>
        </div>

        <motion.div style={{ opacity, scale }} className="flex flex-col items-center">
          <div className="relative w-40 h-40 md:w-64 md:h-64 mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute inset-0"
            >
              <img src="/logo-256.png" alt="ADO CODE Logo" width={256} height={256} className="object-contain" />
            </motion.div>

            {/* Animated rings */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute inset-0 border-2 border-blue-500/20 rounded-full"
              style={{
                transformOrigin: "center",
                animation: isInView ? "spin 20s linear infinite" : "none",
              }}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 0.8 } : { opacity: 0, scale: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute inset-0 border border-blue-500/30 rounded-full"
              style={{
                transformOrigin: "center",
                animation: isInView ? "spin-reverse 25s linear infinite" : "none",
              }}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 0.6 } : { opacity: 0, scale: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute inset-0 border border-blue-500/10 rounded-full"
              style={{
                transformOrigin: "center",
                animation: isInView ? "spin 30s linear infinite" : "none",
              }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="text-center max-w-2xl"
          >
            <p className="text-lg mb-6">
              En ADO CODE, creemos que la tecnología debe adaptarse a tu negocio, no al revés. Nuestras soluciones están
              diseñadas para integrarse perfectamente con tus procesos existentes, mejorándolos sin interrumpir tu
              operación diaria.
            </p>

            <a href="/nosotros" className="inline-flex items-center text-primary hover:underline">
              Conoce más sobre nosotros
              <svg
                className="ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-reverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
      `}</style>
    </div>
  )
}
