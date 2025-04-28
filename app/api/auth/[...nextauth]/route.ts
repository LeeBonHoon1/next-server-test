import NextAuth, { Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import KakaoProvider from "next-auth/providers/kakao";

const handler = NextAuth({
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID!,
      clientSecret: process.env.KAKAO_CLIENT_SECRET!,
      id: "kakao",
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, account }) {
      console.log("🔥 [jwt callback] token:", token);
      console.log("🔥 [jwt callback] account:", account);
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      console.log("🔥 [session callback] session:", session);
      console.log("🔥 [session callback] token:", token);
      if (token) {
        session.accessToken = token.accessToken as string;
      }
      return session;
    },
    async redirect() {
      return "http://localhost:5173/";
    },
  },
});

export { handler as GET, handler as POST };
