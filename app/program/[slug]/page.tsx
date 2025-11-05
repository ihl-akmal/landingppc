import { Navigation } from "@/components/navigation"
import { ProgramHero } from "@/components/program-detail/hero"
import { Background } from "@/components/program-detail/background"
import { Activity } from "@/components/program-detail/activity"
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

//tambahkan fungsi metadata dinamis
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const program = getProgramBySlug(params.slug)

  if (!program) {
    return {
      title: "Program tidak ditemukan",
      description: "Program yang diminta tidak tersedia.",
    }
  }

  return {
    title: `${program.title} | Papua Paradise Center`,
    description: program.shortDescription ?? program.heroDescription?.slice(0, 160) ?? "Deskripsi program.",
  }
}


export default async function ProgramDetailPage({ params }: { params: { slug: string } }) {
  const program = getProgramBySlug(params.slug)

  if (!program) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      <ProgramHero
        title={program.title}
        category={program.category}
        description={program.heroDescription}
        backgroundImage={program.heroImage}
      />
      <Background title={program.backgroundTitle} content={program.backgroundContent} />
      <Activity title={program.activityTitle} description={program.activityDescription} image={program.activityImage} />
      <Benefits benefits={program.benefits} />
      <Gallery images={program.galleryImages} />
      <CTA />
      <Footer />
    </main>
  )
}
