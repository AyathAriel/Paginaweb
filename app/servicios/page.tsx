import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Code, LineChart, Lightbulb, Settings, Terminal, Zap } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
      title: "Automatización Inteligente",
      description:
        "Acelera tus procesos empresariales con IA y elimina tareas manuales para aumentar la productividad.",
      features: [
        "Automatización de procesos de negocio (BPA)",
        "Automatización robótica de procesos (RPA)",
        "Integración de sistemas",
        "Flujos de trabajo inteligentes",
      ],
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Desarrollo de Software a Medida",
      description:
        "Soluciones tecnológicas que se adaptan a tus necesidades específicas, desde aplicaciones web hasta sistemas empresariales.",
      features: [
        "Aplicaciones web y móviles",
        "Sistemas de gestión empresarial",
        "Plataformas de comercio electrónico",
        "Aplicaciones SaaS",
      ],
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      icon: <LineChart className="h-10 w-10 text-primary" />,
      title: "Optimización de Procesos",
      description:
        "Mejora la productividad y reduce costos mediante la implementación de tecnologías avanzadas en tus procesos de negocio.",
      features: [
        "Análisis y rediseño de procesos",
        "Implementación de sistemas de gestión",
        "Métricas y KPIs para seguimiento",
        "Mejora continua",
      ],
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      icon: <Brain className="h-10 w-10 text-primary" />,
      title: "Consultoría en IA y Big Data",
      description:
        "Transforma tu negocio con datos inteligentes y estrategias de implementación de tecnologías emergentes.",
      features: [
        "Estrategias de IA y ciencia de datos",
        "Implementación de soluciones de Big Data",
        "Análisis predictivo y prescriptivo",
        "Machine Learning y Deep Learning",
      ],
      image: "/placeholder.svg?height=300&width=500",
    },
  ]

  const additionalServices = [
    {
      icon: <Terminal className="h-6 w-6" />,
      title: "DevOps y CI/CD",
      description: "Implementación de prácticas de integración y entrega continua",
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Mantenimiento y Soporte",
      description: "Servicios de soporte técnico y mantenimiento de sistemas",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Migración a la Nube",
      description: "Traslado de infraestructura y aplicaciones a entornos cloud",
    },
  ]

  return (
    <main>
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-10">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nuestros Servicios</h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Soluciones tecnológicas avanzadas para transformar tu empresa
            </p>
          </div>
        </div>
      </section>

      {services.map((service, index) => (
        <section key={index} className={`py-20 ${index % 2 !== 0 ? "bg-muted/30" : ""}`}>
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className={index % 2 !== 0 ? "order-2" : ""}>
                <div className="inline-block mb-6">{service.icon}</div>
                <h2 className="text-3xl font-bold tracking-tighter mb-4">{service.title}</h2>
                <p className="text-muted-foreground md:text-lg mb-6">{service.description}</p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="rounded-full bg-primary/10 p-1">
                        <svg
                          className="h-3 w-3 text-primary"
                          fill="none"
                          height="24"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button asChild>
                  <Link href="/contacto">Solicitar información</Link>
                </Button>
              </div>

              <div className={`relative aspect-video overflow-hidden rounded-lg ${index % 2 !== 0 ? "order-1" : ""}`}>
                <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Servicios Adicionales</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-lg">
              Complementamos nuestras soluciones principales con estos servicios
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {additionalServices.map((service, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="mb-2 bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary">
                    {service.icon}
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
