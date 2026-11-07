import { BadgeCheck, ConciergeBell, ShieldCheck, type LucideIcon } from "lucide-react";
import aboutImg from "@/assets/about-equipment.jpg";
import { aboutHighlights, company } from "@/lib/site-content";
import { Reveal } from "./Reveal";

const icons: Record<(typeof aboutHighlights)[number]["icon"], LucideIcon> = {
  shield: ShieldCheck,
  check: BadgeCheck,
  service: ConciergeBell,
};

export function About() {
  return (
    <section id="about" className="section-y bg-background">
      <div className="container-page grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-7">
          <Reveal>
            <span className="eyebrow">About Us</span>
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
              About {company.shortName}
            </h2>
          </Reveal>
          <Reveal delay={100} className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              {company.name} is a medical equipment trading company based in Sharjah, United Arab Emirates.
              We aim to support healthcare professionals and organizations by providing access to medical
              equipment solutions with a commitment to reliability, quality and professional service.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {aboutHighlights.map((h, i) => {
              const Icon = icons[h.icon];
              return (
                <Reveal key={h.title} delay={150 + i * 90} className="card-lift rounded-2xl border border-border bg-card p-5">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-medical-soft text-medical">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-base font-bold text-navy">{h.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{h.text}</p>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal delay={120} className="relative lg:col-span-5">
          <div className="relative overflow-hidden rounded-3xl shadow-elevated">
            <img
              src={aboutImg}
              alt="Medical equipment specialist inspecting a device in a bright equipment showroom"
              width={1200}
              height={1408}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-border bg-card p-5 shadow-elevated sm:block lg:-left-10">
            <div className="bg-accent-line mb-3 h-1 w-10 rounded-full" />
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Based in</p>
            <p className="mt-1 font-display text-sm font-bold text-navy">{company.location}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
