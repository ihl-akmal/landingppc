import { GraduationCap, HeartPulse, Briefcase } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { programsData } from "@/lib/program-data"

export function Programs() {
  const programs = [
    {
      icon: GraduationCap,
      title: "Pendidikan Kontekstual",
      description:
        "Anak-anak belajar sambil bermain di Sekolah Alam Paradise, mengasah karakter, bahasa, serta keterampilan sesuai minat dan hobi. Setiap proses belajar dirancang kontekstual, menyenangkan, dan dekat dengan kehidupan sehari-hari. ",
      image: "/galeri/galeri4.jpg",
    },
    {
      icon: HeartPulse,
      title: "Ekonomi Kerakyatan",
      description:
        "Mendampingi komunitas lokal mengembangkan produk kreatif berbasis budaya dan warisan leluhur, mulai dari noken hingga VCO dan keripik. Dengan dukungan kami, usaha mereka bisa bertumbuh sambil menjaga identitas dan kearifan lokal.",
      image: "/galeri/galeri26.jpg",
    },
    {
      icon: Briefcase,
      title: "Hutan Adat & Lingkungan",
      description:
        "Bersama masyarakat adat memetakan wilayah hutan, menjaga ekosistem, dan mengubah sampah plastik menjadi EcoBrick untuk furnitur, menanam mangrove, serta bersih-bersih lingkungan guna menjaga lingkungan tetap lestari.",
      image: "/galeri/galeri18.jpg",
    },
    {
      icon: Briefcase,
      title: "Budaya & Perempuan",
      description:
        "Melestarikan bahasa dan budaya lokal melalui buku saku dialek suku Marind, Marori, dan Kanum. Sementara itu, perempuan didorong untuk terlibat aktif dalam pengambilan keputusan dan kegiatan komunitas, memperkuat peran mereka di kampung.",
      image: "/galeri/galeri25.jpg",
    },
  ]

  return (
    <section id="program" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">Program Kami</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Inisiatif yang lahir dari semangat memberdayakan dan menjaga keberlanjutan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {programsData.map((program, index) => (
            <div key={index} className="bg-background overflow-hidden group flex flex-col h-full">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={program.galleryImages[0]?.src || "/placeholder.svg"}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary mb-4">
                  <program.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3">{program.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-1">{program.shortDescription}</p>
                <Link href={`/program/${program.slug}`}>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full text-sm">
                    Lihat Detail
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
