import { Handshake, Headset, PackageCheck, Stethoscope, type LucideIcon } from "lucide-react";
import { expertise } from "@/lib/site-content";
import { Reveal, SectionHeading } from "./Reveal";

const icons: Record<(typeof expertise)[number]["icon"], LucideIcon> = {
  stethoscope: Stethoscope,
  package: PackageCheck,
  headset: Headset,
  handshake: Handshake,
};

export function Expertise() {
  return (
    <section id="expertise" className="section-y bg-background">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="Our Expertise"
              title="Supporting Better Healthcare"
              description="We focus on the areas that matter most to healthcare buyers: the right equipment, dependable supply and attentive support."
            />
          </div>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2 lg:col-span-8">
          {expertise.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <Reveal as="li" key={item.title} delay={i * 80} className="card-lift group relative overflow-hidden rounded-2xl border border-border bg-card p-7 lg:p-8">
                <span className="bg-accent-line absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
                <div className="flex items-start justify-between">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-medical-soft text-medical transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-display text-sm font-bold text-border">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-6 text-lg font-bold text-navy">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
