"use client"

import { motion, useScroll, useSpring } from "framer-motion"
import { useState, useEffect } from "react"

export default function LogoScrollProgress() {
  const [isMounted, setIsMounted] = useState(false)

  // Get scroll progress for the entire page
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center pointer-events-none">
      <div className="container px-4 md:px-6 flex items-center justify-between h-1">
        <motion.div className="h-1 bg-blue-500 origin-left rounded-full" style={{ scaleX, width: "100%" }} />
      </div>
    </div>
  )
}
