// lib/getUserProfile.ts
import { cookies } from 'next/headers';
import {
  scrapeProfileFromVClass,
  StudentIdentity,
  VClassSessionError,
} from './scrapeProfile';

export async function getUserProfile() {
  const cookieStore = cookies();
  const moodle = cookieStore.get('MoodleSession')?.value;

  if (!moodle) {
    throw new VClassSessionError("MoodleSession cookie is missing");
  }

  const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/auth/profile`, {
    headers: {
      Cookie: `MoodleSession=${moodle}`
    }
  });

  if (!response.ok) throw new Error("Failed to fetch user profile");

  const result = await response.json();
  return result;
}

// lib/getProfileFromCookie.ts

export async function getProfileFromCookie() {
  const cookieStore = cookies();
  const moodle = cookieStore.get("MoodleSession")?.value;

  if (!moodle) {
    throw new VClassSessionError("MoodleSession cookie is missing");
  }

  const profile = await scrapeProfileFromVClass(moodle);
  return profile;
}

export function isProfileSessionError(error: unknown): boolean {
  return error instanceof VClassSessionError;
}

export function profileErrorMessage(error: unknown): string {
  if (isProfileSessionError(error)) {
    return "Session V-Class telah berakhir. Silakan login kembali.";
  }

  return "Data profil mahasiswa tidak dapat diverifikasi.";
}

export type { StudentIdentity };
