import type React from "react"
import { Award, Users, BookOpen, Heart, Zap, Lightbulb } from "lucide-react"

interface Benefit {
  title: string
  description: string
}

interface BenefitsProps {
  benefits: Benefit[]
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Award,
  Users,
  BookOpen,
  Heart,
  Zap,
  Lightbulb,
}

export function Benefits({ benefits }: BenefitsProps) {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">Manfaat Program</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Kami menyediakan berbagai dukungan komprehensif untuk memastikan dampak maksimal
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = iconMap[Object.keys(iconMap)[index % Object.keys(iconMap).length]]
            return (
              <div key={index} className="bg-background p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary mb-6">
                  <Icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
