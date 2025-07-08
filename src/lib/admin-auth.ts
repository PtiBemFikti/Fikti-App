"use client";

export const isAdminAuthenticated = (): boolean => {
  if (typeof window === "undefined") return false;

  const sessionStr = localStorage.getItem("adminSession");
  if (!sessionStr) return false;

  try {
    const session = JSON.parse(sessionStr);
    return session.isAuthenticated === true;
  } catch (e) {
    return false;
  }
};

export const verifyAdminSession = async (): Promise<boolean> => {
  const sessionStr = localStorage.getItem("adminSession");
  if (!sessionStr) return false;

  try {
    const session = JSON.parse(sessionStr);
    return session.isAuthenticated === true;
  } catch (e) {
    return false;
  }
};

export const getAdminSession = () => {
  if (typeof window === "undefined") return null;

  const sessionStr = localStorage.getItem("adminSession");
  if (!sessionStr) return null;

  try {
    return JSON.parse(sessionStr);
  } catch (e) {
    return null;
  }
};

export const logoutAdmin = async () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("adminSession");

    await fetch("/api/admin/logout", {
      method: "POST",
    });
  }
};
