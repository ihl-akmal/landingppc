import { Navigation } from "@/components/navigation"
import { ProgramHero } from "@/components/program-detail/hero"
import { Background } from "@/components/program-detail/background"
import { Benefits } from "@/components/program-detail/benefits"
import { Gallery } from "@/components/program-detail/gallery"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { getProgramBySlug, programsData } from "@/lib/program-data"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  return programsData.map((program) => ({
    slug: program.slug,
  }))
}

export default function ProgramDetailPage({ params }: { params: { slug: string } }) {
  const program = getProgramBySlug(params.slug)

  if (!program) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      <ProgramHero title={program.title} description={program.heroDescription} />
      <Background title={program.backgroundTitle} content={program.backgroundContent} />
      <Benefits benefits={program.benefits} />
      <Gallery images={program.galleryImages} />
      <CTA />
      <Footer />
    </main>
  )
}
