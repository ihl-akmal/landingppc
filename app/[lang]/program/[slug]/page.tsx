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

export const dynamic = "error"


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
    imageAlt: string;
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
// export async function generateMetadata({ params }: { params: { slug: string; lang: Locale } }) {
//   const program = getProgramBySlug(params.slug)
  

//   if (!program) {
//     return {
//       title: "Program Not Found",
//     }
//   }

//   // Gunakan fallback ke data program jika teks dictionary tidak ditemukan/belum lengkap
//   const title = program.title || "Program Detail"
  

//   return {
//     title: `${title} | Papua Paradise Center`,
//     description: "Community development program by Papua Paradise Center",
//     // keywords: [title, programText?.hero?.category || "Program", "Papua Paradise Center", "Papua", "Community Development"],
//     openGraph: {
//       title: `${title} | Papua Paradise Center`,
//       description: "Community development program by Papua Paradise Center",
//       url: `https://papuaparadisecenter.org/${params.lang}/program/${params.slug}`,
//       siteName: "Papua Paradise Center",
//       locale: params.lang === "id" ? "id_ID" : "en_US",
//       type: "article",
//       images: [
//         {
//           url: program.heroImage,
//           width: 1200,
//           height: 630,
//           alt: title,
//         },
//       ],
//     },
//     // twitter: {
//     //   card: "summary_large_image",
//     //   title: title,
//     //   description: description.slice(0, 160),
//     //   images: [program.heroImage],
//     // },
//     alternates: {
//       canonical: `/${params.lang}/program/${params.slug}`,
//       languages: {
//         'en': `/en/program/${params.slug}`,
//         'id': `/id/program/${params.slug}`,
//       },
//     },
//   }
// }


export default async function ProgramDetailPage({ params }: { params: { slug: string; lang: Locale } }) {
  const program = getProgramBySlug(params.slug)
  const dict = await getDictionary(params.lang)
  const programText = dict.programDetails?.[params.slug as keyof typeof dict.programDetails] as ProgramDetailDict | undefined

  if (!program) {
    notFound()
  }

  // Fallback values untuk mencegah error jika dictionary belum lengkap
  const heroTitle = programText?.hero?.title || ""
  const heroDescription = programText?.hero?.description || ""

  // Schema Markup untuk SEO agar Google mengenali ini sebagai Program/Layanan
  // Schema Markup (SAFE for build & JSON.stringify)
// const jsonLd = {
//   "@context": "https://schema.org",
//   "@type": "Service",
//   name: heroTitle || "Program",
//   description: heroDescription || "Community development program",
//   provider: {
//     "@type": "Organization",
//     name: "Papua Paradise Center",
//     url: "https://papuaparadisecenter.org",
//   },
//   image: program?.heroImage
//     ? [`https://papuaparadisecenter.org${program.heroImage}`]
//     : [],
//   url: `https://papuaparadisecenter.org/${params.lang}/program/${params.slug}`,
// }


  // Menggabungkan data gambar dari program-data.ts dengan alt text dari json
  const galleryImages = program.galleryImages
  ? program.galleryImages.map((img) => ({
      src: img.src,
      alt: programText?.gallery?.imageAlt || heroTitle
    }))
  : []


  return (
    <main className="min-h-screen">
      {/* <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: (() => {
      try {
        return JSON.stringify(jsonLd)
      } catch {
        return ""
      }
    })(),
  }}
/> */}

      <Navigation />
      <ProgramHero
        title={heroTitle}
        category={programText?.hero?.category || "Program"}
        description={heroDescription}
        backgroundImage={program.heroImage}
      />
      <Background title={programText?.background?.title || ""} content={programText?.background?.content || ""} />
      <Activity title={programText?.activity?.title || ""} description={programText?.activity?.description || ""} image={program.activityImage} />
      
      {/* Render Benefits hanya jika data tersedia di dictionary */}
      {programText?.benefits && (
        <Benefits title={programText.benefits.title} subtitle={programText.benefits.subtitle} items={programText.benefits.items} />
      )}
      
      {/* Gallery component might need refactoring to accept title/desc from dict if needed, currently passing images only */}
      {programText?.gallery && (
        <Gallery 
          title={programText.gallery.title}
          description={programText.gallery.description}
          images={galleryImages}
        /> 
      )}
      {dict.common.cta && <CTA dict={dict.common.cta} />}
      {dict.common.footer && <Footer dict={dict.common.footer} />}
    </main>
  )
}
