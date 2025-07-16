"use client"

import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion"
import { useRef, useState, useEffect } from "react"

interface ScrollLogoProps {
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
  withText?: boolean
}

export default function ScrollLogo({ size = "md", className = "", withText = false }: ScrollLogoProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false)

  // Get scroll progress
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  // Create a smoother scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // Transform values based on scroll progress
  const rotate = useTransform(smoothProgress, [0, 1], [0, 360])
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [1, 1.2, 1])
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [1, 1, 1, 0.6])
  const y = useTransform(smoothProgress, [0, 1], [0, -50])

  const ringRotate1 = useTransform(smoothProgress, [0, 1], [0, -180])
  const ringScale1 = useTransform(smoothProgress, [0, 0.5, 1], [1, 1.1, 0.9])
  const ringRotate2 = useTransform(smoothProgress, [0, 1], [0, 180])
  const ringScale2 = useTransform(smoothProgress, [0, 0.5, 1], [0.8, 1, 1.2])
  const textX = useTransform(smoothProgress, [0, 1], [0, -20])

  // Define dimensions based on size
  const dimensions = {
    sm: { width: 32, height: 32, logoSize: 32 },
    md: { width: 64, height: 64, logoSize: 64 },
    lg: { width: 128, height: 128, logoSize: 128 },
    xl: { width: 256, height: 256, logoSize: 256 },
  }

  const { width, height, logoSize } = dimensions[size]

  // Determine which image to use based on size
  const logoSrc =
    size === "sm" ? "/logo-64.png" : size === "md" ? "/logo-64.png" : size === "lg" ? "/logo-128.png" : "/logo-256.png"

  // Debug scroll value (remove in production)
  const [scrollValue, setScrollValue] = useState(0)
  useMotionValueEvent(smoothProgress, "change", (latest) => {
    setScrollValue(latest)
  })

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div
        style={{
          rotate,
          scale,
          opacity,
          y,
          width: logoSize,
          height: logoSize,
        }}
        className="relative"
      >
        <img
          src={logoSrc || "/placeholder.svg"}
          alt="ADO CODE Technologies Logo"
          width={logoSize}
          height={logoSize}
          className="object-contain"
        />

        {/* Animated rings that respond to scroll */}
        <motion.div
          className="absolute inset-0 border-2 border-blue-500/20 rounded-full"
          style={{
            rotate: ringRotate1,
            scale: ringScale1,
          }}
        />

        <motion.div
          className="absolute inset-0 border border-blue-500/10 rounded-full"
          style={{
            rotate: ringRotate2,
            scale: ringScale2,
          }}
        />
      </motion.div>

      {withText && (
        <motion.div
          style={{
            opacity,
            x: textX,
          }}
          className="mt-2 text-center"
        >
          <span className="font-display font-bold text-xl">
            ADO CODE
            <span className="text-muted-foreground font-normal text-sm block -mt-1">Technologies</span>
          </span>
        </motion.div>
      )}

      {/* Uncomment for debugging
      <div className="absolute top-0 right-0 bg-black text-white p-1 text-xs">
        {scrollValue.toFixed(2)}
      </div>
      */}
    </div>
  )
}
