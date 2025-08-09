"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  // Información del CEO
  const ceoInfo = {
    name: "AYATH MEDINA",
    position: "CEO & Fundador",
    company: "ADO CODE Technologies",
    bio: "Líder visionario con más de 7 años de experiencia en el desarrollo de soluciones tecnológicas innovadoras. Especializado en transformación digital empresarial y automatización inteligente, ha dirigido múltiples proyectos exitosos que han revolucionado la forma en que las empresas operan en la era digital.",
    image: "/fotoceo.jpeg", // Foto real del CEO AYATH MEDINA
    experience: "7 años de experiencia",
    specialties: ["Transformación Digital", "Liderazgo Empresarial", "Innovación Tecnológica"],
    education: "Ingeniería en Sistemas y Especialización en Inteligencia Artificial",
    achievements: [
      "Fundador y CEO de ADO CODE Technologies",
      "Más de 100 proyectos de transformación digital completados exitosamente",
      "Reconocido como líder innovador en tecnología empresarial en Panamá"
    ],
    contact: {
      email: "ayath@adocode.com",
      linkedin: "https://www.linkedin.com/in/ayath-medina-84ba16328/",
      phone: "+507 66448655"
    }
  }

  const teamMembers = [
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
            <motion.div 
              className="relative mx-auto max-w-md lg:max-w-none"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
            >
              <div className="relative flex justify-center items-center min-h-[400px] overflow-hidden">
                {/* Partículas animadas de fondo */}
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-blue-500/30 rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -30, 0],
                      x: [0, Math.random() * 20 - 10, 0],
                      opacity: [0.3, 0.8, 0.3],
                      scale: [1, 1.5, 1],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                      ease: "easeInOut",
                    }}
                  />
                ))}
                
                {/* Partículas más grandes */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={`large-${i}`}
                    className="absolute w-2 h-2 bg-blue-400/20 rounded-full blur-sm"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -50, 0],
                      x: [0, Math.random() * 30 - 15, 0],
                      opacity: [0.2, 0.6, 0.2],
                    }}
                    transition={{
                      duration: 4 + Math.random() * 3,
                      repeat: Infinity,
                      delay: Math.random() * 3,
                      ease: "easeInOut",
                    }}
                  />
                ))}
                
                {/* Logo principal minimalista */}
                <motion.div 
                  className="relative z-10 flex justify-center items-center"
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="relative">
                    <motion.div
                      initial={{ rotateY: 0 }}
                      whileHover={{ rotateY: 180 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <Image
                        src="/concept2_top_right_BLACK_transparent.png"
                        alt="Company Logo"
                        width={280}
                        height={280}
                        className="object-contain filter drop-shadow-lg"
                        priority
                      />
                    </motion.div>
                    
                    {/* Efecto de resplandor sutil al hacer hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-radial from-blue-500/10 via-transparent to-transparent rounded-full"
                      animate={{
                        opacity: [0, 0.3, 0],
                        scale: [0.8, 1.2, 0.8],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </div>
                </motion.div>
                
                {/* Líneas decorativas minimalistas */}
                <motion.div
                  className="absolute top-1/2 left-0 w-12 h-px bg-gradient-to-r from-transparent to-blue-500/30"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
                <motion.div
                  className="absolute top-1/2 right-0 w-12 h-px bg-gradient-to-l from-transparent to-blue-500/30"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                />
              </div>
            </motion.div>
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

      {/* Sección del CEO */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/30 dark:to-indigo-900/20">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">Liderazgo</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Conoce al visionario detrás de ADO CODE Technologies
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <Card className="overflow-hidden shadow-2xl border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Imagen del CEO */}
                <div className="relative h-[500px] lg:h-[700px]">
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `url(${ceoInfo.image})`,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </div>
                  
                  {/* Elementos decorativos */}
                  <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"></div>
                  <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl"></div>
                </div>

                {/* Información del CEO */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl font-bold mb-2">{ceoInfo.name}</h3>
                      <p className="text-xl text-primary font-semibold mb-1">{ceoInfo.position}</p>
                      <p className="text-lg text-muted-foreground">{ceoInfo.company}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {ceoInfo.specialties.map((specialty, index) => (
                        <Badge key={index} variant="secondary" className="text-sm">
                          {specialty}
                        </Badge>
                      ))}
                    </div>

                    <div className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {ceoInfo.bio}
                      </p>

                      <div className="grid gap-3">
                        <div>
                          <h4 className="font-semibold mb-2">Experiencia</h4>
                          <p className="text-muted-foreground">{ceoInfo.experience}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2">Educación</h4>
                          <p className="text-muted-foreground">{ceoInfo.education}</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Logros Destacados</h4>
                        <ul className="space-y-2">
                          {ceoInfo.achievements.map((achievement, index) => (
                            <li key={index} className="flex items-start">
                              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                              <span className="text-muted-foreground">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Contacto del CEO */}
                    <div className="flex flex-wrap gap-3 pt-4 border-t">
                      <Button variant="outline" size="sm" asChild>
                        <a href={`mailto:${ceoInfo.contact.email}`} className="flex items-center gap-2">
                          <Mail className="h-4 w-4" />
                          Contactar
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href={ceoInfo.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          <ExternalLink className="h-4 w-4" />
                          LinkedIn
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href={`tel:${ceoInfo.contact.phone}`} className="flex items-center gap-2">
                          <Phone className="h-4 w-4" />
                          Llamar
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
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
