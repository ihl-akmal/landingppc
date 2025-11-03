import { Target, Eye } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-balance">Tentang Kami</h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          <div className="space-y-10">
            {/* <div className="mb-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Harapan Bersama adalah organisasi nirlaba yang berdedikasi untuk memberdayakan masyarakat Indonesia
                melalui pendidikan, kesehatan, dan pembangunan ekonomi. Sejak didirikan, kami telah membantu ribuan
                keluarga untuk mencapai kehidupan yang lebih baik dan bermartabat.
              </p>
            </div> */}

            <div>
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-primary p-3">
                  <Eye className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold">Visi</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">Terciptanya SDM Papua yang berkarakter, berperikemanusiaan, menghargai alam Papua, berecosociopreneur dan turut mengambil bagian dalam perekonomian dan kesejahteraan tanah Papua tanpa menghilangkan nilai-nilai Pancasila,
                kebudayaan dan kearifan lokal.</p>
            </div>

            <div>
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-primary p-3">
                  <Target className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold">Misi</h3>
              </div>
              <ul className="space-y-4 text-muted-foreground leading-relaxed pl-16">
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span>Membangun sistem pendidikan khusus dengan metode tepat sasaran.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span>Menciptakan literasi budaya lokal</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span>Membuka diri berkolaborasi dengan semua pihak yang dipandang sevisi misi untuk menciptakan SDM Papua yang mumpuni.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5]">
              {/* Modern diagonal cut shape */}
              <div className="absolute inset-0 overflow-hidden">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10"
                  style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)" }}
                />
              </div>

              {/* Photo with modern clip */}
              <div
                className="relative h-full overflow-hidden"
                style={{ clipPath: "polygon(8% 0, 100% 0, 100% 92%, 0 100%, 0 8%)" }}
              >
                <img src="/galeri5.jpg" alt="Founder PPC" className="w-full h-full object-cover" />
              </div>

              {/* Modern floating text with green background */}
              <div className="absolute bottom-12 left-6 bg-[#10b981] px-5 py-3 shadow-xl">
                <p className="text-base font-bold text-white">Marthen Ayub</p>
                <p className="text-xs text-white/90 mt-0.5">CEO Papua Paradise Center</p>
              </div>

              {/* Decorative accent */}
              <div className="absolute top-8 right-8 w-16 h-16 border-4 border-primary/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
