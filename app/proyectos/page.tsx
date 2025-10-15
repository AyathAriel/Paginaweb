import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight } from "lucide-react"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Aplicación para Juntas Comunales",
      description:
        "Sistema de gestión para juntas comunales que permite la recepción y aprobación de solicitudes ciudadanas de manera digital y eficiente.",
      image: "/Captura de pantalla 2025-10-14 185750.png",
      tags: ["Gestión Pública", "Digitalización", "Comunidad"],
      client: "Juntas Comunales de Panamá",
    },
    {
      title: "Plataforma de RRHH con IA",
      description:
        "Herramienta de recursos humanos que utiliza inteligencia artificial para optimizar la selección de personal y la gestión de talento.",
      image: "/Captura de pantalla 2025-10-14 185816.png",
      tags: ["Recursos Humanos", "IA", "Automatización"],
      client: "Empresas de Tecnología",
    },
    {
      title: "Aplicación de Gestión para Gimnasios",
      description:
        "Solución integral para la administración de gimnasios, incluyendo control de acceso, gestión de miembros, clases y control de pagos.",
      image: "/Captura de pantalla 2025-10-14 185836.png",
      tags: ["Fitness", "Gestión", "App Móvil"],
      client: "Cadenas de Gimnasios",
    },
    {
      title: "Aplicación para Salón de Belleza",
      description:
        "Software para la gestión de salones de belleza, que facilita la programación de citas, control de ingresos y servicios más populares.",
      image: "/Captura de pantalla 2025-10-14 185857.png",
      tags: ["Belleza", "Gestión de Citas", "Software"],
      client: "Salones de Belleza",
    },
    {
      title: "MercaliaPTY",
      description:
        "Plataforma de comercio electrónico que conecta a vendedores verificados con compradores en Panamá, garantizando seguridad y confianza.",
      image: "/Captura de pantalla 2025-10-14 190018.png",
      tags: ["E-commerce", "Marketplace", "Seguridad"],
      client: "MercaliaPTY",
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
