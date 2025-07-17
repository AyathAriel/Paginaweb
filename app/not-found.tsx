import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, ArrowLeft, Mail } from "lucide-react"

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/30 dark:to-indigo-900/20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold text-primary">404</h1>
            <h2 className="text-2xl md:text-3xl font-bold">Página no encontrada</h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Lo sentimos, la página que buscas no existe o ha sido movida.
            </p>
          </div>

          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle className="text-center">¿Qué puedes hacer?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button asChild className="w-full">
                <Link href="/" className="flex items-center justify-center gap-2">
                  <Home className="h-4 w-4" />
                  Ir al inicio
                </Link>
              </Button>
              
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" asChild>
                  <Link href="/nosotros" className="text-sm">
                    Nosotros
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/servicios" className="text-sm">
                    Servicios
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/proyectos" className="text-sm">
                    Proyectos
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/contacto" className="text-sm">
                    Contacto
                  </Link>
                </Button>
              </div>

              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground mb-2">
                  ¿Necesitas ayuda?
                </p>
                <Button variant="ghost" size="sm" asChild className="w-full">
                  <Link href="/contacto" className="flex items-center justify-center gap-2">
                    <Mail className="h-4 w-4" />
                    Contáctanos
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}