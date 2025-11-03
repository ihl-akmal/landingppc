import { Users, MapPin, Heart, TrendingUp } from "lucide-react"

export function Impact() {
  const stats = [
    {
      icon: Users,
      number: "15,000+",
      label: "Penerima Manfaat",
      description: "Individu yang telah terbantu",
    },
    {
      icon: MapPin,
      number: "45",
      label: "Desa Terbantu",
      description: "Di seluruh Indonesia",
    },
    {
      icon: Heart,
      number: "250+",
      label: "Relawan Aktif",
      description: "Berkomitmen untuk perubahan",
    },
    {
      icon: TrendingUp,
      number: "98%",
      label: "Tingkat Keberhasilan",
      description: "Program yang berkelanjutan",
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">Dampak Nyata yang Kami Ciptakan</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Setiap kontribusi Anda menciptakan perubahan yang terukur dan berkelanjutan
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-background p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary mb-6">
                <stat.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-3">{stat.number}</div>
              <div className="text-xl font-semibold mb-2">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
