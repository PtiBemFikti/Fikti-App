import { supabase } from "./supabase";

type AdminSession = {
  isAuthenticated: boolean;
  email: string;
  username: string;
  id: string;
  lastLogin: string;
};

export const getAdminSession = (): AdminSession | null => {
  if (typeof window === 'undefined') return null;
  
  try {
    const session = localStorage.getItem("adminSession");
    return session ? JSON.parse(session) : null;
  } catch (error) {
    console.error("Error reading session:", error);
    return null;
  }
};

export const isAdminAuthenticated = (): boolean => {
  const session = getAdminSession();
  return session?.isAuthenticated === true;
};

export const logoutAdmin = (): void => {
  localStorage.removeItem("adminSession");
  window.location.href = "/pemira/admin/login";
};

export const verifyAdminSession = async (): Promise<boolean> => {
  const session = getAdminSession();
  if (!session) return false;

  try {
    // Verifikasi dengan memeriksa keberadaan admin di database
    const { data: admin, error } = await supabase
      .from("pemira_admin")
      .select("id, email")
      .eq("id", session.id)
      .eq("email", session.email)
      .single();

    if (error || !admin) {
      console.error("Verification error:", error);
      return false;
    }

    return true;
  } catch (error) {
    console.error("Verification error:", error);
    return false;
  }
};