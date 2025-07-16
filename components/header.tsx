"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { ModeToggle } from "./mode-toggle"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import AnimatedLogo from "./animated-logo"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "glass-effect shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container flex h-20 md:h-24 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <AnimatedLogo size="md" withText={true} />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {["Inicio", "Servicios", "Quiénes Somos", "Proyectos", "Contacto"].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
            >
              <Link
                href={item === "Inicio" ? "/" : `/${item.toLowerCase().replace(" ", "-").replace("é", "e")}`}
                className="text-sm font-medium transition-colors hover:text-primary relative group"
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <Button size="sm" className="hidden md:flex rounded-full bg-gradient-blue shadow-blue-sm" asChild>
              <Link href="/contacto">Solicita una consulta</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <ModeToggle />
          </motion.div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon" className="rounded-full w-9 h-9">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="glass-effect">
              <div className="flex items-center gap-2 mt-4 mb-8">
                <AnimatedLogo size="sm" />
                <span className="font-display font-bold text-lg">ADO CODE</span>
              </div>
              <nav className="flex flex-col gap-6">
                <Link
                  href="/"
                  className="text-lg font-medium transition-colors hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Inicio
                </Link>
                <Link
                  href="/servicios"
                  className="text-lg font-medium transition-colors hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Servicios
                </Link>
                <Link
                  href="/nosotros"
                  className="text-lg font-medium transition-colors hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Quiénes Somos
                </Link>
                <Link
                  href="/proyectos"
                  className="text-lg font-medium transition-colors hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Proyectos
                </Link>
                <Link
                  href="/contacto"
                  className="text-lg font-medium transition-colors hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Contacto
                </Link>
                <Button
                  onClick={() => setIsOpen(false)}
                  className="mt-4 rounded-full bg-gradient-blue shadow-blue-sm"
                  asChild
                >
                  <Link href="/contacto">Solicita una consulta</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
