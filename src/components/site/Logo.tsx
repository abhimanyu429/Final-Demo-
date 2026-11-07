import logoImg from "@/assets/al-naseem-logo.png";
import { company } from "@/lib/site-content";
import { cn } from "@/lib/utils";

/** Official AL NASEEM logo. On dark backgrounds it sits on a white tile so the grey artwork stays visible. */
export function Logo({
  tone = "dark",
  className,
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  const light = tone === "light";
  return (
    <a
      href="#home"
      className={cn("group inline-flex items-center gap-3", className)}
      aria-label={`${company.name} — home`}
    >
      <span
        className={cn(
          "inline-flex shrink-0 items-center justify-center transition-colors",
          light && "rounded-xl bg-background px-1.5 py-1 shadow-soft",
        )}
      >
        <img
          src={logoImg}
          alt={company.shortName}
          width={640}
          height={416}
          className="h-11 w-auto sm:h-12"
        />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.05rem] font-extrabold tracking-tight",
            light ? "text-on-dark" : "text-navy",
          )}
        >
          {company.shortName}
        </span>
        <span
          className={cn(
            "mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em]",
            light ? "text-on-dark-muted" : "text-muted-foreground",
          )}
        >
          {company.tagline}
        </span>
      </span>
    </a>
  );
}
