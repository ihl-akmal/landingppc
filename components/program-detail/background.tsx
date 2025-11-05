interface BackgroundProps {
  title: string
  content: string
}

export function Background({ title, content }: BackgroundProps) {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: Title */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary text-balance">{title}</h2>
            </div>

            {/* Right: Description Text Only */}
            <div className="space-y-4 text-lg text-primary leading-relaxed">
              {content.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-pretty">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          
        </div>
      </div>
    </section>
  )
}
