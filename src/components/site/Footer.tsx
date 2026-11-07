import { Mail, MapPin, Phone } from "lucide-react";
import { company, navLinks } from "@/lib/site-content";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy text-on-dark-muted">
      <div className="bg-accent-line h-[3px]" />
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-5">
          <Logo tone="light" />
          <p className="mt-6 font-display text-sm font-bold text-on-dark">{company.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed">{company.shortIntro}</p>
        </div>

        <nav aria-label="Footer" className="lg:col-span-3">
          <h3 className="text-sm font-bold text-on-dark">Quick Links</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-on-dark">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-4">
          <h3 className="text-sm font-bold text-on-dark">Contact</h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li>
              <a href={company.phoneHref} className="inline-flex items-center gap-3 transition-colors hover:text-on-dark">
                <Phone className="h-4 w-4 shrink-0 text-health" />
                {company.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${company.email}`} className="inline-flex items-center gap-3 break-all transition-colors hover:text-on-dark">
                <Mail className="h-4 w-4 shrink-0 text-health" />
                {company.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-health" />
              {company.address}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-on-dark-border">
        <div className="container-page py-6 text-xs">
          <p>
            © {year} {company.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
