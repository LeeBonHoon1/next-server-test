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
      console.log("🔥 [jwt callback] BEFORE token:", token);
      console.log("🔥 [jwt callback] account:", account);

      if (account?.access_token) {
        token.accessToken = account.access_token;
      }

      console.log("🔥 [jwt callback] AFTER token:", token);
      return token;
    },

    async session({ session, token }: { session: Session; token: JWT }) {
      console.log("🔥 [session callback] BEFORE session:", session);
      console.log("🔥 [session callback] token:", token);

      return {
        ...session,
        accessToken: token.accessToken as string,
      };
    },

    async redirect() {
      return "http://localhost:5173/";
    },
  },
});

export { handler as GET, handler as POST };
