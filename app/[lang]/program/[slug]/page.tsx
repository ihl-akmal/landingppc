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
import { getDictionary } from "@/lib/dictionaries"
import { i18n, type Locale } from "@/i18n-config"

export async function generateStaticParams() {
  return programsData.flatMap((program) => 
    i18n.locales.map((locale) => ({
      slug: program.slug,
      lang: locale,
    }))
  )
}

//tambahkan fungsi metadata dinamis
export async function generateMetadata({ params }: { params: { slug: string; lang: Locale } }) {
  const program = getProgramBySlug(params.slug)
  const dict = await getDictionary(params.lang)

  if (!program) {
    return {
      title: dict.common.notFoundTitle,
      description: dict.common.notFoundDesc,
    }
  }

  return {
    title: `${program.title} | Papua Paradise Center`,
    description: program.shortDescription ?? program.heroDescription?.slice(0, 160) ?? "Deskripsi program.",
    
  }
}


export default async function ProgramDetailPage({ params }: { params: { slug: string; lang: Locale } }) {
  const program = getProgramBySlug(params.slug)
  // const dict = await getDictionary(params.lang) // Use this for UI translations

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
