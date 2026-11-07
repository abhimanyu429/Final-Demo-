import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Building2, Clock, ExternalLink, Mail, MailCheck, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { company } from "@/lib/site-content";
import { buildEnquiryMailto, contactDefaults, contactSchema, type ContactValues } from "@/lib/contact-schema";
import { cn } from "@/lib/utils";
import { Reveal, SectionHeading } from "./Reveal";

const details = [
  { icon: Building2, label: "Company", value: company.name, href: "" },
  { icon: Phone, label: "Phone", value: company.phoneDisplay, href: company.phoneHref },
  { icon: Mail, label: "Email", value: company.email, href: `mailto:${company.email}` },
  { icon: MapPin, label: "Address", value: company.address, href: "" },
  { icon: Clock, label: "Business Hours", value: company.businessHours, href: "" },
].filter((d) => d.value);

export function Contact() {
  const [mailtoHref, setMailtoHref] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactValues>({ resolver: zodResolver(contactSchema), defaultValues: contactDefaults });

  const onSubmit = (values: ContactValues) => {
    const href = buildEnquiryMailto(company.email, values);
    setMailtoHref(href);
    window.location.href = href;
    reset();
  };

  const onInvalid = () => toast.error("Please check the highlighted fields.");

  return (
    <section id="contact" className="section-y bg-muted">
      <div className="container-page">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Connect"
          description={`Get in touch with ${company.name} for medical equipment enquiries and business opportunities.`}
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          <Reveal className="space-y-5 lg:col-span-5">
            <ul className="space-y-3">
              {details.map((d) => {
                const inner = (
                  <>
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-medical-soft text-medical transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                      <d.icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{d.label}</p>
                      <p className="mt-1 break-words text-sm font-medium text-navy">{d.value}</p>
                    </div>
                  </>
                );
                return (
                  <li key={d.label}>
                    {d.href ? (
                      <a
                        href={d.href}
                        className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">{inner}</div>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              {company.mapEmbedUrl ? (
                <iframe
                  src={company.mapEmbedUrl}
                  title={`${company.name} location map`}
                  className="h-64 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <div className="relative flex h-64 flex-col items-center justify-center gap-3 bg-medical-soft px-6 text-center">
                  <svg className="absolute inset-0 h-full w-full text-medical/10" aria-hidden="true">
                    <defs>
                      <pattern id="grid" width="28" height="28" patternUnits="userSpaceOnUse">
                        <path d="M28 0H0V28" fill="none" stroke="currentColor" strokeWidth="1" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                  <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-elevated">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <p className="relative text-sm font-semibold text-navy">{company.address}</p>
                  <a
                    href={company.mapSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-navy"
                  >
                    Open in Google Maps
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              )}
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-7">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-10">
              {mailtoHref ? (
                <div className="flex min-h-[28rem] flex-col items-center justify-center text-center" role="status">
                  <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-health-soft text-health">
                    <MailCheck className="h-8 w-8" />
                  </span>
                  <h3 className="mt-6 text-2xl font-bold text-navy">Your email is ready to send</h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                    We opened your email app with your enquiry filled in. Press send there to deliver it to our
                    team. If nothing opened, email us at{" "}
                    <a href={`mailto:${company.email}`} className="font-semibold text-primary hover:text-navy">
                      {company.email}
                    </a>{" "}
                    or call{" "}
                    <a href={company.phoneHref} className="font-semibold text-primary hover:text-navy">
                      {company.phoneDisplay}
                    </a>
                    .
                  </p>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Button asChild variant="brand" size="pill">
                      <a href={mailtoHref}>Open email again</a>
                    </Button>
                    <Button variant="outline" size="pill" onClick={() => setMailtoHref(null)}>
                      Write another enquiry
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit, onInvalid)} noValidate className="grid gap-5 sm:grid-cols-2">
                  <Field id="name" label="Name" required error={errors.name?.message}>
                    <Input id="name" autoComplete="name" placeholder="Your full name" aria-invalid={!!errors.name} {...register("name")} />
                  </Field>
                  <Field id="email" label="Email" required error={errors.email?.message}>
                    <Input id="email" type="email" autoComplete="email" placeholder="you@company.com" aria-invalid={!!errors.email} {...register("email")} />
                  </Field>
                  <Field id="phone" label="Phone" error={errors.phone?.message} className="sm:col-span-2">
                    <Input id="phone" type="tel" autoComplete="tel" placeholder="+971 00 000 0000" aria-invalid={!!errors.phone} {...register("phone")} />
                  </Field>
                  <Field id="message" label="Message" required error={errors.message?.message} className="sm:col-span-2">
                    <Textarea id="message" rows={6} placeholder="Tell us about your equipment requirements" aria-invalid={!!errors.message} {...register("message")} />
                  </Field>
                  <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-muted-foreground">
                      Fields marked * are required. Sending opens your email app.
                    </p>
                    <Button type="submit" variant="brand" size="xl" className="sm:min-w-48">
                      <Send />
                      Send Enquiry
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  required,
  error,
  className,
  children,
}: {
  id: string;
  label: string;
  required?: boolean | undefined;
  error?: string | undefined;
  className?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("flex flex-col gap-2 [&_input]:h-12 [&_input]:rounded-xl [&_input]:bg-muted/50 [&_textarea]:rounded-xl [&_textarea]:bg-muted/50 [&_[aria-invalid=true]]:border-destructive", className)}>
      <Label htmlFor={id} className="text-sm font-semibold text-navy">
        {label}
        {required && <span className="ml-0.5 text-destructive">*</span>}
      </Label>
      {children}
      {error && (
        <p role="alert" className="text-xs font-medium text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
