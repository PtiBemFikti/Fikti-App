export const PEMIRA_START_AT = "2026-08-27T10:00:00+07:00";
export const PEMIRA_END_AT = "2026-08-28T23:00:00+07:00";

export type PemiraScheduleStatus = "coming" | "ongoing" | "closed";

function isDevelopmentForceOpen(): boolean {
  const isDevelopment = process.env.NODE_ENV !== "production";
  const forceOpen =
    typeof window === "undefined"
      ? process.env.PEMIRA_DEV_FORCE_OPEN === "true"
      : process.env.NEXT_PUBLIC_PEMIRA_DEV_FORCE_OPEN === "true";

  return isDevelopment && forceOpen;
}

export function getPemiraScheduleStatus(
  now: Date = new Date()
): PemiraScheduleStatus {
  if (isDevelopmentForceOpen()) return "ongoing";

  const timestamp = now.getTime();
  if (timestamp < new Date(PEMIRA_START_AT).getTime()) return "coming";
  if (timestamp >= new Date(PEMIRA_END_AT).getTime()) return "closed";
  return "ongoing";
}

/** Shared schedule helper; the authoritative enforcement is in the API route. */
export function isPemiraOpen(now: Date = new Date()): boolean {
  return getPemiraScheduleStatus(now) === "ongoing";
}

export function isPemiraClosed(now: Date = new Date()): boolean {
  return getPemiraScheduleStatus(now) === "closed";
}
