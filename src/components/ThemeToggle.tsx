"use client"

import { useState, useEffect } from "react"

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    if (import.meta.env.SSR) {
      return undefined
    }
    return document.documentElement.classList.contains("dark") ? "dark" : "light"
  })

  useEffect(() => {
    const root = document.documentElement
    if (theme === "dark") {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
    localStorage.setItem("theme", theme || "light")
  }, [theme])

  return (
    <button
      aria-label={`Cambiar a modo ${theme === "dark" ? "claro" : "oscuro"}`}
      className="rounded-full w-9 h-9 flex items-center justify-center border border-input bg-background"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {/* Icono de sol para modo claro */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all ${
          theme === "dark" ? "-rotate-90 scale-0" : ""
        }`}
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

      {/* Icono de luna para modo oscuro */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all ${
          theme === "dark" ? "rotate-0 scale-100" : ""
        }`}
      >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
      </svg>
    </button>
  )
}
