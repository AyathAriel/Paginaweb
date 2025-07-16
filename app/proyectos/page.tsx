import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight } from "lucide-react"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Sistema de gestión empresarial",
      description:
        "Implementación de un sistema personalizado para la gestión integral de procesos empresariales, incluyendo módulos de ventas, inventario, recursos humanos y finanzas.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Automatización", "IA", "Nube"],
      client: "Empresa Manufacturera",
    },
    {
      title: "Plataforma de análisis de datos",
      description:
        "Desarrollo de una plataforma que permite visualizar y analizar grandes volúmenes de datos en tiempo real, facilitando la toma de decisiones estratégicas.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Big Data", "Visualización", "Análisis predictivo"],
      client: "Empresa de Retail",
    },
    {
      title: "Integración de sistemas legacy",
      description:
        "Modernización e integración de sistemas antiguos con nuevas tecnologías para mejorar el rendimiento y facilitar la transición a una infraestructura más moderna.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Integración", "Optimización", "Migración"],
      client: "Institución Financiera",
    },
    {
      title: "Aplicación móvil para servicio al cliente",
      description:
        "Desarrollo de una aplicación móvil que permite a los clientes realizar consultas, solicitar servicios y hacer seguimiento de sus pedidos de forma fácil y rápida.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["App Móvil", "UX/UI", "Servicio al Cliente"],
      client: "Empresa de Servicios",
    },
    {
      title: "Dashboard de inteligencia de negocios",
      description:
        "Implementación de un dashboard interactivo que muestra los KPIs más importantes del negocio, con visualizaciones claras y acceso a datos históricos.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Business Intelligence", "Dashboard", "KPIs"],
      client: "Corporación Multinacional",
    },
    {
      title: "Automatización de procesos de marketing",
      description:
        "Desarrollo de un sistema que automatiza campañas de marketing digital, segmentación de clientes y análisis de resultados.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Marketing", "Automatización", "CRM"],
      client: "Agencia de Marketing",
    },
  ]

  return (
    <main>
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-10">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nuestros Proyectos</h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Conoce cómo hemos ayudado a transformar empresas a través de la tecnología
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card key={index} className="h-full overflow-hidden">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>Cliente: {project.client}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="gap-1" asChild>
                    <Link href={`/proyectos/${index + 1}`}>
                      Ver detalles
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-6">
            ¿Listo para comenzar tu propio proyecto?
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg mb-8">
            Contáctanos hoy y conversemos sobre cómo podemos ayudarte a transformar tu empresa con nuestras soluciones
            tecnológicas.
          </p>
          <Button size="lg" asChild>
            <Link href="/contacto">Solicita una consulta</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
