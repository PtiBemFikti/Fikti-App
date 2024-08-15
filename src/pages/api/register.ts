import type { NextApiRequest, NextApiResponse } from 'next';
import multer from 'multer';
import bcrypt from 'bcrypt';
import pool from '../../lib/db'; // Import koneksi database

const upload = multer({
  storage: multer.diskStorage({
    destination: './public/uploads',
    filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
  }),
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    upload.single('krs')(req as any, res as any, async (err: any) => {
      if (err) {
        return res.status(500).json({ error: 'Error uploading file.' });
      }

      const { npm, password } = req.body;
      const krsFile = (req as any).file;

      if (!npm || !password || !krsFile) {
        return res.status(400).json({ error: 'Missing NPM, password, or KRS file.' });
      }

      try {
        // Hash password sebelum disimpan
        const hashedPassword = await bcrypt.hash(password, 10);

        // Simpan informasi NPM, password yang sudah di-hash, dan file KRS ke dalam database
        const [result] = await pool.query(
          'INSERT INTO users (npm, password, krs_filename) VALUES (?, ?, ?)',
          [npm, hashedPassword, krsFile.filename]
        );

        res.status(200).json({ message: 'Registration successful!' });
      } catch (error: unknown) {
        if (error instanceof Error) {
          res.status(500).json({ error: 'Database error: ' + error.message });
        } else {
          res.status(500).json({ error: 'Unknown error occurred.' });
        }
      }
    });
  } else {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  }
};

export default handler;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, since we're using multer
  },
};
