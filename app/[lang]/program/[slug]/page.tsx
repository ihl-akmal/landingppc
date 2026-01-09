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

// Definisi tipe data sesuai struktur di program-details.json (seperti HeroDict di hero.tsx)
type ProgramDetailDict = {
  hero: {
    title: string;
    category: string;
    description: string;
  };
  background: {
    title: string;
    content: string;
  };
  activity: {
    title: string;
    description: string;
  };
  benefits: {
    title: string;
    subtitle: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  gallery: {
    title: string;
    description: string;
  };
}

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
  // Mengakses data dengan aman menggunakan key slug
  const programText = dict.programDetails[params.slug as keyof typeof dict.programDetails] as ProgramDetailDict | undefined

  if (!program || !programText) {
    return {
      title: "Program Not Found",
    }
  }

  return {
    title: `${programText.hero.title} | Papua Paradise Center`,
    description: programText.hero.description.slice(0, 160),
    keywords: [programText.hero.title, program.category, "Papua Paradise Center", "Papua", "Community Development"],
    openGraph: {
      title: `${programText.hero.title} | Papua Paradise Center`,
      description: programText.hero.description.slice(0, 160),
      url: `https://papuaparadisecenter.org/${params.lang}/program/${params.slug}`,
      siteName: "Papua Paradise Center",
      locale: params.lang === "id" ? "id_ID" : "en_US",
      type: "article",
      images: [
        {
          url: program.heroImage,
          width: 1200,
          height: 630,
          alt: programText.hero.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: programText.hero.title,
      description: programText.hero.description.slice(0, 160),
      images: [program.heroImage],
    },
    alternates: {
      canonical: `/${params.lang}/program/${params.slug}`,
      languages: {
        'en': `/en/program/${params.slug}`,
        'id': `/id/program/${params.slug}`,
      },
    },
  }
}


export default async function ProgramDetailPage({ params }: { params: { slug: string; lang: Locale } }) {
  const program = getProgramBySlug(params.slug)
  const dict = await getDictionary(params.lang)
  const programText = dict.programDetails[params.slug as keyof typeof dict.programDetails] as ProgramDetailDict | undefined

  if (!program || !programText) {
    notFound()
  }

  // Schema Markup untuk SEO agar Google mengenali ini sebagai Program/Layanan
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": programText.hero.title,
    "description": programText.hero.description,
    "provider": {
      "@type": "Organization",
      "name": "Papua Paradise Center",
      "url": "https://papuaparadisecenter.org"
    },
    "image": [`https://papuaparadisecenter.org${program.heroImage}`],
    "url": `https://papuaparadisecenter.org/${params.lang}/program/${params.slug}`
  }

  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navigation />
      <ProgramHero
        title={programText.hero.title}
        category={programText.hero.category}
        description={programText.hero.description}
        backgroundImage={program.heroImage}
      />
      <Background title={programText.background.title} content={programText.background.content} />
      <Activity title={programText.activity.title} description={programText.activity.description} image={program.activityImage} />
      <Benefits title={programText.benefits.title} subtitle={programText.benefits.subtitle} items={programText.benefits.items} />
      {/* Gallery component might need refactoring to accept title/desc from dict if needed, currently passing images only */}
      <Gallery 
        title={programText.gallery.title}
        description= {programText.gallery.description}
        images={program.galleryImages}
      /> 
      <CTA dict={dict.cta} />
      <Footer dict={dict.footer} />
    </main>
  )
}
