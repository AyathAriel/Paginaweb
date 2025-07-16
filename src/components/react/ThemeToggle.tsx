"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark" | undefined>(undefined)

  useEffect(() => {
    // Initialize theme from localStorage or system preference
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    setTheme(savedTheme ? (savedTheme === "dark" ? "dark" : "light") : prefersDark ? "dark" : "light")
  }, [])

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.toggle("dark", theme === "dark")
      localStorage.setItem("theme", theme)
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"))
  }

  if (theme === undefined) return null

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="rounded-full w-9 h-9 flex items-center justify-center border border-input bg-background relative overflow-hidden"
      aria-label={`Cambiar a modo ${theme === "dark" ? "claro" : "oscuro"}`}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === "dark" ? 45 : 0,
          opacity: theme === "dark" ? 0 : 1,
          y: theme === "dark" ? -30 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="4"></circle>
          <path d="M12 2v2"></path>
          <path d="M12 20v2"></path>
          <path d="m4.93 4.93 1.41 1.41"></path>
          <path d="m17.66 17.66 1.41 1.41"></path>
          <path d="M2 12h2"></path>
          <path d="M20 12h2"></path>
          <path d="m6.34 17.66-1.41 1.41"></path>
          <path d="m19.07 4.93-1.41 1.41"></path>
        </svg>
      </motion.div>

      <motion.div
        initial={false}
        animate={{
          rotate: theme === "light" ? -45 : 0,
          opacity: theme === "light" ? 0 : 1,
          y: theme === "light" ? 30 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
        </svg>
      </motion.div>
    </motion.button>
  )
}
