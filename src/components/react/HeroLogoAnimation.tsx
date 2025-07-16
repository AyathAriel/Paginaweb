"use client"

import { motion, useAnimation } from "framer-motion"
import { useEffect, useState, useRef } from "react"

export default function HeroLogoAnimation() {
  const [mounted, setMounted] = useState(false)
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const [isInView, setIsInView] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()

  useEffect(() => {
    setMounted(true)
    const isDark = document.documentElement.classList.contains("dark")
    setTheme(isDark ? "dark" : "light")

    // Observe theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          const isDarkNow = document.documentElement.classList.contains("dark")
          setTheme(isDarkNow ? "dark" : "light")
        }
      })
    })

    observer.observe(document.documentElement, { attributes: true })

    // Intersection Observer for animation on scroll
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        setIsInView(entry.isIntersecting)

        if (entry.isIntersecting) {
          controls.start("visible")
        }
      },
      { threshold: 0.1 },
    )

    if (containerRef.current) {
      intersectionObserver.observe(containerRef.current)
    }

    return () => {
      observer.disconnect()
      intersectionObserver.disconnect()
    }
  }, [controls])

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  if (!mounted) return null

  return (
    <div className="relative w-full h-full" ref={containerRef}>
      {/* Radial gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-blue-500/10 to-transparent rounded-full"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.7, 0.9, 0.7],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      {/* Animated rings */}
      <motion.div
        className="absolute inset-4 border-2 border-blue-500/20 rounded-full"
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute inset-10 border border-blue-500/30 rounded-full"
        animate={{ rotate: -360 }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute inset-16 border border-blue-500/10 rounded-full"
        animate={{ rotate: 180 }}
        transition={{
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      {/* Central logo with animation */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              duration: 0.5,
              delayChildren: 0.3,
              staggerChildren: 0.2,
            },
          },
        }}
      >
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            type: "spring",
            stiffness: 100,
            damping: 10,
          }}
          className="relative"
        >
          <img
            src="/logo-256.png"
            alt="ADO CODE Technologies Logo"
            width={200}
            height={200}
            className="object-contain"
            loading="eager"
            decoding="sync"
          />

          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 bg-blue-500/10 rounded-full blur-xl"
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [0.9, 1.1, 0.9],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        </motion.div>
      </motion.div>

      {/* Floating tech elements */}
      <motion.div
        className="absolute top-10 right-20 w-16 h-16 glass-card rounded-xl flex items-center justify-center shadow-blue-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
              delay: 0.5,
            },
          },
        }}
        whileInView={{
          y: [0, -10, 0],
          rotate: [0, 5, 0],
          transition: {
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          },
        }}
        viewport={{ once: true }}
      >
        <div className="text-primary text-xs font-mono">AI</div>
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-10 w-20 h-20 glass-card rounded-xl flex items-center justify-center shadow-blue-sm"
        initial={{ opacity: 0, y: -20 }}
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
              delay: 0.7,
            },
          },
        }}
        whileInView={{
          y: [0, 10, 0],
          rotate: [0, -5, 0],
          transition: {
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          },
        }}
        viewport={{ once: true }}
      >
        <div className="text-primary text-xs font-mono">DATA</div>
      </motion.div>

      <motion.div
        className="absolute bottom-40 right-10 w-14 h-14 glass-card rounded-xl flex items-center justify-center shadow-blue-sm"
        initial={{ opacity: 0, x: -20 }}
        animate={controls}
        variants={{
          hidden: { opacity: 0, x: -20 },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.5,
              delay: 0.9,
            },
          },
        }}
        whileInView={{
          y: [0, -8, 0],
          x: [0, 5, 0],
          transition: {
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          },
        }}
        viewport={{ once: true }}
      >
        <div className="text-primary text-xs font-mono">API</div>
      </motion.div>

      {/* New floating elements */}
      <motion.div
        className="absolute top-40 left-10 w-12 h-12 glass-card rounded-xl flex items-center justify-center shadow-blue-sm"
        initial={{ opacity: 0, scale: 0 }}
        animate={controls}
        variants={{
          hidden: { opacity: 0, scale: 0 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              duration: 0.5,
              delay: 1.1,
            },
          },
        }}
        whileInView={{
          y: [0, 6, 0],
          x: [0, -3, 0],
          transition: {
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          },
        }}
        viewport={{ once: true }}
      >
        <div className="text-primary text-xs font-mono">UI</div>
      </motion.div>

      <motion.div
        className="absolute top-20 left-20 w-10 h-10 glass-card rounded-xl flex items-center justify-center shadow-blue-sm"
        initial={{ opacity: 0, scale: 0 }}
        animate={controls}
        variants={{
          hidden: { opacity: 0, scale: 0 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              duration: 0.5,
              delay: 1.3,
            },
          },
        }}
        whileInView={{
          y: [0, -5, 0],
          x: [0, 3, 0],
          transition: {
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          },
        }}
        viewport={{ once: true }}
      >
        <div className="text-primary text-xs font-mono">UX</div>
      </motion.div>
    </div>
  )
}
