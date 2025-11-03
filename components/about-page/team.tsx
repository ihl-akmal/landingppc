const team = [
  {
    name: "Ihlasul A'mal",
    role: "Founder & Direktur",
    image: "/founder.jpg",
  },
  {
    name: "Siti Nurhaliza",
    role: "Manajer Program Pendidikan",
    image: "/indonesian-young-woman-student-smiling-portrait.jpg",
  },
  {
    name: "Agus Santoso",
    role: "Manajer Kesehatan Komunitas",
    image: "/indonesian-man-entrepreneur-small-business-owner-s.jpg",
  },
  {
    name: "Dewi Kartika",
    role: "Kemitraan & Operasional",
    image: "/indonesian-women-entrepreneurs-training.jpg",
  },
]

export default function Team() {
  return (
    <section id="tim" aria-labelledby="team-title" className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="mb-8 md:mb-10">
          <h2 id="team-title" className="text-2xl font-semibold md:text-3xl">
            Profil Anggota Tim
          </h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Tim inti yang mendorong misi Harapan Bersama setiap hari.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {team.map((member) => (
            <article key={member.name} className="rounded-[var(--radius-lg)] border border-border bg-card p-4">
              <div className="aspect-square overflow-hidden rounded-[var(--radius-lg)] bg-secondary">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={`Foto ${member.name}`}
                  className="h-full w-full object-cover"
                  crossOrigin="anonymous"
                />
              </div>
              <h3 className="mt-4 text-base font-semibold">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
