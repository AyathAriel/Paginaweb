import type React from "react"
import { Inter, Outfit, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
// Importar el componente LogoPreload
import LogoPreload from "@/components/logo-preload"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

export const metadata = {
  title: "ADO CODE Technologies | Soluciones Tecnológicas Avanzadas",
  description:
    "Transformamos empresas con soluciones tecnológicas avanzadas. Automatización inteligente, desarrollo de software a medida y optimización de procesos empresariales.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <LogoPreload />
      </head>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          <div className="flex-1 flex flex-col">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
