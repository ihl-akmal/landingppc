import { GraduationCap, HeartPulse, Briefcase } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getProgramBySlug, programsData } from "@/lib/program-data"
import { getDictionary } from "@/lib/dictionaries";

// Static assets that don't need translation
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";


type ProgramsDict = {
  title: string;
  subtitle: string;
  cta: string;
  items: {
    title: string;
    description: string;
  }[];
}


export async function Programs({ dict, lang }: { dict: any, lang: string }) {
  
  
  return (
    <section id="program" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">{dict.title}</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            {dict.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {programsData.map((program, index) => {
          // 2. Ambil aset berdasarkan slug program yang aktif
         const Icon = program.icon;
        const image = program.heroImage; 
          const item = dict.items?.[index];

          if (!item) return null // ⛑️ SSG safety

  return (
    <div
      key={program.slug}
      className="bg-background overflow-hidden group flex flex-col h-full"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={program.heroImage || "/placeholder.svg"}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-primary mb-4">
          {Icon && <Icon className="h-6 w-6 text-primary-foreground" />}
        </div>

        <h3 className="text-xl font-bold mb-3">
          {item.title}
        </h3>

        <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
          {item.description}
        </p>

        <Link href={`/${lang}/program/${program.slug}`}>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full text-sm">
            {dict.cta}
          </Button>
        </Link>
      </div>
    </div>
  )
})}

        </div>
      </div>
    </section>
  )
}
