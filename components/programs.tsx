import { GraduationCap, HeartPulse, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Programs() {
  const programs = [
    {
      icon: GraduationCap,
      title: "Sekolah Alam Paradise",
      description:
        "Ruang belajar yang membantu anak-anak Papua belajar dengan cara menyenangkan, mulai dari bahasa Inggris, bernyanyi, hingga bermain bersama alam untuk menumbuhkan rasa percaya diri dan cinta belajar.",
      image: "/galeri2.jpg",
    },
    {
      icon: HeartPulse,
      title: "BUMMA",
      description:
        "Badan Usaha Milik Masyarakat yang melibatkan masyarakat adat dalam mengembangkan potensi agar berdaya guna bagi ekonomi berkelanjutan",
      image: "/bumma4.jpg",
    },
    // {
    //   icon: Briefcase,
    //   title: "Program 3",
    //   description:
    //     "Pelatihan kewirausahaan, akses modal usaha, dan pendampingan bisnis untuk meningkatkan kesejahteraan ekonomi keluarga.",
    //   image: "/indonesian-small-business-owner-entrepreneur-worki.jpg",
    // },
  ]

  return (
    <section id="program" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">Program Kami</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Tiga pilar utama yang menjadi fokus kerja kami untuk menciptakan dampak berkelanjutan
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {programs.map((program, index) => (
            <div key={index} className="bg-background overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={program.image || "/placeholder.svg"}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary mb-6">
                  <program.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{program.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{program.description}</p>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full">Lihat Detail</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
