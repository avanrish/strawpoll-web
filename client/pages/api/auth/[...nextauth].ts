import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

import { User } from '../../../types';

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
    async session({ session, token }) {
      const user: User = { ...session.user };
      user.uid = token.sub;
      session.user = user;
      return session;
    },
  },
});
