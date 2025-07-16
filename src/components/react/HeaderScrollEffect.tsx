"use client"

import type React from "react"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useEffect, useState } from "react"

interface HeaderScrollEffectProps {
  children: React.ReactNode
}

export default function HeaderScrollEffect({ children }: HeaderScrollEffectProps) {
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
  const headerBackground = useTransform(smoothScrollY, [0, 50], ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.8)"])

  const headerBackgroundDark = useTransform(smoothScrollY, [0, 50], ["rgba(15, 23, 42, 0)", "rgba(15, 23, 42, 0.8)"])

  const headerShadow = useTransform(smoothScrollY, [0, 50], ["0 0 0 rgba(0, 0, 0, 0)", "0 4px 20px rgba(0, 0, 0, 0.1)"])

  const headerHeight = useTransform(smoothScrollY, [0, 100], ["6rem", "4.5rem"])

  const logoScale = useTransform(smoothScrollY, [0, 100], [1, 0.9])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return <>{children}</>

  return (
    <motion.div
      style={{
        backgroundColor: headerBackground,
        boxShadow: headerShadow,
        height: headerHeight,
        backdropFilter: "blur(8px)",
      }}
      className="sticky top-0 z-50 w-full transition-colors duration-300 dark:bg-opacity-80"
      data-header-scroll
    >
      <style>{`
        [data-header-scroll] {
          transition: background-color 0.3s ease, box-shadow 0.3s ease, height 0.3s ease;
        }
        
        .dark [data-header-scroll] {
          background-color: ${headerBackgroundDark.get()};
        }
        
        @media (prefers-color-scheme: dark) {
          :root:not(.light) [data-header-scroll] {
            background-color: ${headerBackgroundDark.get()};
          }
        }
      `}</style>

      <motion.div style={{ scale: logoScale }} className="h-full">
        {children}
      </motion.div>
    </motion.div>
  )
}
