interface ProgramHeroProps {
  title: string
  description: string
}

export function ProgramHero({ title, description }: ProgramHeroProps) {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center bg-primary text-primary-foreground pt-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">{title}</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-pretty opacity-95">{description}</p>
      </div>
    </section>
  )
}
