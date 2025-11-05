import { Users, Lightbulb, Handshake, Leaf } from "lucide-react"


export function Impact() {
  const stats = [
    {
      icon: Users,
      number: "132",
      label: "Anak Belajar Aktif",
      description: "Anak-anak yang mengikuti Sekolah Alam Paradise.",
    },
    {
      icon: Lightbulb,
      number: "5",
      label: "Bidang Belajar yang Ditekuni",
      description: "Mulai dari bahasa, karakter, ecosociopreneur, anti korupsi, olahraga",
    },
    {
      icon: Handshake,
      number: "4",
      label: "Kelompok Dampingan",
      description: "Kelompok lokal yang terberdayakan",
    },
    {
      icon: Leaf,
      number: "14",
      label: "Produk Lokal Siap Jual",
      description: "Dari noken, keripik, hingga atribut adat.",
    },
  ]


  return (
    <section id="impact" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">Dampak Nyata yang Kami Ciptakan</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Kami mengubah niat baik menjadi hasil yang dapat dilihat dan diukur.
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
