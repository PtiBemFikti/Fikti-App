// lib/getUserProfile.ts
import { cookies } from 'next/headers';
import { scrapeProfileFromVClass } from './scrapeProfile';

export async function getUserProfile() {
  const cookieStore = cookies();
  const moodle = cookieStore.get('MoodleSession')?.value;

  if (!moodle) {
    throw new Error("Unauthorized: no session cookie");
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
    throw new Error("Unauthorized: no MoodleSession cookie");
  }

  const profile = await scrapeProfileFromVClass(moodle);
  return profile;
}
