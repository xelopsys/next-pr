import { withAuth } from 'next-auth/middleware';

export default withAuth({
  callbacks: {
    authorized: async ({ token }) => {
      if (token) return true;
      return false;
    },
  },
  pages: {
    signIn: '/login',
  },
});

export const config = { matcher: ['/dashboard'] };
