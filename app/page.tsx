import Hero from "@/components/hero"
import Services from "@/components/services"
import Testimonials from "@/components/testimonials"
import CallToAction from "@/components/call-to-action"
import FeaturedProjects from "@/components/featured-projects"
import StatsSection from "@/components/stats-section"

export default function Home() {
  return (
    <main>
      <Hero />
      <StatsSection />
      <Services />
      <FeaturedProjects />
      <Testimonials />
      <CallToAction />
    </main>
  )
}
