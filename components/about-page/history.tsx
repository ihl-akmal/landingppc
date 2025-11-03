export default function History() {
  return (
    <section id="sejarah" aria-labelledby="history-title" className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <h2 id="history-title" className="text-2xl font-semibold md:text-3xl">
              Sejarah & Latar Belakang
            </h2>
          </div>
          <div className="md:col-span-7">
            <div className="prose prose-neutral max-w-none dark:prose-invert">
              <p>
                Harapan Bersama berdiri dari kepedulian relawan lintas profesi terhadap akses layanan dasar yang belum
                merata di desa-desa Indonesia. Dimulai dari gerakan kecil berbagi buku dan kelas membaca, kami
                berkembang menjadi program terstruktur yang melibatkan masyarakat, sekolah, dan tenaga kesehatan.
              </p>
              <p>
                Sejak awal, pendekatan kami adalah kolaboratif dan berbasis kebutuhan lokal, memastikan setiap program
                memberikan dampak nyata, terukur, dan berkelanjutan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
