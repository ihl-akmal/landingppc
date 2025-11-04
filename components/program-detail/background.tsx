interface BackgroundProps {
  title: string
  content: string
}

export function Background({ title, content }: BackgroundProps) {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-balance">{title}</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            {content.split("\n\n").map((paragraph, index) => (
              <p key={index} className="text-pretty">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
