"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useRef, useState, useEffect } from "react"

interface ColorChangingLogoProps {
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
  withText?: boolean
  colorScheme?: "default" | "rainbow" | "brand" | "sunset"
}

export default function ColorChangingLogo({
  size = "md",
  className = "",
  withText = false,
  colorScheme = "default",
}: ColorChangingLogoProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false)

  // Get scroll progress for the entire page
  const { scrollYProgress } = useScroll()

  // Create a smoother scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // Define color schemes
  const colorSchemes = {
    default: {
      primary: useTransform(
        smoothProgress,
        [0, 0.25, 0.5, 0.75, 1],
        [
          "hsl(214, 100%, 50%)", // Blue
          "hsl(214, 100%, 60%)", // Lighter blue
          "hsl(214, 100%, 50%)", // Blue
          "hsl(214, 100%, 40%)", // Darker blue
          "hsl(214, 100%, 50%)", // Blue
        ],
      ),
      secondary: useTransform(
        smoothProgress,
        [0, 0.25, 0.5, 0.75, 1],
        ["hsl(214, 80%, 70%)", "hsl(214, 80%, 80%)", "hsl(214, 80%, 70%)", "hsl(214, 80%, 60%)", "hsl(214, 80%, 70%)"],
      ),
      tertiary: useTransform(
        smoothProgress,
        [0, 0.25, 0.5, 0.75, 1],
        ["hsl(214, 60%, 85%)", "hsl(214, 60%, 90%)", "hsl(214, 60%, 85%)", "hsl(214, 60%, 80%)", "hsl(214, 60%, 85%)"],
      ),
    },
    rainbow: {
      primary: useTransform(
        smoothProgress,
        [0, 0.2, 0.4, 0.6, 0.8, 1],
        [
          "hsl(0, 100%, 50%)", // Red
          "hsl(60, 100%, 50%)", // Yellow
          "hsl(120, 100%, 50%)", // Green
          "hsl(180, 100%, 50%)", // Cyan
          "hsl(240, 100%, 50%)", // Blue
          "hsl(300, 100%, 50%)", // Magenta
        ],
      ),
      secondary: useTransform(
        smoothProgress,
        [0, 0.2, 0.4, 0.6, 0.8, 1],
        [
          "hsl(0, 80%, 70%)",
          "hsl(60, 80%, 70%)",
          "hsl(120, 80%, 70%)",
          "hsl(180, 80%, 70%)",
          "hsl(240, 80%, 70%)",
          "hsl(300, 80%, 70%)",
        ],
      ),
      tertiary: useTransform(
        smoothProgress,
        [0, 0.2, 0.4, 0.6, 0.8, 1],
        [
          "hsl(0, 60%, 85%)",
          "hsl(60, 60%, 85%)",
          "hsl(120, 60%, 85%)",
          "hsl(180, 60%, 85%)",
          "hsl(240, 60%, 85%)",
          "hsl(300, 60%, 85%)",
        ],
      ),
    },
    brand: {
      primary: useTransform(
        smoothProgress,
        [0, 0.33, 0.66, 1],
        [
          "hsl(214, 100%, 50%)", // Blue
          "hsl(262, 100%, 50%)", // Purple
          "hsl(329, 100%, 50%)", // Pink
          "hsl(214, 100%, 50%)", // Blue
        ],
      ),
      secondary: useTransform(
        smoothProgress,
        [0, 0.33, 0.66, 1],
        ["hsl(214, 80%, 70%)", "hsl(262, 80%, 70%)", "hsl(329, 80%, 70%)", "hsl(214, 80%, 70%)"],
      ),
      tertiary: useTransform(
        smoothProgress,
        [0, 0.33, 0.66, 1],
        ["hsl(214, 60%, 85%)", "hsl(262, 60%, 85%)", "hsl(329, 60%, 85%)", "hsl(214, 60%, 85%)"],
      ),
    },
    sunset: {
      primary: useTransform(
        smoothProgress,
        [0, 0.25, 0.5, 0.75, 1],
        [
          "hsl(35, 100%, 50%)", // Orange
          "hsl(15, 100%, 50%)", // Red-Orange
          "hsl(350, 100%, 50%)", // Red
          "hsl(320, 100%, 50%)", // Magenta
          "hsl(280, 100%, 50%)", // Purple
        ],
      ),
      secondary: useTransform(
        smoothProgress,
        [0, 0.25, 0.5, 0.75, 1],
        ["hsl(35, 80%, 70%)", "hsl(15, 80%, 70%)", "hsl(350, 80%, 70%)", "hsl(320, 80%, 70%)", "hsl(280, 80%, 70%)"],
      ),
      tertiary: useTransform(
        smoothProgress,
        [0, 0.25, 0.5, 0.75, 1],
        ["hsl(35, 60%, 85%)", "hsl(15, 60%, 85%)", "hsl(350, 60%, 85%)", "hsl(320, 60%, 85%)", "hsl(280, 60%, 85%)"],
      ),
    },
  }

  // Select the active color scheme
  const activeColors = colorSchemes[colorScheme]

  // Define dimensions based on size
  const dimensions = {
    sm: { width: 32, height: 32, logoSize: 32 },
    md: { width: 64, height: 64, logoSize: 64 },
    lg: { width: 128, height: 128, logoSize: 128 },
    xl: { width: 256, height: 256, logoSize: 256 },
  }

  const { width, height, logoSize } = dimensions[size]

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <div ref={ref} className={`relative ${className}`} style={{ width: logoSize, height: logoSize }}>
      <svg width={logoSize} height={logoSize} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Círculo exterior */}
        <motion.circle cx="256" cy="256" r="240" style={{ fill: activeColors.tertiary, fillOpacity: 0.1 }} />

        {/* Anillo exterior */}
        <motion.circle
          cx="256"
          cy="256"
          r="220"
          style={{ stroke: activeColors.primary, strokeOpacity: 0.8 }}
          strokeWidth="8"
        />

        {/* Anillo medio */}
        <motion.circle
          cx="256"
          cy="256"
          r="180"
          style={{ stroke: activeColors.primary, strokeOpacity: 0.6 }}
          strokeWidth="6"
        />

        {/* Anillo interior */}
        <motion.circle
          cx="256"
          cy="256"
          r="140"
          style={{ stroke: activeColors.primary, strokeOpacity: 0.4 }}
          strokeWidth="4"
        />

        {/* Letra A */}
        <motion.path
          d="M200 180L240 320H220L210 290H170L160 320H140L180 180H200ZM190 200L175 270H205L190 200Z"
          style={{ fill: activeColors.primary }}
        />

        {/* Letra D */}
        <motion.path
          d="M260 180H300C320 180 335 185 345 195C355 205 360 220 360 240C360 260 355 275 345 285C335 295 320 300 300 300H260V180ZM280 200V280H300C313.333 280 323.333 276.667 330 270C336.667 263.333 340 253.333 340 240C340 226.667 336.667 216.667 330 210C323.333 203.333 313.333 200 300 200H280Z"
          style={{ fill: activeColors.primary }}
        />

        {/* Letra O */}
        <motion.path
          d="M380 240C380 226.667 383.333 216.667 390 210C396.667 203.333 406.667 200 420 200C433.333 200 443.333 203.333 450 210C456.667 216.667 460 226.667 460 240C460 253.333 456.667 263.333 450 270C443.333 276.667 433.333 280 420 280C406.667 280 396.667 276.667 390 270C383.333 263.333 380 253.333 380 240ZM400 240C400 248 401.667 254 405 258C408.333 262 413.333 264 420 264C426.667 264 431.667 262 435 258C438.333 254 440 248 440 240C440 232 438.333 226 435 222C431.667 218 426.667 216 420 216C413.333 216 408.333 218 405 222C401.667 226 400 232 400 240Z"
          style={{ fill: activeColors.primary }}
        />

        {/* Línea de código debajo */}
        <motion.path
          d="M160 340H352"
          style={{ stroke: activeColors.secondary }}
          strokeWidth="8"
          strokeLinecap="round"
        />
        <motion.path
          d="M160 360H288"
          style={{ stroke: activeColors.secondary }}
          strokeWidth="8"
          strokeLinecap="round"
        />
        <motion.path
          d="M160 380H320"
          style={{ stroke: activeColors.secondary }}
          strokeWidth="8"
          strokeLinecap="round"
        />
      </svg>

      {withText && (
        <motion.div className="mt-2 text-center">
          <span className="font-display font-bold text-xl">
            <motion.span style={{ color: activeColors.primary }}>ADO CODE</motion.span>
            <span className="text-muted-foreground font-normal text-sm block -mt-1">Technologies</span>
          </span>
        </motion.div>
      )}
    </div>
  )
}
