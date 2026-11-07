/** Generic runtime error reporter — logs to the console in all environments. */
export function reportError(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  console.error("[Error boundary]", context, error);
}

