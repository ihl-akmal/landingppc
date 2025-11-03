import { Quote } from "lucide-react"

export function Stories() {
  const testimonials = [
    {
      name: "Siti Nurhaliza",
      role: "Penerima Beasiswa Pendidikan",
      image: "/indonesian-young-woman-student-smiling-portrait.jpg",
      quote:
        "Berkat program beasiswa ini, saya bisa melanjutkan kuliah dan mewujudkan mimpi menjadi guru. Sekarang saya ingin membantu anak-anak lain seperti saya dulu.",
    },
    {
      name: "Budi Santoso",
      role: "Peserta Program Pemberdayaan Ekonomi",
      image: "/indonesian-man-entrepreneur-small-business-owner-s.jpg",
      quote:
        "Program pelatihan kewirausahaan membuka mata saya tentang peluang bisnis. Kini usaha kecil saya berkembang dan bisa menghidupi keluarga dengan layak.",
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">Kisah Perubahan</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Dengarkan langsung dari mereka yang telah merasakan dampak program kami
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-secondary p-8 md:p-10">
              <Quote className="h-10 w-10 text-primary mb-6" />
              <p className="text-lg leading-relaxed mb-8 text-pretty">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-16 h-16 object-cover"
                />
                <div>
                  <div className="font-semibold text-lg">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
