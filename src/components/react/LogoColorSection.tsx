"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import ColorChangingLogo from "./ColorChangingLogo"

export default function LogoColorSection() {
  const ref = useRef<HTMLDivElement>(null)

  // Get scroll progress relative to the component
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Transform values for parallax effect
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const y3 = useTransform(scrollYProgress, [0, 1], [200, -50])
  const y4 = useTransform(scrollYProgress, [0, 1], [50, -150])

  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 180])
  const rotate2 = useTransform(scrollYProgress, [0, 1], [180, 0])
  const rotate3 = useTransform(scrollYProgress, [0, 1], [45, -45])
  const rotate4 = useTransform(scrollYProgress, [0, 1], [-45, 45])

  return (
    <div ref={ref} className="relative min-h-[60vh] py-20 bg-slate-50 dark:bg-slate-900/50 overflow-hidden">
      <div className="container px-4 md:px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Logos Dinámicos</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nuestros logos cambian de color y se mueven mientras te desplazas por la página
          </p>
        </div>

        <div className="relative h-[400px] md:h-[600px]">
          {/* Default color scheme logo */}
          <motion.div
            style={{
              y: y1,
              rotate: rotate1,
              x: "-50%",
              left: "20%",
            }}
            className="absolute w-16 h-16 md:w-24 md:h-24"
          >
            <ColorChangingLogo size="lg" colorScheme="default" />
          </motion.div>

          {/* Rainbow color scheme logo */}
          <motion.div
            style={{
              y: y2,
              rotate: rotate2,
              x: "-50%",
              left: "40%",
            }}
            className="absolute w-20 h-20 md:w-32 md:h-32"
          >
            <ColorChangingLogo size="lg" colorScheme="rainbow" />
          </motion.div>

          {/* Brand color scheme logo */}
          <motion.div
            style={{
              y: y3,
              rotate: rotate3,
              x: "-50%",
              left: "60%",
            }}
            className="absolute w-16 h-16 md:w-24 md:h-24"
          >
            <ColorChangingLogo size="lg" colorScheme="brand" />
          </motion.div>

          {/* Sunset color scheme logo */}
          <motion.div
            style={{
              y: y4,
              rotate: rotate4,
              x: "-50%",
              left: "80%",
            }}
            className="absolute w-16 h-16 md:w-24 md:h-24"
          >
            <ColorChangingLogo size="lg" colorScheme="sunset" />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
