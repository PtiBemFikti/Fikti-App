export const PEMIRA_START_AT = "2026-08-27T10:00:00+07:00";

/** Shared schedule helper; the authoritative enforcement is in the API route. */
export function isPemiraOpen(now: Date = new Date()): boolean {
  const isDevelopment = process.env.NODE_ENV !== "production";
  const forceOpen =
    typeof window === "undefined"
      ? process.env.PEMIRA_DEV_FORCE_OPEN === "true"
      : process.env.NEXT_PUBLIC_PEMIRA_DEV_FORCE_OPEN === "true";

  if (isDevelopment && forceOpen) return true;

  return now.getTime() >= new Date(PEMIRA_START_AT).getTime();
}
