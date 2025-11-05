interface ProgramHeroProps {
  title: string
  category: string
  description: string
  backgroundImage: string
}

export function ProgramHero({ title, category, description, backgroundImage }: ProgramHeroProps) {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-start bg-primary text-primary-foreground pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage || "/placeholder.svg"}
          alt="Program hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/50" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex gap-3 mb-6">
          <span className="px-4 py-2 border-2 border-primary-foreground rounded-full text-sm font-medium">
            {category}
          </span>
          <span className="px-4 py-2 border-2 border-primary-foreground rounded-full text-sm font-medium">{title}</span>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance max-w-3xl">{title}</h1>
        <p className="text-lg md:text-xl max-w-2xl text-pretty opacity-95">{description}</p>
      </div>
    </section>
  )
}
