// types/next.d.ts
import { NextApiRequest } from "next";
import { Multer } from "multer";

declare module "next" {
  interface NextApiRequest {
    file?: Express.Multer.File; // Menambahkan properti file
  }
}
