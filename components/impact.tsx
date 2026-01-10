import { Users, Lightbulb, Handshake, Leaf } from "lucide-react"

const ICONS = [Users, Lightbulb, Handshake, Leaf];

type ImpactDict = {
  ImpactTitle: string;
  ImpactSubtitle: string;
  ImpactStats: {
    number: string;
    label: string;
    description: string;
  }[];
};

export function Impact({ dict }: { dict: ImpactDict }) {
  return (
    <section id="impact" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">{dict.ImpactTitle}</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            {dict.ImpactSubtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {dict.ImpactStats.map((stat, index) => {
            const Icon = ICONS[index] || Users;
            return (
              <div key={index} className="bg-background p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary mb-6">
                  <Icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-3">
                  {stat?.number ?? ""}
                </div>

                <div className="text-xl font-semibold mb-2">
                  {stat?.label ?? ""}
                </div>

                <div className="text-sm text-muted-foreground">
                  {stat?.description ?? ""}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}
