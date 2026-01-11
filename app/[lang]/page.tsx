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

// export async function generateMetadata({ params }: { params: { lang: Locale } }) {
//   // Metadata logic here if needed
   
//   return {};
// }

export default async function Home({ params }: any) {
  
  const dict = await getDictionary(params.lang);

  return (
    <main className="min-h-screen">
       <Navigation dict={dict.common.nav} lang={params.lang}/>
      <Hero dict={dict.home.hero} />
      <About dict={dict.home.about} />
      <Impact dict={dict.home.impact} />
      <Programs dict={dict.home.programs} lang={params.lang} />
      {/* <Stories /> */}
      <Gallery dict={dict.home.gallery} />
      {/* <Partners /> */}
      <CTA dict={dict.common.cta} />
      <Footer dict={dict.common.footer} /> 
    </main>
  )
}
