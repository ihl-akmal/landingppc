import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Impact } from "@/components/impact"
import { Stories } from "@/components/stories"
import { Programs } from "@/components/programs"
import { Gallery } from "@/components/gallery"
import { Partners } from "@/components/partners"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Impact />
      <Programs />
      {/* <Stories /> */}
      <Gallery />
      {/* <Partners /> */}
      <CTA />
      <Footer />
    </main>
  )
}
