import jwt from 'jsonwebtoken';
import { Resend } from 'resend';
import NextAuth from 'next-auth';
import { createElement } from 'react';
import { render } from '@react-email/render';
import SimpleInvite from '@/emails/simple-invite';
import AppleProvider from 'next-auth/providers/apple';
import EmailProvider from 'next-auth/providers/email';
import GithubProvider from 'next-auth/providers/google';
import { SupabaseAdapter } from '@auth/supabase-adapter';
import FacebookProvider from 'next-auth/providers/facebook';

const resend = new Resend(process.env.RESEND_API_KEY);

const handler = NextAuth({
  adapter: SupabaseAdapter({
    url: process.env.SUPABASE_URL as string,
    secret: process.env.SUPABASE_SERVICE_ROLE_KEY as string,
  }),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    AppleProvider({
      clientId: process.env.APPLE_ID as string,
      clientSecret: process.env.APPLE_SECRET as string,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID as string,
      clientSecret: process.env.FACEBOOK_SECRET as string,
    }),

    EmailProvider({
      from: 'no-reply@khivatravels.uz',
      async sendVerificationRequest({ identifier, url, provider }) {
        try {
          // Render the React Email template
          const emailHtml = await render(createElement(SimpleInvite, { url }));

          // Send email via Resend
          await resend.emails.send({
            from: provider.from,
            to: identifier,
            subject: 'Verify your email address',
            html: emailHtml,
          });

          console.log('Sign-in email sent successfully!');
        } catch (error) {
          console.error('Error sending sign-in email:', error);
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt', // Use JWT-based sessions
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async jwt({ token, user }) {
      // Initial sign-in
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.role = 'authenticated'; // Add custom data as needed
      }
      console.log('JWT Callback - After:', token);
      return token;
    },
    async session({ session, token }) {
      // Attach token data to the session
      if (token) {
        session.user.id = token.id as string;
        session.user.email = token.email;
      }
      return session;
    },
  },
  debug: true,
  pages: {
    signIn: '/login',
  },
});

export { handler as GET, handler as POST };
