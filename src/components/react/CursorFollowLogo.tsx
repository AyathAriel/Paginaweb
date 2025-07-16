"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useRef, useState, useEffect } from "react"

export default function CursorFollowLogo() {
  const ref = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Motion values for smooth animation
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Spring physics for smoother following
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 })

  // Transform values for rotation based on mouse position
  const rotateX = useTransform(springY, [0, 300], [10, -10])
  const rotateY = useTransform(springX, [0, 300], [-10, 10])

  // Handle mouse move
  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setMousePosition({ x, y })
    mouseX.set(x)
    mouseY.set(y)
  }

  useEffect(() => {
    setIsMounted(true)

    if (ref.current) {
      ref.current.addEventListener("mousemove", handleMouseMove)
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [])

  if (!isMounted) return null

  return (
    <div ref={ref} className="relative h-[300px] overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800 cursor-none">
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-muted-foreground text-center">Mueve el cursor sobre esta área</p>
      </div>

      <motion.div
        style={{
          x: springX,
          y: springY,
          rotateX,
          rotateY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="absolute w-16 h-16 pointer-events-none"
      >
        <img src="/logo-64.png" alt="ADO CODE Logo" width={64} height={64} className="object-contain" />

        {/* Glow effect */}
        <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl -z-10"></div>
      </motion.div>

      {/* Custom cursor */}
      <motion.div
        style={{
          x: mousePosition.x - 5,
          y: mousePosition.y - 5,
        }}
        className="absolute w-2.5 h-2.5 bg-blue-500 rounded-full pointer-events-none"
      />
    </div>
  )
}
