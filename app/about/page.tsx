import Hero from "@/components/about-page/hero"
import History from "@/components/about-page/history"
import LegalStructure from "@/components/about-page/legal-structure"
import VisionMission from "@/components/about-page/vision-mission"
import Values from "@/components/about-page/values"
import Team from "@/components/about-page/team"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <History />
      <LegalStructure />
      <VisionMission />
      <Values />
      <Team />
      <Footer />
    </main>
  )
}
