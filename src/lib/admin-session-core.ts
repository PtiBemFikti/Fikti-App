export const ADMIN_SESSION_COOKIE = "pemira_admin_session";
export const ADMIN_SESSION_MAX_AGE = 60 * 60 * 8;

export type AdminSession = {
  id: string;
  email: string;
  username: string;
  exp: number;
};

function base64UrlEncode(bytes: Uint8Array): string {
  let binary = "";
  for (let index = 0; index < bytes.length; index += 1) {
    binary += String.fromCharCode(bytes[index]);
  }
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function base64UrlDecode(value: string): Uint8Array {
  const base64 = value.replace(/-/g, "+").replace(/_/g, "/");
  const padded = base64.padEnd(Math.ceil(base64.length / 4) * 4, "=");
  const binary = atob(padded);
  return Uint8Array.from(binary, (character) => character.charCodeAt(0));
}

async function getSigningKey(): Promise<CryptoKey | null> {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) return null;

  return crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"]
  );
}

export async function createAdminSessionToken(
  session: Omit<AdminSession, "exp">
): Promise<string> {
  const key = await getSigningKey();
  if (!key) throw new Error("ADMIN_SESSION_SECRET is required");

  const payload: AdminSession = {
    ...session,
    exp: Math.floor(Date.now() / 1000) + ADMIN_SESSION_MAX_AGE,
  };
  const encodedPayload = base64UrlEncode(
    new TextEncoder().encode(JSON.stringify(payload))
  );
  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(encodedPayload)
  );

  return `${encodedPayload}.${base64UrlEncode(new Uint8Array(signature))}`;
}

export async function verifyAdminSessionToken(
  token: string | undefined
): Promise<AdminSession | null> {
  if (!token) return null;

  const [encodedPayload, encodedSignature] = token.split(".");
  if (!encodedPayload || !encodedSignature) return null;

  try {
    const key = await getSigningKey();
    if (!key) return null;

    const valid = await crypto.subtle.verify(
      "HMAC",
      key,
      base64UrlDecode(encodedSignature),
      new TextEncoder().encode(encodedPayload)
    );
    if (!valid) return null;

    const session = JSON.parse(
      new TextDecoder().decode(base64UrlDecode(encodedPayload))
    ) as AdminSession;
    if (
      typeof session.id !== "string" ||
      typeof session.email !== "string" ||
      typeof session.username !== "string" ||
      typeof session.exp !== "number" ||
      session.exp <= Math.floor(Date.now() / 1000)
    ) {
      return null;
    }

    return session;
  } catch {
    return null;
  }
}
