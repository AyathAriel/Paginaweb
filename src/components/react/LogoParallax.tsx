"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useRef, useState, useEffect } from "react"

interface LogoParallaxProps {
  className?: string
}

export default function LogoParallax({ className = "" }: LogoParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false)

  // Get scroll progress relative to the component
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Create a smoother scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // Transform values for parallax effect
  const y1 = useTransform(smoothProgress, [0, 1], [100, -100])
  const y2 = useTransform(smoothProgress, [0, 1], [0, -200])
  const y3 = useTransform(smoothProgress, [0, 1], [200, -50])
  const rotate1 = useTransform(smoothProgress, [0, 1], [0, 180])
  const rotate2 = useTransform(smoothProgress, [0, 1], [180, 0])
  const rotate3 = useTransform(smoothProgress, [0, 1], [45, -45])
  const scale1 = useTransform(smoothProgress, [0, 0.5, 1], [0.8, 1.2, 0.9])
  const scale2 = useTransform(smoothProgress, [0, 0.5, 1], [1, 0.8, 1.1])
  const scale3 = useTransform(smoothProgress, [0, 0.5, 1], [0.9, 1, 0.8])
  const opacity1 = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const opacity2 = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const opacity3 = useTransform(smoothProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <div ref={ref} className={`relative min-h-[50vh] ${className}`}>
      <div className="container px-4 md:px-6 py-20 md:py-32 relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Tecnología que <span className="text-gradient">transforma</span> tu empresa
        </h2>

        <div className="relative h-[400px] md:h-[600px]">
          {/* First logo */}
          <motion.div
            style={{
              y: y1,
              rotate: rotate1,
              scale: scale1,
              opacity: opacity1,
              x: "-50%",
              left: "30%",
            }}
            className="absolute w-16 h-16 md:w-24 md:h-24"
          >
            <img src="/logo-128.png" alt="ADO CODE Logo" width={96} height={96} className="object-contain" />
          </motion.div>

          {/* Second logo */}
          <motion.div
            style={{
              y: y2,
              rotate: rotate2,
              scale: scale2,
              opacity: opacity2,
              x: "-50%",
              left: "50%",
            }}
            className="absolute w-20 h-20 md:w-32 md:h-32"
          >
            <img src="/logo-128.png" alt="ADO CODE Logo" width={128} height={128} className="object-contain" />
          </motion.div>

          {/* Third logo */}
          <motion.div
            style={{
              y: y3,
              rotate: rotate3,
              scale: scale3,
              opacity: opacity3,
              x: "-50%",
              left: "70%",
            }}
            className="absolute w-16 h-16 md:w-24 md:h-24"
          >
            <img src="/logo-128.png" alt="ADO CODE Logo" width={96} height={96} className="object-contain" />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
