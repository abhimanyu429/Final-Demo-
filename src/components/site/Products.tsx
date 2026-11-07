import { ArrowUpRight } from "lucide-react";
import equipmentImg from "@/assets/product-medical-equipment.jpg";
import diagnosticImg from "@/assets/product-diagnostic.jpg";
import hospitalImg from "@/assets/product-hospital.jpg";
import instrumentsImg from "@/assets/product-instruments.jpg";
import suppliesImg from "@/assets/product-supplies.jpg";
import accessoriesImg from "@/assets/product-accessories.jpg";
import { productCategories } from "@/lib/site-content";
import { Reveal, SectionHeading } from "./Reveal";

const images: Record<(typeof productCategories)[number]["image"], string> = {
  equipment: equipmentImg,
  diagnostic: diagnosticImg,
  hospital: hospitalImg,
  instruments: instrumentsImg,
  supplies: suppliesImg,
  accessories: accessoriesImg,
};

export function Products() {
  return (
    <section id="products" className="section-y bg-muted">
      <div className="container-page">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Our Products"
            title="Medical Equipment & Healthcare Solutions"
            description="An overview of the product categories we work with. Contact our team to confirm current availability for your requirements."
          />
          <Reveal delay={120}>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-navy"
            >
              Enquire about a product
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((p, i) => (
            <Reveal
              as="li"
              key={p.title}
              delay={(i % 3) * 90}
              className="card-lift group overflow-hidden rounded-3xl border border-border bg-card"
            >
              <div className="relative overflow-hidden">
                <img
                  src={images[p.image]}
                  alt={p.title}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <span className="bg-accent-line absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
              </div>
              <div className="p-6 lg:p-7">
                <h3 className="text-lg font-bold text-navy">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-navy"
                  aria-label={`Enquire about ${p.title}`}
                >
                  Enquire
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
