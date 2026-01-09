import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/i18n-config";
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

export async function generateMetadata({ params }: { params: { lang: Locale } }) {
  // Metadata logic here if needed
   
  return {};
}

export default async function Home({ params }: { params: { lang: Locale } }) {
  const dict = await getDictionary(params.lang);

  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero dict={dict.hero} />
      <About dict={dict.about} />
      <Impact dict={dict.impact} />
      <Programs dict={dict.programs} />
      {/* <Stories /> */}
      <Gallery dict={dict.gallery} />
      {/* <Partners /> */}
      <CTA dict={dict.cta} />
      <Footer dict={dict.footer} />
    </main>
  )
}
