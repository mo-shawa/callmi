import GoogleProvider from 'next-auth/providers/google'
import { AuthOptions } from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'
import { google } from 'googleapis'

const prisma = new PrismaClient()

const options: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'database',
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,

      authorization: {
        params: {
          // non sensitive and calendar scope and events scopes
          scope:
            'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events',
        },
      },
      profile(profile) {
        console.log('profile', profile)
        return {
          id: profile.id,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        }
      },
    }),
  ],
  pages: {
    newUser: '/onboarding/1',
  },
  callbacks: {
    async session({ session, user, newSession, token, trigger }) {
      console.log('session', { session, user, newSession, token, trigger })

      const calendar = google.calendar({
        version: 'v3',
        auth: process.env.GOOGLE_CALENDAR_API_KEY,
      })

      // @ts-ignore
      session.user = user
      return session
    },

    signIn({ user, account, profile, email, credentials }) {
      console.log('signIn', { user, account, profile, email, credentials })
      return true
    },

    jwt({ token, user, account, profile, isNewUser, session, trigger }) {
      console.log('jwt', {
        token,
        user,
        account,
        profile,
        isNewUser,
        session,
        trigger,
      })
      return token
    },
  },
}

export default options
