interface ActivityProps {
  title: string
  description: string
  image: string
}

export function Activity({ title, description, image }: ActivityProps) {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: Image */}
            <div className="order-2 lg:order-1">
              <img
                src={image || "/placeholder.svg"}
                alt={title}
                className="w-full aspect-[4/3] object-cover rounded-lg"
              />
            </div>

            {/* Right: Title and Description */}
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">{title}</h2>
              <p className="text-lg text-foreground leading-relaxed text-pretty">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
