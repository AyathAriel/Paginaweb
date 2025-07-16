"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

interface AnimatedLogoProps {
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
  containerClassName?: string
  withText?: boolean
}

export default function AnimatedLogo({
  size = "md",
  className = "",
  containerClassName = "",
  withText = false,
}: AnimatedLogoProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Definir dimensiones según el tamaño
  const dimensions = {
    sm: { width: 32, height: 32, logoSize: 32 },
    md: { width: 64, height: 64, logoSize: 64 },
    lg: { width: 128, height: 128, logoSize: 128 },
    xl: { width: 256, height: 256, logoSize: 256 },
  }

  const { width, height, logoSize } = dimensions[size]

  // Determinar qué imagen usar según el tamaño
  const logoSrc =
    size === "sm" ? "/logo-64.png" : size === "md" ? "/logo-64.png" : size === "lg" ? "/logo-128.png" : "/logo-256.png"

  return (
    <div
      className={`relative flex items-center ${containerClassName}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 1,
          scale: 1,
          rotate: isHovered ? [0, -5, 5, -5, 0] : 0,
          y: isHovered ? [0, -5, 0] : 0,
        }}
        transition={{
          duration: isHovered ? 0.5 : 0.3,
          type: "spring",
          stiffness: 200,
          damping: 10,
        }}
        className={`relative ${className}`}
        style={{ width: logoSize, height: logoSize }}
      >
        <Image
          src={logoSrc || "/placeholder.svg"}
          alt="ADO CODE Technologies Logo"
          width={logoSize}
          height={logoSize}
          className="object-contain"
          priority={size === "xl" || size === "lg"}
        />

        {/* Efecto de brillo al pasar el cursor */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </motion.div>

      {withText && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{
            opacity: 1,
            x: 0,
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.1,
            type: "spring",
            stiffness: 200,
          }}
          className="ml-3"
        >
          <span className="font-display font-bold text-xl">
            ADO CODE
            <span className="text-muted-foreground font-normal text-sm block -mt-1">Technologies</span>
          </span>
        </motion.div>
      )}
    </div>
  )
}
