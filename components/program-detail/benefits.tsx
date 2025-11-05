interface Benefit {
  title: string
  description: string
}

interface BenefitsProps {
  benefits: Benefit[]
}

export function Benefits({ benefits }: BenefitsProps) {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Manfaat yang Mereka Rasakan</h2>
            <p className="text-lg leading-relaxed">
              Menginspirasi perubahan positif dalam kehidupan mereka
            </p>
          </div>

          <div className="space-y-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="grid grid-cols-12 gap-3 items-start">
                <div className="col-span-1 text-2xl md:text-3xl font-bold flex-shrink-0 pr-2">
                  {index + 1}.
                </div>
                <div className="col-span-11 md:col-span-11">
                  <h3 className="text-xl md:text-2xl font-bold pt-1">{benefit.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed mt-2">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="border-b border-border mt-16" />
        </div>
        
      </div>
    </section>
  )
}
