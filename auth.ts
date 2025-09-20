import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    }),
  ],
  // Optional: callbacks, session, pages etc.
};

const handler = NextAuth(authOptions);

// Export GET and POST for Next.js App Router
export { handler as GET, handler as POST };
