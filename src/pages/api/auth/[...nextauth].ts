import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        npm: { label: "NPM", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const user = await prisma.user.findUnique({
          where: { npm: credentials?.npm },
        });
      
        if (user && bcrypt.compareSync(credentials!.password, user.password)) {
          // Convert the id to a string if it's a number
          return {
            ...user,
            id: user.id.toString(),
          };
        }
      
        return null;
      }      
    })
  ],
  session: {
    strategy: "jwt"
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session, token }) {
        if (token) {
            if (!session.user) {
                session.user = {
                    id: token.sub || '' // Ensure id is always initialized
                };
            } else {
                session.user.id = token.sub || ''; // Ensure id is always set
            }
        }
        return session;
    }
    ,
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id;
      }
      return token;
    }
  }
});
