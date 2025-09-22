import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "./lib/prisma";
import { JWT } from "next-auth/jwt";
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_CLIENT_ID!,
      clientSecret: process.env.AUTH_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }: any) {
      const { email, name, image } = user;
      try {
        if (email && name && image) {
          const existingUser = await prisma.account.findUnique({
            where: { email },
          });
          if (existingUser){
            (user as any).isNewUser=false;
             return true;
            }
          await prisma.account.create({
            data: { name, email, image },
          });
        }
        (user as any).isNewUser=true;
        return true;
      } catch (error) {
        return false;
      }
    },

    async jwt({
      token,
      account,
      user,
    }: {
      token: JWT;
      account: any;
      user: any;
    }) {
      if (account && user) {
        const { email, isNewUser } = user;
        const newUser = await prisma.account.findUnique({ where: { email } });
        if (newUser) token.id = newUser.id;
        token.isNewUser=isNewUser
        return token;
      }
      return token;
    },

    async session({ session, token }: { session: any; token: JWT }) {
      Object.assign(session, { id: token.id ? token.id : "",
        isNewUser: token.isNewUser ?? false
       });

      return session;
    },
  },
};
