'use client';
import { Toaster } from '@/components/application/notifications/toaster';
import { ThemeProvider } from 'next-themes';

export function Theme({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider enableSystem={true}>
      <Toaster />
      {children}
    </ThemeProvider>
  );
}
