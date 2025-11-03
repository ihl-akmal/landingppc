export default function VisionMission() {
  return (
    <section id="visi-misi" aria-labelledby="vm-title" className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <h2 id="vm-title" className="text-2xl font-semibold md:text-3xl">
              Visi & Misi
            </h2>
          </div>
          <div className="md:col-span-7">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold">Visi</h3>
                <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                  Terwujudnya masyarakat Indonesia yang tangguh, sehat, dan berdaya melalui akses pendidikan, kesehatan,
                  dan ekonomi yang adil.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Misi</h3>
                <ul className="mt-2 grid list-disc gap-2 pl-5 text-muted-foreground">
                  <li>Meningkatkan literasi dan kualitas pembelajaran anak.</li>
                  <li>Memperluas layanan kesehatan preventif berbasis komunitas.</li>
                  <li>Mendorong kewirausahaan mikro dan penguatan ekonomi keluarga.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
