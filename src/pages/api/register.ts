import formidable from 'formidable';
import path from 'path';
import bcrypt from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma'; // Adjust the import according to your project structure

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const form = new formidable.IncomingForm({
    uploadDir: path.join(process.cwd(), "uploads"),
    keepExtensions: true,
  });

  form.parse(req, async (err, fields, files) => {
    if (err) return res.status(500).json({ error: "Form parsing error" });

    const npm = Array.isArray(fields.npm) ? fields.npm[0] : fields.npm;
    const password = Array.isArray(fields.password) ? fields.password[0] : fields.password;
    const krs = Array.isArray(files.krs) ? files.krs[0] : files.krs;

    if (!npm || !password || !krs) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const hashedPassword = bcrypt.hashSync(password as string, 10);

    try {
      const user = await prisma.user.create({
        data: {
          npm: npm as string,
          password: hashedPassword,
          krs: path.basename(krs.filepath as string),
        },
      });
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: "User registration failed" });
    }
  });
}
