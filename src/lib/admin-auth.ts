"use client";

export type AdminSessionInfo = {
  id: string;
  email: string;
  username: string;
};

export const getAdminSession = async (): Promise<AdminSessionInfo | null> => {
  try {
    const response = await fetch("/api/admin/session", { cache: "no-store" });
    if (!response.ok) return null;

    const result = (await response.json()) as {
      success: boolean;
      data?: AdminSessionInfo;
    };
    return result.success && result.data ? result.data : null;
  } catch {
    return null;
  }
};

export const verifyAdminSession = async (): Promise<boolean> => {
  return Boolean(await getAdminSession());
};

export const logoutAdmin = async () => {
  await fetch("/api/admin/logout", { method: "POST" });
};
