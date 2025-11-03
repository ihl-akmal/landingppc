export default function LegalStructure() {
  return (
    <section id="struktur-hukum" aria-labelledby="legal-title" className="bg-card">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <h2 id="legal-title" className="text-2xl font-semibold md:text-3xl">
              Struktur Hukum
            </h2>
          </div>
          <div className="md:col-span-7">
            <ul className="grid gap-3 text-pretty leading-relaxed text-muted-foreground">
              <li>- Bentuk Badan Hukum: Yayasan (Non-profit)</li>
              <li>- Akta Pendirian: No. 12/2021, disahkan oleh Kemenkumham RI</li>
              <li>- Domisili Hukum: Jakarta, Indonesia</li>
              <li>- Akuntabilitas: Laporan tahunan dan audit independen</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
