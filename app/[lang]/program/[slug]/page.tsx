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

type ProgramDetailDict = {
  hero: { title: string; category: string; description: string };
  background: { title: string; content: string };
  activity: { title: string; description: string };
  benefits: { 
    title: string; 
    subtitle: string; 
    items: { title: string; description: string }[] 
  };
  gallery: { title: string; description: string; imageAlt: string };
}

// 1. Generate Static Params agar Build Berhasil
export async function generateStaticParams() {
  return programsData.flatMap((program) => 
    i18n.locales.map((locale) => ({
      slug: program.slug,
      lang: locale,
    }))
  )
}

// 2. Metadata Dinamis
export async function generateMetadata({ params }: { params: { slug: string; lang: Locale } }) {
  const { slug, lang } = params
  const program = getProgramBySlug(slug)
  if (!program) return { title: "Program Not Found" }

  return {
    title: `${program.title} | Papua Paradise Center`,
    alternates: {
      languages: {
        'en': `/en/program/${slug}`,
        'id': `/id/program/${slug}`,
      },
    },
  }
}

// 3. Main Page Component
export default async function ProgramDetailPage({ 
  params 
}: { 
  params: { slug: string; lang: Locale } 
}) {
  // Await params untuk keamanan Next.js 14/15
  const { slug, lang } = params
  
  const program = getProgramBySlug(slug)
  const dict = await getDictionary(lang)

  // Safety check: Pastikan data dictionary tersedia
  const programText = dict.programDetails?.[slug as keyof typeof dict.programDetails] as ProgramDetailDict | undefined

  if (!program) {
    notFound()
  }

  const heroTitle = programText?.hero?.title || program.title || ""
  const heroDescription = programText?.hero?.description || ""

  const galleryImages = (program.galleryImages || []).map((img) => ({
    src: img.src,
    alt: programText?.gallery?.imageAlt || heroTitle
  }))

  return (
    <main className="min-h-screen">
      <Navigation dict={dict.common.nav} lang={params.lang} />
      
      <ProgramHero
        title={heroTitle}
        category={programText?.hero?.category || "Program"}
        description={heroDescription}
        backgroundImage={program.heroImage}
      />

      <Background 
        title={programText?.background?.title || ""} 
        content={programText?.background?.content || ""} 
      />

      <Activity 
        title={programText?.activity?.title || ""} 
        description={programText?.activity?.description || ""} 
        image={program.activityImage} 
      />
      
      {programText?.benefits && (
        <Benefits 
          title={programText.benefits.title} 
          subtitle={programText.benefits.subtitle} 
          items={programText.benefits.items || []} 
        />
      )}
      
      {programText?.gallery && (
        <Gallery 
          title={programText.gallery.title}
          description={programText.gallery.description}
          images={galleryImages}
        /> 
      )}

      {/* Gunakan optional chaining agar tidak error saat build jika key belum ada */}
      {dict.common?.cta && <CTA dict={dict.common.cta} />}
      {dict.common?.footer && <Footer dict={dict.common.footer} />}
    </main>
  )
}
