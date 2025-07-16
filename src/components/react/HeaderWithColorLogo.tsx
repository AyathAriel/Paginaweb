"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useState, useEffect } from "react"
import ColorChangingLogo from "./ColorChangingLogo"

interface HeaderWithColorLogoProps {
  colorScheme?: "default" | "rainbow" | "brand" | "sunset"
}

export default function HeaderWithColorLogo({ colorScheme = "default" }: HeaderWithColorLogoProps) {
  const [isMounted, setIsMounted] = useState(false)

  // Get scroll progress
  const { scrollY } = useScroll()

  // Create a smoother scroll value
  const smoothScrollY = useSpring(scrollY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // Transform values based on scroll position
  const logoScale = useTransform(smoothScrollY, [0, 100], [1, 0.9])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <motion.div style={{ scale: logoScale }} className="flex items-center gap-3">
      <ColorChangingLogo size="md" withText colorScheme={colorScheme} />
    </motion.div>
  )
}
