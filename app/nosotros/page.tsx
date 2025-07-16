import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Ana Rodríguez",
      position: "CEO & Fundadora",
      bio: "Experta en desarrollo de software y estrategias de transformación digital",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Carlos Méndez",
      position: "CTO",
      bio: "Especialista en inteligencia artificial y arquitectura de sistemas",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "María González",
      position: "Directora de Proyectos",
      bio: "10+ años de experiencia en gestión de proyectos tecnológicos",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Juan Pérez",
      position: "Lead Developer",
      bio: "Experto en desarrollo full-stack y automatización de procesos",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <main>
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">Quiénes Somos</h1>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  En ADO CODE Technologies, somos un equipo de expertos apasionados por la tecnología y la innovación.
                  Nos especializamos en ofrecer soluciones tecnológicas avanzadas que ayudan a las empresas a optimizar
                  sus procesos, aumentar su eficiencia y mantenerse competitivas en la era digital.
                </p>
                <p>
                  Fundada con la visión de transformar la forma en que las empresas utilizan la tecnología, hemos
                  desarrollado un enfoque único que combina la automatización inteligente, la inteligencia artificial y
                  el desarrollo de software a medida para crear soluciones que realmente marcan la diferencia.
                </p>
              </div>
            </div>
            <div className="relative mx-auto aspect-video lg:aspect-square max-w-md lg:max-w-none overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Equipo de ADO CODE Technologies"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Nuestra Misión y Visión</h2>
            <p className="max-w-[800px] text-muted-foreground md:text-lg">
              Impulsando la transformación digital de las empresas a través de la innovación
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Misión</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Nuestra misión es ayudar a las empresas a aprovechar el potencial de las tecnologías emergentes para
                  optimizar sus operaciones, mejorar la toma de decisiones y generar valor a través de soluciones
                  innovadoras y personalizadas.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Visión</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Aspiramos a ser líderes en la transformación digital empresarial, reconocidos por nuestra capacidad
                  para desarrollar soluciones tecnológicas de vanguardia que generen un impacto significativo en el
                  crecimiento y éxito de nuestros clientes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Nuestro Equipo</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-lg">
              Un grupo de expertos comprometidos con la excelencia y la innovación
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-square relative">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle>{member.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium text-primary mb-2">{member.position}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
