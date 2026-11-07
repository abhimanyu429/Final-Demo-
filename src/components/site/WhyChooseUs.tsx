import { BadgeCheck, ClipboardCheck, Handshake, Users, type LucideIcon } from "lucide-react";
import { company, pillars } from "@/lib/site-content";
import { Reveal } from "./Reveal";

const icons: Record<(typeof pillars)[number]["icon"], LucideIcon> = {
  users: Users,
  badge: BadgeCheck,
  handshake: Handshake,
  clipboard: ClipboardCheck,
};

export function WhyChooseUs() {
  return (
    <section id="why-us" className="section-y bg-gradient-navy relative overflow-hidden">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center text-on-dark-muted">Why Choose Us</span>
          <h2 className="mt-5 text-3xl font-bold text-on-dark sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
            Why Choose {company.shortName}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-on-dark-muted sm:text-lg">
            The principles that shape every relationship we build.
          </p>
        </Reveal>
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => {
            const Icon = icons[p.icon];
            return (
              <Reveal
                as="li"
                key={p.title}
                delay={i * 80}
                className="group rounded-2xl border border-on-dark-border bg-on-dark/5 p-7 transition-all duration-500 hover:-translate-y-1 hover:bg-on-dark/10"
              >
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-on-dark-border bg-on-dark/5 text-health transition-colors duration-300 group-hover:bg-health group-hover:text-navy">
                  <Icon className="h-6 w-6" strokeWidth={1.6} />
                </span>
                <h3 className="mt-6 text-lg font-bold text-on-dark">{p.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-on-dark-muted">{p.description}</p>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
