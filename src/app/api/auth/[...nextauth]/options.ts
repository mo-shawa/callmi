import GoogleProvider from 'next-auth/providers/google'
import { AuthOptions } from 'next-auth'

const options: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      profile(profile) {
        return {
          ...profile,
          id: profile.sub,
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, trigger }) {
      // console.log('JWT CALLBACK --- ', { token, user })
      // console.log('TRIGGER --- ', trigger)
      if (user) {
        token.id = user.id
      }
      return token
    },
    async session({ session, token }) {
      // console.log('SESSION CALLBACK --- ', { session, token })
      if (session?.user) {
        // @ts-ignore
        session.user.id = token.sub
      }
      return session
    },
  },
}

export default options
