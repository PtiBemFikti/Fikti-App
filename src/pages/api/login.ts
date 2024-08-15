import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import pool from "../../lib/db"; // Import koneksi database

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  }

  const { npm, password } = req.body;

  if (!npm || !password) {
    return res.status(400).json({ error: "Missing NPM or password." });
  }

  try {
    // Periksa apakah pengguna dengan npm tersebut ada di database
    const [rows] = await pool.query(
      "SELECT * FROM users WHERE NPM = ?",
      [npm]
    );

    const users = rows as Array<{ password: string }>;

    if (users.length === 0) {
      return res.status(401).json({ error: "Invalid NPM or password." });
    }

    const user = users[0];

    // Periksa apakah password yang dimasukkan cocok dengan yang ada di database
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(401).json({ error: "Invalid NPM or password." });
    }

    // Jika berhasil login, Anda bisa mengatur sesi atau JWT token
    res.status(200).json({ message: "Login successful!" });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: "Database error: " + error.message });
    } else {
      res.status(500).json({ error: "Unknown error occurred." });
    }
  }
}
