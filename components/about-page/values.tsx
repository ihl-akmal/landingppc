export default function Values() {
  const values = [
    {
      title: "Integritas",
      desc: "Transparan, bertanggung jawab, dan berpegang pada etika dalam setiap program dan kemitraan.",
    },
    {
      title: "Kolaborasi",
      desc: "Berkolaborasi dengan masyarakat, pemerintah, sekolah, dan mitra untuk dampak yang lebih luas.",
    },
    {
      title: "Dampak",
      desc: "Fokus pada hasil terukur yang menghadirkan perubahan nyata dan berkelanjutan.",
    },
  ]
  return (
    <section id="nilai" aria-labelledby="values-title" className="bg-card">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="mb-8 md:mb-10">
          <h2 id="values-title" className="text-2xl font-semibold md:text-3xl">
            Nilai-Nilai
          </h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Tiga nilai inti yang membimbing setiap keputusan dan aksi kami.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="rounded-[var(--radius-lg)] border border-border bg-background p-6">
              <h3 className="text-lg font-semibold">{v.title}</h3>
              <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
