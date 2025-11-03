export function Partners() {
  const partners = [
    { name: "Partner 1", logo: "/generic-company-logo.png" },
    { name: "Partner 2", logo: "/generic-organization-logo.png" },
    { name: "Partner 3", logo: "/foundation-logo.png" },
    { name: "Partner 4", logo: "/generic-corporate-logo.png" },
    { name: "Partner 5", logo: "/ngo-logo.jpg" },
    { name: "Partner 6", logo: "/generic-sponsor-logo.png" },
  ]

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">Partner & Sponsor</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Bersama mitra terpercaya, kami menciptakan dampak yang lebih besar
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-secondary hover:bg-muted transition-colors"
            >
              <img
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                className="w-full h-16 object-contain opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
