import { ArrowRight, ChevronDown, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-equipment.jpg";
import { company } from "@/lib/site-content";

export function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-navy">
      <img
        src={heroImg}
        alt="Modern hospital room equipped with a patient monitor, infusion pump and hospital bed"
        width={1920}
        height={1088}
        fetchPriority="high"
        className="animate-hero-zoom absolute inset-0 -z-20 h-full w-full object-cover object-[70%_center]"
      />
      <div className="bg-hero-overlay absolute inset-0 -z-10" aria-hidden="true" />

      <div className="container-page pb-24 pt-32">
        <div className="max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <span className="inline-flex items-center gap-2 rounded-full border border-on-dark-border bg-on-dark/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-on-dark-muted backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-health" />
            Medical Equipment Trading
          </span>
          <h1 className="mt-7 text-4xl font-extrabold leading-[1.08] text-on-dark sm:text-5xl lg:text-[4rem]">
            Your Trusted Partner in Medical Equipment Solutions
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-on-dark-muted sm:text-lg">
            {company.name} is committed to supporting healthcare professionals with reliable medical
            equipment solutions and professional service in the UAE.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="hero" size="xl" className="group">
              <a href="#products">
                Explore Our Products
                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
            <Button asChild variant="heroOutline" size="xl">
              <a href="#contact">Contact Our Team</a>
            </Button>
          </div>
          <p className="mt-10 inline-flex items-center gap-2 text-sm text-on-dark-muted">
            <MapPin className="h-4 w-4 text-health" />
            {company.location}
          </p>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About Us"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-on-dark-muted transition-colors hover:text-on-dark md:flex"
      >
        Scroll
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}
