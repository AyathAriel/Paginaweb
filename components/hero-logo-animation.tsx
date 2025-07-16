"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

export default function HeroLogoAnimation() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative w-full h-full">
      {/* Fondo con gradiente radial */}
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

      {/* Anillos animados */}
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

      {/* Logo central con animación */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 1,
          scale: 1,
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
      >
        <Image
          src="/logo-256.png"
          alt="ADO CODE Technologies Logo"
          width={200}
          height={200}
          className="object-contain"
          priority
        />

        {/* Efecto de brillo */}
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

      {/* Elementos tecnológicos flotantes */}
      <motion.div
        className="absolute top-10 right-20 w-16 h-16 glass-card rounded-xl flex items-center justify-center shadow-blue-sm"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <div className="text-primary text-xs font-mono">AI</div>
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-10 w-20 h-20 glass-card rounded-xl flex items-center justify-center shadow-blue-sm"
        animate={{
          y: [0, 10, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <div className="text-primary text-xs font-mono">DATA</div>
      </motion.div>

      <motion.div
        className="absolute bottom-40 right-10 w-14 h-14 glass-card rounded-xl flex items-center justify-center shadow-blue-sm"
        animate={{
          y: [0, -8, 0],
          x: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <div className="text-primary text-xs font-mono">API</div>
      </motion.div>
    </div>
  )
}
