import GoogleProvider from "next-auth/providers/google";
import { db } from "./db";
import { users } from "./db/schema";
import { eq } from "drizzle-orm";
import { JWT } from "next-auth/jwt";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_CLIENT_ID!,
      clientSecret: process.env.AUTH_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.AUTH_SECRET!,

  callbacks: {
    async signIn({ user }: any) {
      if (!user?.email) return false;
      const { email, name, image } = user;
      try {
        const [existingUser] = await db
          .select()
          .from(users)
          .where(eq(users.email, email));

        if (!existingUser) {
          await db.insert(users).values({
            email,
            name: name || "Unknown",
            image: image || "",
          });
        }
        return true;
      } catch (error) {
        console.error("Error in signIn callback:", error);
        return false;
      }
    },

    async jwt({ token, account, user }: { token: JWT, account: any, user: any }) {
      if (account && user) {
        const { name, email } = user
        const newUser = await db.select().from(users).where(eq(users.email, email))
        if (newUser) {
          token.id = newUser[0].id
        }
        return token
      }
      return token
    },

    async session({ session, token }: { session: any, token: JWT }) {
      Object.assign(session, { id: token.id });
      return session;
    },
  }
};
