import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

// Importar el componente Logo
import AnimatedLogo from "./animated-logo"

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 pt-16 pb-8 border-t">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <AnimatedLogo size="sm" />
              <span className="font-display font-bold text-lg">
                ADO CODE
                <span className="text-muted-foreground font-normal text-xs block -mt-1">Technologies</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-[250px]">
              Transformamos empresas con soluciones tecnológicas avanzadas e innovadoras.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Enlaces rápidos</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-muted-foreground hover:text-primary transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="text-muted-foreground hover:text-primary transition-colors">
                  Quiénes Somos
                </Link>
              </li>
              <li>
                <Link href="/proyectos" className="text-muted-foreground hover:text-primary transition-colors">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-muted-foreground hover:text-primary transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-primary" />
                <span className="text-muted-foreground">+507 6644-8655</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-primary" />
                <a
                  href="mailto:ayath@adocodetech.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  ayath@adocodetech.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary" />
                <span className="text-muted-foreground">Ciudad de Panamá, Panamá</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} ADO CODE Technologies. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
