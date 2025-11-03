import { Button } from "@/components/ui/button"
import { Heart, Users } from "lucide-react"

export function CTA() {
  return (
    <section className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">Mari Wujudkan Dampak Bersama</h2>
        <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto opacity-95 text-pretty">
          Setiap kontribusi Anda, sekecil apapun, membawa perubahan nyata bagi mereka yang membutuhkan. Bergabunglah
          dengan kami hari ini.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            asChild
            size="lg"
            className="bg-background text-foreground hover:bg-background/90 px-8 py-6 text-lg font-semibold">
            <a href="https://donasi.npc.id/galang-dana/v2/emergency-gaza-memanggil" target="_blank" rel="noopener noreferrer">
            <Heart className="mr-2 h-5 w-5" /> Donasi Sekarang </a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="bg-transparent text-primary-foreground hover:bg-primary-foreground/10 border-2 border-primary-foreground px-8 py-6 text-lg font-semibold"
          >
            <Users className="mr-2 h-5 w-5" />
            Daftar Jadi Relawan
          </Button>
        </div>
      </div>
    </section>
  )
}
