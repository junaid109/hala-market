import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/google"
import Providers from "next-auth/providers4"
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)