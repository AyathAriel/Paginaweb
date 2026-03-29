import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <main>
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-10">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contacto</h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Estamos aquí para responder tus preguntas y ayudarte a transformar tu empresa
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 md:px-6 max-w-2xl mx-auto">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Información de contacto</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium">Teléfono</h3>
                    <p className="text-muted-foreground">+507 6644-8655</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium">Correo electrónico</h3>
                    <a href="mailto:ayath@adocodetech.com" className="text-muted-foreground hover:text-primary transition-colors">
                      ayath@adocodetech.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium">Dirección</h3>
                    <p className="text-muted-foreground">Ciudad de Panamá, Panamá</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Horario de atención</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Lunes - Viernes:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábado:</span>
                  <span>10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingo:</span>
                  <span>Cerrado</span>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>¿Listo para empezar?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Contáctanos directamente por WhatsApp o escríbenos al correo. Te respondemos a la brevedad.
                </p>
                <Button className="w-full" asChild>
                  <a href="https://wa.me/50766448655" target="_blank" rel="noopener noreferrer">
                    Escribir por WhatsApp
                  </a>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <a href="mailto:ayath@adocodetech.com">
                    Enviar correo electrónico
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
